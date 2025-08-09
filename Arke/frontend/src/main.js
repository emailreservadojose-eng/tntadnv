// frontend/src/main.js
import { initAuth } from 'Arke/frontend/src/ui/auth.js';
import { initGame } from 'Arke/frontend/src/game/engine/gameLoop.js';
import { loadAssets } from 'Arke/frontend/src/game/engine/assets.js';

(async () => {
  await loadAssets();
  initAuth(async () => {
    await initGame();
  });
})();
