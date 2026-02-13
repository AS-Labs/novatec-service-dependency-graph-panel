import CanvasDrawer from './graph_canvas';
import _ from 'lodash';
import { Particles, Particle, IntGraphMetrics } from '../../types';

export default class ParticleEngine {
  drawer: CanvasDrawer;

  maxVolume = 800;

  animating: boolean;

  lastSpawnTime = 0;

  cachedCount = 0;

  constructor(canvasDrawer: CanvasDrawer) {
    this.drawer = canvasDrawer;
    this.animating = false;
  }

  start() {
    this.animating = true;
  }

  stop() {
    this.animating = false;
  }

  /**
   * Called once per frame from the requestAnimationFrame loop in CanvasDrawer.
   * This is the sole driver of particle state — no setInterval.
   */
  tick(now: number) {
    if (this.animating && now - this.lastSpawnTime >= 60) {
      this._spawnParticles(now);
      this.lastSpawnTime = now;
    }
  }

  hasParticles() {
    return this.cachedCount > 0;
  }

  _spawnParticles(now: number) {
    const cy = this.drawer.cytoscape;
    const settings = this.drawer.controller.getSettings(true);
    const maxCount = settings.particleMaxCount;
    const density = settings.particleDensity;

    // Skip spawning entirely if at capacity or density is 0
    if (density <= 0 || this.cachedCount >= maxCount) {
      return;
    }

    cy.edges().forEach((edge) => {
      // Re-check cap each edge to avoid overshooting
      if (this.cachedCount >= maxCount) {
        return;
      }

      let particles: Particles = edge.data('particles');
      const metrics: IntGraphMetrics = edge.data('metrics');

      if (!metrics) {
        return;
      }

      const rate = _.defaultTo(metrics.rate, 0);
      const error_rate = _.defaultTo(metrics.error_rate, 0);
      const volume = rate + error_rate;

      let errorRate: number;
      if (rate > 0 && error_rate >= 0) {
        errorRate = error_rate / rate;
      } else {
        errorRate = 0;
      }

      if (particles === undefined) {
        particles = {
          normal: [],
          danger: [],
        };
        edge.data('particles', particles);
      }

      if (volume > 0) {
        const spawnProbability = Math.min(volume / this.maxVolume, 1.0) * density;
        for (let i = 0; i < 5; i++) {
          if (this.cachedCount >= maxCount) {
            break;
          }
          if (Math.random() <= spawnProbability) {
            const particle: Particle = {
              velocity: 0.05 + Math.random() * 0.05,
              startTime: now,
            };
            if (Math.random() < errorRate) {
              particles.danger.push(particle);
            } else {
              particles.normal.push(particle);
            }
            this.cachedCount++;
          }
        }
      }
    });
  }

  count() {
    const cy = this.drawer.cytoscape;

    const count = _(cy.edges())
      .map((edge) => edge.data('particles'))
      .filter()
      .map((particleArray: Particles) => particleArray.normal.length + particleArray.danger.length)
      .sum();

    this.cachedCount = count;
    return count;
  }
}
