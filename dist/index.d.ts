export type CapabilityId = 'core' | 'audio' | 'rtc' | 'ai' | 'relay' | 'ui' | 'streaming';
export type RuntimeLane = 'client_local' | 'bridge' | 'server_sim' | 'runtime_ai' | 'asset_library' | 'render_helper' | 'pure_helper';
export type AuthorityMode = 'host_client' | 'server_sim';
export type RuntimeSupport = 'implemented' | 'fallback' | 'noop' | 'unsupported';
export interface RuntimeCapabilityContract {
    readonly capability: CapabilityId;
    readonly lane: RuntimeLane;
    readonly serverSim: RuntimeSupport;
    readonly authorityModes: readonly AuthorityMode[];
    readonly callbacks?: readonly string[];
    readonly requiresAny?: readonly string[];
    readonly message?: string;
}
export declare const CTX_RUNTIME_CONTRACT: {
    readonly getLocalUserId: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getRoomInfo: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly isHost: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getNetworkProfile: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getPredictionStats: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getRelayRTT: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly sendAction: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly sendDecisiveEvent: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getPendingDecisiveEvents: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getPhase: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getState: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly _inited: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly W: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly H: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly hasWorldSpace: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly worldW: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly worldH: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly scaleX: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly scaleY: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly toScreenX: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly toScreenY: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly toWorldX: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly toWorldY: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly dpr: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly PHASE_LOBBY: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly PHASE_PLAYING: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly PHASE_RESULT: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly START_ACTION: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly canStartGame: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly requestStartGame: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getGameData: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly hasCapability: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly requestFlavor: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getFlavor: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly requestJudge: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getJudge: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly requestDirector: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getDirectorProposal: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly logAIEvent: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly onStreamEvent: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly bindStream: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly unbindStream: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly settleMatch: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly showTextInput: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly hideTextInput: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getPlayers: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getPlayer: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getLocalPlayer: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly requestProfiles: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly playSound: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly stopSound: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly setBgm: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly stopBgm: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly setVolume: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly startRtc: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly stopRtc: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly toggleAudio: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly toggleVideo: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly getRtcState: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly getRtcSpeaking: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly media: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly startMedia: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly stopMedia: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly toggleMic: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly toggleCamera: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly getVideoFrame: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly listVideoUsers: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly drawVideo: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly startStt: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly stopStt: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly setSttProvider: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly getSttState: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly getSttProvider: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly listSttProviders: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly stt: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly hostMedia: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message: string;
    };
    readonly getPlayerCount: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly spawnBot: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly despawnBot: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly isBot: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly setBotBlackboard: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getBotAction: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly clearBotBlackboard: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getAsset: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getAssetUrl: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getAssetNames: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly isRealPlayer: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly isSpectator: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly getMaxPlayers: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly fillRoundRect: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly strokeRoundRect: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly drawCard: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly drawButton: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly drawProgressBar: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly drawText: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly drawCircle: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly fillGradient: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly drawSprite: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly drawBackground: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly drawTile: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly screenShake: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly setUiTree: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly setHud: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly clearHud: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly setTextInput: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly setVideo: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly locale: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly fontStack: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly t: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly formatNumber: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly lerp: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly easeOut: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly easeInOut: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
    readonly lerpColor: {
        capability: CapabilityId;
        lane: RuntimeLane;
        serverSim: RuntimeSupport;
        authorityModes: readonly AuthorityMode[];
        callbacks?: readonly string[];
        requiresAny?: readonly string[];
        message?: string;
    };
};
export type CtxRuntimeApi = keyof typeof CTX_RUNTIME_CONTRACT;
