/**
 * Cursor-tracked reflections for the honeycomb background.
 *
 * Publishes the pointer position to CSS custom properties on <html>; the
 * gradient, masking and fade all live in styles.css (#comb-light). The layer is
 * created here rather than in markup so the static comb texture still renders
 * with scripting unavailable.
 *
 * Skipped entirely for coarse pointers (no hover to follow) and for visitors
 * who have asked for reduced motion.
 */
(function () {
  'use strict';

  var FINE_POINTER = '(hover: hover) and (pointer: fine)';
  var REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
  var LAYER_ID = 'comb-light';
  var LIT_CLASS = 'is-lit';
  // Gates the specular sweep on the glass surfaces (see styles.css). Kept on
  // the root so a single class controls every glass element at once.
  var ROOT_LIT_CLASS = 'pointer-lit';

  if (!window.matchMedia || !window.matchMedia(FINE_POINTER).matches) return;
  if (window.matchMedia(REDUCED_MOTION).matches) return;

  var root = document.documentElement;
  var layer = document.createElement('div');
  layer.id = LAYER_ID;
  layer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(layer);

  var pointerX = 0;
  var pointerY = 0;
  var frame = 0;

  function paint() {
    frame = 0;
    root.style.setProperty('--pointer-x', pointerX + 'px');
    root.style.setProperty('--pointer-y', pointerY + 'px');
  }

  // Pointer events fire far faster than the compositor repaints, so coalesce
  // them onto one frame rather than thrashing style recalculation.
  function onPointerMove(event) {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!layer.classList.contains(LIT_CLASS)) {
      layer.classList.add(LIT_CLASS);
      root.classList.add(ROOT_LIT_CLASS);
    }
    if (!frame) frame = window.requestAnimationFrame(paint);
  }

  function onPointerLeave() {
    if (frame) {
      window.cancelAnimationFrame(frame);
      frame = 0;
    }
    layer.classList.remove(LIT_CLASS);
    root.classList.remove(ROOT_LIT_CLASS);
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('pointerleave', onPointerLeave);
  window.addEventListener('blur', onPointerLeave);
})();
