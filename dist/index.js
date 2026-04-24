export const CTX_RUNTIME_CONTRACT = {
  getGameData: {
    serverSim: 'implemented',
    callbacks: ['initState', 'initPlayer', 'onAction', 'onTick', 'render', 'view', 'buildSyncState'],
  },
  sendAction: {
    serverSim: 'implemented',
    callbacks: ['customActions', 'view'],
  },
  requestFlavor: {
    serverSim: 'fallback',
    callbacks: ['onAction', 'onTick', 'onPhaseChange'],
    requiresAny: ['fallbackText', 'fallbackUrl'],
    message:
      'server_sim allows ctx.requestFlavor only with a deterministic fallback (fallbackText or fallbackUrl), because sim-service must be able to resolve AI flavor lanes headlessly.',
  },
  getFlavor: {
    serverSim: 'fallback',
    callbacks: ['onAction', 'onTick', 'render', 'view', 'buildSyncState'],
  },
  requestJudge: {
    serverSim: 'unsupported',
    message:
      'server_sim does not support ctx.requestJudge yet. Use deterministic game logic, or switch away from server_sim until the authoritative judge lane is implemented.',
  },
  getJudge: {
    serverSim: 'unsupported',
    message: 'server_sim does not support ctx.getJudge yet.',
  },
  requestDirector: {
    serverSim: 'unsupported',
    message:
      'server_sim does not support ctx.requestDirector yet. Dynamic rule changes must be deterministic or handled by a future authoritative director lane.',
  },
  getDirectorProposal: {
    serverSim: 'unsupported',
    message: 'server_sim does not support ctx.getDirectorProposal yet.',
  },
  setHud: { serverSim: 'noop' },
  setUiTree: { serverSim: 'noop' },
  setTextInput: { serverSim: 'noop' },
  setBgm: { serverSim: 'noop' },
  stopBgm: { serverSim: 'noop' },
  playSound: { serverSim: 'noop' },
};
