export type RuntimeSupport = 'implemented' | 'fallback' | 'noop' | 'unsupported';

export interface RuntimeCapabilityContract {
  readonly serverSim: RuntimeSupport;
  readonly callbacks?: readonly string[];
  readonly requiresAny?: readonly string[];
  readonly message?: string;
}

export declare const CTX_RUNTIME_CONTRACT: {
  readonly getGameData: {
    readonly serverSim: 'implemented';
    readonly callbacks: readonly ['initState', 'initPlayer', 'onAction', 'onTick', 'render', 'view', 'buildSyncState'];
  };
  readonly sendAction: {
    readonly serverSim: 'implemented';
    readonly callbacks: readonly ['customActions', 'view'];
  };
  readonly requestFlavor: {
    readonly serverSim: 'fallback';
    readonly callbacks: readonly ['onAction', 'onTick', 'onPhaseChange'];
    readonly requiresAny: readonly ['fallbackText', 'fallbackUrl'];
    readonly message: string;
  };
  readonly getFlavor: {
    readonly serverSim: 'fallback';
    readonly callbacks: readonly ['onAction', 'onTick', 'render', 'view', 'buildSyncState'];
  };
  readonly requestJudge: {
    readonly serverSim: 'unsupported';
    readonly message: string;
  };
  readonly getJudge: {
    readonly serverSim: 'unsupported';
    readonly message: string;
  };
  readonly requestDirector: {
    readonly serverSim: 'unsupported';
    readonly message: string;
  };
  readonly getDirectorProposal: {
    readonly serverSim: 'unsupported';
    readonly message: string;
  };
  readonly setHud: { readonly serverSim: 'noop' };
  readonly setUiTree: { readonly serverSim: 'noop' };
  readonly setTextInput: { readonly serverSim: 'noop' };
  readonly setBgm: { readonly serverSim: 'noop' };
  readonly stopBgm: { readonly serverSim: 'noop' };
  readonly playSound: { readonly serverSim: 'noop' };
};
