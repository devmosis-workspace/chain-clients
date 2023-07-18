import * as _0 from "../fiattokenfactory/blacklisted";
import * as _1 from "../fiattokenfactory/blacklister";
import * as _2 from "../fiattokenfactory/genesis";
import * as _3 from "../fiattokenfactory/master_minter";
import * as _4 from "../fiattokenfactory/minter_controller";
import * as _5 from "../fiattokenfactory/minters";
import * as _6 from "../fiattokenfactory/minting_denom";
import * as _7 from "../fiattokenfactory/owner";
import * as _8 from "../fiattokenfactory/params";
import * as _9 from "../fiattokenfactory/paused";
import * as _10 from "../fiattokenfactory/pauser";
import * as _11 from "../fiattokenfactory/query";
import * as _12 from "../fiattokenfactory/tx";
import * as _13 from "../globalfee/genesis";
import * as _14 from "../globalfee/query";
import * as _15 from "../tariff/genesis";
import * as _16 from "../tariff/params";
import * as _17 from "../tokenfactory/blacklisted";
import * as _18 from "../tokenfactory/blacklister";
import * as _19 from "../tokenfactory/genesis";
import * as _20 from "../tokenfactory/master_minter";
import * as _21 from "../tokenfactory/minter_controller";
import * as _22 from "../tokenfactory/minters";
import * as _23 from "../tokenfactory/minting_denom";
import * as _24 from "../tokenfactory/owner";
import * as _25 from "../tokenfactory/params";
import * as _26 from "../tokenfactory/paused";
import * as _27 from "../tokenfactory/pauser";
import * as _28 from "../tokenfactory/query";
import * as _29 from "../tokenfactory/tx";
import * as _137 from "../fiattokenfactory/query.lcd";
import * as _138 from "../globalfee/query.lcd";
import * as _139 from "../tokenfactory/query.lcd";
import * as _140 from "../fiattokenfactory/query.rpc.Query";
import * as _141 from "../globalfee/query.rpc.Query";
import * as _142 from "../tokenfactory/query.rpc.Query";
import * as _143 from "../fiattokenfactory/tx.rpc.msg";
import * as _144 from "../tokenfactory/tx.rpc.msg";
export declare namespace noble {
    const fiattokenfactory: {
        MsgClientImpl: typeof _143.MsgClientImpl;
        QueryClientImpl: typeof _140.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
            blacklisted(request: _11.QueryGetBlacklistedRequest): Promise<_11.QueryGetBlacklistedResponse>;
            blacklistedAll(request?: _11.QueryAllBlacklistedRequest): Promise<_11.QueryAllBlacklistedResponse>;
            paused(request?: _11.QueryGetPausedRequest): Promise<_11.QueryGetPausedResponse>;
            masterMinter(request?: _11.QueryGetMasterMinterRequest): Promise<_11.QueryGetMasterMinterResponse>;
            minters(request: _11.QueryGetMintersRequest): Promise<_11.QueryGetMintersResponse>;
            mintersAll(request?: _11.QueryAllMintersRequest): Promise<_11.QueryAllMintersResponse>;
            pauser(request?: _11.QueryGetPauserRequest): Promise<_11.QueryGetPauserResponse>;
            blacklister(request?: _11.QueryGetBlacklisterRequest): Promise<_11.QueryGetBlacklisterResponse>;
            owner(request?: _11.QueryGetOwnerRequest): Promise<_11.QueryGetOwnerResponse>;
            minterController(request: _11.QueryGetMinterControllerRequest): Promise<_11.QueryGetMinterControllerResponse>;
            minterControllerAll(request?: _11.QueryAllMinterControllerRequest): Promise<_11.QueryAllMinterControllerResponse>;
            mintingDenom(request?: _11.QueryGetMintingDenomRequest): Promise<_11.QueryGetMintingDenomResponse>;
        };
        LCDQueryClient: typeof _137.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateMasterMinter(value: _12.MsgUpdateMasterMinter): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updatePauser(value: _12.MsgUpdatePauser): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateBlacklister(value: _12.MsgUpdateBlacklister): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateOwner(value: _12.MsgUpdateOwner): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                acceptOwner(value: _12.MsgAcceptOwner): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                configureMinter(value: _12.MsgConfigureMinter): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeMinter(value: _12.MsgRemoveMinter): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                mint(value: _12.MsgMint): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                burn(value: _12.MsgBurn): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                blacklist(value: _12.MsgBlacklist): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unblacklist(value: _12.MsgUnblacklist): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                pause(value: _12.MsgPause): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unpause(value: _12.MsgUnpause): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                configureMinterController(value: _12.MsgConfigureMinterController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeMinterController(value: _12.MsgRemoveMinterController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateMasterMinter(value: _12.MsgUpdateMasterMinter): {
                    typeUrl: string;
                    value: _12.MsgUpdateMasterMinter;
                };
                updatePauser(value: _12.MsgUpdatePauser): {
                    typeUrl: string;
                    value: _12.MsgUpdatePauser;
                };
                updateBlacklister(value: _12.MsgUpdateBlacklister): {
                    typeUrl: string;
                    value: _12.MsgUpdateBlacklister;
                };
                updateOwner(value: _12.MsgUpdateOwner): {
                    typeUrl: string;
                    value: _12.MsgUpdateOwner;
                };
                acceptOwner(value: _12.MsgAcceptOwner): {
                    typeUrl: string;
                    value: _12.MsgAcceptOwner;
                };
                configureMinter(value: _12.MsgConfigureMinter): {
                    typeUrl: string;
                    value: _12.MsgConfigureMinter;
                };
                removeMinter(value: _12.MsgRemoveMinter): {
                    typeUrl: string;
                    value: _12.MsgRemoveMinter;
                };
                mint(value: _12.MsgMint): {
                    typeUrl: string;
                    value: _12.MsgMint;
                };
                burn(value: _12.MsgBurn): {
                    typeUrl: string;
                    value: _12.MsgBurn;
                };
                blacklist(value: _12.MsgBlacklist): {
                    typeUrl: string;
                    value: _12.MsgBlacklist;
                };
                unblacklist(value: _12.MsgUnblacklist): {
                    typeUrl: string;
                    value: _12.MsgUnblacklist;
                };
                pause(value: _12.MsgPause): {
                    typeUrl: string;
                    value: _12.MsgPause;
                };
                unpause(value: _12.MsgUnpause): {
                    typeUrl: string;
                    value: _12.MsgUnpause;
                };
                configureMinterController(value: _12.MsgConfigureMinterController): {
                    typeUrl: string;
                    value: _12.MsgConfigureMinterController;
                };
                removeMinterController(value: _12.MsgRemoveMinterController): {
                    typeUrl: string;
                    value: _12.MsgRemoveMinterController;
                };
            };
            fromJSON: {
                updateMasterMinter(value: any): {
                    typeUrl: string;
                    value: _12.MsgUpdateMasterMinter;
                };
                updatePauser(value: any): {
                    typeUrl: string;
                    value: _12.MsgUpdatePauser;
                };
                updateBlacklister(value: any): {
                    typeUrl: string;
                    value: _12.MsgUpdateBlacklister;
                };
                updateOwner(value: any): {
                    typeUrl: string;
                    value: _12.MsgUpdateOwner;
                };
                acceptOwner(value: any): {
                    typeUrl: string;
                    value: _12.MsgAcceptOwner;
                };
                configureMinter(value: any): {
                    typeUrl: string;
                    value: _12.MsgConfigureMinter;
                };
                removeMinter(value: any): {
                    typeUrl: string;
                    value: _12.MsgRemoveMinter;
                };
                mint(value: any): {
                    typeUrl: string;
                    value: _12.MsgMint;
                };
                burn(value: any): {
                    typeUrl: string;
                    value: _12.MsgBurn;
                };
                blacklist(value: any): {
                    typeUrl: string;
                    value: _12.MsgBlacklist;
                };
                unblacklist(value: any): {
                    typeUrl: string;
                    value: _12.MsgUnblacklist;
                };
                pause(value: any): {
                    typeUrl: string;
                    value: _12.MsgPause;
                };
                unpause(value: any): {
                    typeUrl: string;
                    value: _12.MsgUnpause;
                };
                configureMinterController(value: any): {
                    typeUrl: string;
                    value: _12.MsgConfigureMinterController;
                };
                removeMinterController(value: any): {
                    typeUrl: string;
                    value: _12.MsgRemoveMinterController;
                };
            };
            fromPartial: {
                updateMasterMinter(value: _12.MsgUpdateMasterMinter): {
                    typeUrl: string;
                    value: _12.MsgUpdateMasterMinter;
                };
                updatePauser(value: _12.MsgUpdatePauser): {
                    typeUrl: string;
                    value: _12.MsgUpdatePauser;
                };
                updateBlacklister(value: _12.MsgUpdateBlacklister): {
                    typeUrl: string;
                    value: _12.MsgUpdateBlacklister;
                };
                updateOwner(value: _12.MsgUpdateOwner): {
                    typeUrl: string;
                    value: _12.MsgUpdateOwner;
                };
                acceptOwner(value: _12.MsgAcceptOwner): {
                    typeUrl: string;
                    value: _12.MsgAcceptOwner;
                };
                configureMinter(value: _12.MsgConfigureMinter): {
                    typeUrl: string;
                    value: _12.MsgConfigureMinter;
                };
                removeMinter(value: _12.MsgRemoveMinter): {
                    typeUrl: string;
                    value: _12.MsgRemoveMinter;
                };
                mint(value: _12.MsgMint): {
                    typeUrl: string;
                    value: _12.MsgMint;
                };
                burn(value: _12.MsgBurn): {
                    typeUrl: string;
                    value: _12.MsgBurn;
                };
                blacklist(value: _12.MsgBlacklist): {
                    typeUrl: string;
                    value: _12.MsgBlacklist;
                };
                unblacklist(value: _12.MsgUnblacklist): {
                    typeUrl: string;
                    value: _12.MsgUnblacklist;
                };
                pause(value: _12.MsgPause): {
                    typeUrl: string;
                    value: _12.MsgPause;
                };
                unpause(value: _12.MsgUnpause): {
                    typeUrl: string;
                    value: _12.MsgUnpause;
                };
                configureMinterController(value: _12.MsgConfigureMinterController): {
                    typeUrl: string;
                    value: _12.MsgConfigureMinterController;
                };
                removeMinterController(value: _12.MsgRemoveMinterController): {
                    typeUrl: string;
                    value: _12.MsgRemoveMinterController;
                };
            };
        };
        AminoConverter: {
            "/noble.fiattokenfactory.MsgUpdateMasterMinter": {
                aminoType: string;
                toAmino: ({ from, address }: _12.MsgUpdateMasterMinter) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _12.MsgUpdateMasterMinter;
            };
            "/noble.fiattokenfactory.MsgUpdatePauser": {
                aminoType: string;
                toAmino: ({ from, address }: _12.MsgUpdatePauser) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _12.MsgUpdatePauser;
            };
            "/noble.fiattokenfactory.MsgUpdateBlacklister": {
                aminoType: string;
                toAmino: ({ from, address }: _12.MsgUpdateBlacklister) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _12.MsgUpdateBlacklister;
            };
            "/noble.fiattokenfactory.MsgUpdateOwner": {
                aminoType: string;
                toAmino: ({ from, address }: _12.MsgUpdateOwner) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _12.MsgUpdateOwner;
            };
            "/noble.fiattokenfactory.MsgAcceptOwner": {
                aminoType: string;
                toAmino: ({ from }: _12.MsgAcceptOwner) => {
                    from: string;
                };
                fromAmino: ({ from }: {
                    from: string;
                }) => _12.MsgAcceptOwner;
            };
            "/noble.fiattokenfactory.MsgConfigureMinter": {
                aminoType: string;
                toAmino: ({ from, address, allowance }: _12.MsgConfigureMinter) => {
                    from: string;
                    address: string;
                    allowance: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ from, address, allowance }: {
                    from: string;
                    address: string;
                    allowance: {
                        denom: string;
                        amount: string;
                    };
                }) => _12.MsgConfigureMinter;
            };
            "/noble.fiattokenfactory.MsgRemoveMinter": {
                aminoType: string;
                toAmino: ({ from, address }: _12.MsgRemoveMinter) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _12.MsgRemoveMinter;
            };
            "/noble.fiattokenfactory.MsgMint": {
                aminoType: string;
                toAmino: ({ from, address, amount }: _12.MsgMint) => {
                    from: string;
                    address: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ from, address, amount }: {
                    from: string;
                    address: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                }) => _12.MsgMint;
            };
            "/noble.fiattokenfactory.MsgBurn": {
                aminoType: string;
                toAmino: ({ from, amount }: _12.MsgBurn) => {
                    from: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ from, amount }: {
                    from: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                }) => _12.MsgBurn;
            };
            "/noble.fiattokenfactory.MsgBlacklist": {
                aminoType: string;
                toAmino: ({ from, address }: _12.MsgBlacklist) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _12.MsgBlacklist;
            };
            "/noble.fiattokenfactory.MsgUnblacklist": {
                aminoType: string;
                toAmino: ({ from, address }: _12.MsgUnblacklist) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _12.MsgUnblacklist;
            };
            "/noble.fiattokenfactory.MsgPause": {
                aminoType: string;
                toAmino: ({ from }: _12.MsgPause) => {
                    from: string;
                };
                fromAmino: ({ from }: {
                    from: string;
                }) => _12.MsgPause;
            };
            "/noble.fiattokenfactory.MsgUnpause": {
                aminoType: string;
                toAmino: ({ from }: _12.MsgUnpause) => {
                    from: string;
                };
                fromAmino: ({ from }: {
                    from: string;
                }) => _12.MsgUnpause;
            };
            "/noble.fiattokenfactory.MsgConfigureMinterController": {
                aminoType: string;
                toAmino: ({ from, controller, minter }: _12.MsgConfigureMinterController) => {
                    from: string;
                    controller: string;
                    minter: string;
                };
                fromAmino: ({ from, controller, minter }: {
                    from: string;
                    controller: string;
                    minter: string;
                }) => _12.MsgConfigureMinterController;
            };
            "/noble.fiattokenfactory.MsgRemoveMinterController": {
                aminoType: string;
                toAmino: ({ from, controller }: _12.MsgRemoveMinterController) => {
                    from: string;
                    controller: string;
                };
                fromAmino: ({ from, controller }: {
                    from: string;
                    controller: string;
                }) => _12.MsgRemoveMinterController;
            };
        };
        MsgUpdateMasterMinter: {
            encode(message: _12.MsgUpdateMasterMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgUpdateMasterMinter;
            fromPartial(object: Partial<_12.MsgUpdateMasterMinter>): _12.MsgUpdateMasterMinter;
        };
        MsgUpdateMasterMinterResponse: {
            encode(_: _12.MsgUpdateMasterMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgUpdateMasterMinterResponse;
            fromPartial(_: Partial<_12.MsgUpdateMasterMinterResponse>): _12.MsgUpdateMasterMinterResponse;
        };
        MsgUpdatePauser: {
            encode(message: _12.MsgUpdatePauser, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgUpdatePauser;
            fromPartial(object: Partial<_12.MsgUpdatePauser>): _12.MsgUpdatePauser;
        };
        MsgUpdatePauserResponse: {
            encode(_: _12.MsgUpdatePauserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgUpdatePauserResponse;
            fromPartial(_: Partial<_12.MsgUpdatePauserResponse>): _12.MsgUpdatePauserResponse;
        };
        MsgUpdateBlacklister: {
            encode(message: _12.MsgUpdateBlacklister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgUpdateBlacklister;
            fromPartial(object: Partial<_12.MsgUpdateBlacklister>): _12.MsgUpdateBlacklister;
        };
        MsgUpdateBlacklisterResponse: {
            encode(_: _12.MsgUpdateBlacklisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgUpdateBlacklisterResponse;
            fromPartial(_: Partial<_12.MsgUpdateBlacklisterResponse>): _12.MsgUpdateBlacklisterResponse;
        };
        MsgUpdateOwner: {
            encode(message: _12.MsgUpdateOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgUpdateOwner;
            fromPartial(object: Partial<_12.MsgUpdateOwner>): _12.MsgUpdateOwner;
        };
        MsgUpdateOwnerResponse: {
            encode(_: _12.MsgUpdateOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgUpdateOwnerResponse;
            fromPartial(_: Partial<_12.MsgUpdateOwnerResponse>): _12.MsgUpdateOwnerResponse;
        };
        MsgAcceptOwner: {
            encode(message: _12.MsgAcceptOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgAcceptOwner;
            fromPartial(object: Partial<_12.MsgAcceptOwner>): _12.MsgAcceptOwner;
        };
        MsgAcceptOwnerResponse: {
            encode(_: _12.MsgAcceptOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgAcceptOwnerResponse;
            fromPartial(_: Partial<_12.MsgAcceptOwnerResponse>): _12.MsgAcceptOwnerResponse;
        };
        MsgConfigureMinter: {
            encode(message: _12.MsgConfigureMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgConfigureMinter;
            fromPartial(object: Partial<_12.MsgConfigureMinter>): _12.MsgConfigureMinter;
        };
        MsgConfigureMinterResponse: {
            encode(_: _12.MsgConfigureMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgConfigureMinterResponse;
            fromPartial(_: Partial<_12.MsgConfigureMinterResponse>): _12.MsgConfigureMinterResponse;
        };
        MsgRemoveMinter: {
            encode(message: _12.MsgRemoveMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgRemoveMinter;
            fromPartial(object: Partial<_12.MsgRemoveMinter>): _12.MsgRemoveMinter;
        };
        MsgRemoveMinterResponse: {
            encode(_: _12.MsgRemoveMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgRemoveMinterResponse;
            fromPartial(_: Partial<_12.MsgRemoveMinterResponse>): _12.MsgRemoveMinterResponse;
        };
        MsgMint: {
            encode(message: _12.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgMint;
            fromPartial(object: Partial<_12.MsgMint>): _12.MsgMint;
        };
        MsgMintResponse: {
            encode(_: _12.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgMintResponse;
            fromPartial(_: Partial<_12.MsgMintResponse>): _12.MsgMintResponse;
        };
        MsgBurn: {
            encode(message: _12.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgBurn;
            fromPartial(object: Partial<_12.MsgBurn>): _12.MsgBurn;
        };
        MsgBurnResponse: {
            encode(_: _12.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgBurnResponse;
            fromPartial(_: Partial<_12.MsgBurnResponse>): _12.MsgBurnResponse;
        };
        MsgBlacklist: {
            encode(message: _12.MsgBlacklist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgBlacklist;
            fromPartial(object: Partial<_12.MsgBlacklist>): _12.MsgBlacklist;
        };
        MsgBlacklistResponse: {
            encode(_: _12.MsgBlacklistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgBlacklistResponse;
            fromPartial(_: Partial<_12.MsgBlacklistResponse>): _12.MsgBlacklistResponse;
        };
        MsgUnblacklist: {
            encode(message: _12.MsgUnblacklist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgUnblacklist;
            fromPartial(object: Partial<_12.MsgUnblacklist>): _12.MsgUnblacklist;
        };
        MsgUnblacklistResponse: {
            encode(_: _12.MsgUnblacklistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgUnblacklistResponse;
            fromPartial(_: Partial<_12.MsgUnblacklistResponse>): _12.MsgUnblacklistResponse;
        };
        MsgPause: {
            encode(message: _12.MsgPause, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgPause;
            fromPartial(object: Partial<_12.MsgPause>): _12.MsgPause;
        };
        MsgPauseResponse: {
            encode(_: _12.MsgPauseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgPauseResponse;
            fromPartial(_: Partial<_12.MsgPauseResponse>): _12.MsgPauseResponse;
        };
        MsgUnpause: {
            encode(message: _12.MsgUnpause, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgUnpause;
            fromPartial(object: Partial<_12.MsgUnpause>): _12.MsgUnpause;
        };
        MsgUnpauseResponse: {
            encode(_: _12.MsgUnpauseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgUnpauseResponse;
            fromPartial(_: Partial<_12.MsgUnpauseResponse>): _12.MsgUnpauseResponse;
        };
        MsgConfigureMinterController: {
            encode(message: _12.MsgConfigureMinterController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgConfigureMinterController;
            fromPartial(object: Partial<_12.MsgConfigureMinterController>): _12.MsgConfigureMinterController;
        };
        MsgConfigureMinterControllerResponse: {
            encode(_: _12.MsgConfigureMinterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgConfigureMinterControllerResponse;
            fromPartial(_: Partial<_12.MsgConfigureMinterControllerResponse>): _12.MsgConfigureMinterControllerResponse;
        };
        MsgRemoveMinterController: {
            encode(message: _12.MsgRemoveMinterController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.MsgRemoveMinterController;
            fromPartial(object: Partial<_12.MsgRemoveMinterController>): _12.MsgRemoveMinterController;
        };
        MsgRemoveMinterControllerResponse: {
            encode(_: _12.MsgRemoveMinterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.MsgRemoveMinterControllerResponse;
            fromPartial(_: Partial<_12.MsgRemoveMinterControllerResponse>): _12.MsgRemoveMinterControllerResponse;
        };
        QueryParamsRequest: {
            encode(_: _11.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _11.QueryParamsRequest;
            fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _11.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryParamsResponse;
            fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
        };
        QueryGetBlacklistedRequest: {
            encode(message: _11.QueryGetBlacklistedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetBlacklistedRequest;
            fromPartial(object: Partial<_11.QueryGetBlacklistedRequest>): _11.QueryGetBlacklistedRequest;
        };
        QueryGetBlacklistedResponse: {
            encode(message: _11.QueryGetBlacklistedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetBlacklistedResponse;
            fromPartial(object: Partial<_11.QueryGetBlacklistedResponse>): _11.QueryGetBlacklistedResponse;
        };
        QueryAllBlacklistedRequest: {
            encode(message: _11.QueryAllBlacklistedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryAllBlacklistedRequest;
            fromPartial(object: Partial<_11.QueryAllBlacklistedRequest>): _11.QueryAllBlacklistedRequest;
        };
        QueryAllBlacklistedResponse: {
            encode(message: _11.QueryAllBlacklistedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryAllBlacklistedResponse;
            fromPartial(object: Partial<_11.QueryAllBlacklistedResponse>): _11.QueryAllBlacklistedResponse;
        };
        QueryGetPausedRequest: {
            encode(_: _11.QueryGetPausedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _11.QueryGetPausedRequest;
            fromPartial(_: Partial<_11.QueryGetPausedRequest>): _11.QueryGetPausedRequest;
        };
        QueryGetPausedResponse: {
            encode(message: _11.QueryGetPausedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetPausedResponse;
            fromPartial(object: Partial<_11.QueryGetPausedResponse>): _11.QueryGetPausedResponse;
        };
        QueryGetMasterMinterRequest: {
            encode(_: _11.QueryGetMasterMinterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _11.QueryGetMasterMinterRequest;
            fromPartial(_: Partial<_11.QueryGetMasterMinterRequest>): _11.QueryGetMasterMinterRequest;
        };
        QueryGetMasterMinterResponse: {
            encode(message: _11.QueryGetMasterMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetMasterMinterResponse;
            fromPartial(object: Partial<_11.QueryGetMasterMinterResponse>): _11.QueryGetMasterMinterResponse;
        };
        QueryGetMintersRequest: {
            encode(message: _11.QueryGetMintersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetMintersRequest;
            fromPartial(object: Partial<_11.QueryGetMintersRequest>): _11.QueryGetMintersRequest;
        };
        QueryGetMintersResponse: {
            encode(message: _11.QueryGetMintersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetMintersResponse;
            fromPartial(object: Partial<_11.QueryGetMintersResponse>): _11.QueryGetMintersResponse;
        };
        QueryAllMintersRequest: {
            encode(message: _11.QueryAllMintersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryAllMintersRequest;
            fromPartial(object: Partial<_11.QueryAllMintersRequest>): _11.QueryAllMintersRequest;
        };
        QueryAllMintersResponse: {
            encode(message: _11.QueryAllMintersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryAllMintersResponse;
            fromPartial(object: Partial<_11.QueryAllMintersResponse>): _11.QueryAllMintersResponse;
        };
        QueryGetPauserRequest: {
            encode(_: _11.QueryGetPauserRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _11.QueryGetPauserRequest;
            fromPartial(_: Partial<_11.QueryGetPauserRequest>): _11.QueryGetPauserRequest;
        };
        QueryGetPauserResponse: {
            encode(message: _11.QueryGetPauserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetPauserResponse;
            fromPartial(object: Partial<_11.QueryGetPauserResponse>): _11.QueryGetPauserResponse;
        };
        QueryGetBlacklisterRequest: {
            encode(_: _11.QueryGetBlacklisterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _11.QueryGetBlacklisterRequest;
            fromPartial(_: Partial<_11.QueryGetBlacklisterRequest>): _11.QueryGetBlacklisterRequest;
        };
        QueryGetBlacklisterResponse: {
            encode(message: _11.QueryGetBlacklisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetBlacklisterResponse;
            fromPartial(object: Partial<_11.QueryGetBlacklisterResponse>): _11.QueryGetBlacklisterResponse;
        };
        QueryGetOwnerRequest: {
            encode(_: _11.QueryGetOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _11.QueryGetOwnerRequest;
            fromPartial(_: Partial<_11.QueryGetOwnerRequest>): _11.QueryGetOwnerRequest;
        };
        QueryGetOwnerResponse: {
            encode(message: _11.QueryGetOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetOwnerResponse;
            fromPartial(object: Partial<_11.QueryGetOwnerResponse>): _11.QueryGetOwnerResponse;
        };
        QueryGetMinterControllerRequest: {
            encode(message: _11.QueryGetMinterControllerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetMinterControllerRequest;
            fromPartial(object: Partial<_11.QueryGetMinterControllerRequest>): _11.QueryGetMinterControllerRequest;
        };
        QueryGetMinterControllerResponse: {
            encode(message: _11.QueryGetMinterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetMinterControllerResponse;
            fromPartial(object: Partial<_11.QueryGetMinterControllerResponse>): _11.QueryGetMinterControllerResponse;
        };
        QueryAllMinterControllerRequest: {
            encode(message: _11.QueryAllMinterControllerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryAllMinterControllerRequest;
            fromPartial(object: Partial<_11.QueryAllMinterControllerRequest>): _11.QueryAllMinterControllerRequest;
        };
        QueryAllMinterControllerResponse: {
            encode(message: _11.QueryAllMinterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryAllMinterControllerResponse;
            fromPartial(object: Partial<_11.QueryAllMinterControllerResponse>): _11.QueryAllMinterControllerResponse;
        };
        QueryGetMintingDenomRequest: {
            encode(_: _11.QueryGetMintingDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _11.QueryGetMintingDenomRequest;
            fromPartial(_: Partial<_11.QueryGetMintingDenomRequest>): _11.QueryGetMintingDenomRequest;
        };
        QueryGetMintingDenomResponse: {
            encode(message: _11.QueryGetMintingDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.QueryGetMintingDenomResponse;
            fromPartial(object: Partial<_11.QueryGetMintingDenomResponse>): _11.QueryGetMintingDenomResponse;
        };
        Pauser: {
            encode(message: _10.Pauser, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _10.Pauser;
            fromPartial(object: Partial<_10.Pauser>): _10.Pauser;
        };
        Paused: {
            encode(message: _9.Paused, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _9.Paused;
            fromPartial(object: Partial<_9.Paused>): _9.Paused;
        };
        Params: {
            encode(_: _8.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _8.Params;
            fromPartial(_: Partial<_8.Params>): _8.Params;
        };
        Owner: {
            encode(message: _7.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.Owner;
            fromPartial(object: Partial<_7.Owner>): _7.Owner;
        };
        MintingDenom: {
            encode(message: _6.MintingDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.MintingDenom;
            fromPartial(object: Partial<_6.MintingDenom>): _6.MintingDenom;
        };
        Minters: {
            encode(message: _5.Minters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.Minters;
            fromPartial(object: Partial<_5.Minters>): _5.Minters;
        };
        MinterController: {
            encode(message: _4.MinterController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MinterController;
            fromPartial(object: Partial<_4.MinterController>): _4.MinterController;
        };
        MasterMinter: {
            encode(message: _3.MasterMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.MasterMinter;
            fromPartial(object: Partial<_3.MasterMinter>): _3.MasterMinter;
        };
        GenesisState: {
            encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _2.GenesisState;
            fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
        };
        Blacklister: {
            encode(message: _1.Blacklister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _1.Blacklister;
            fromPartial(object: Partial<_1.Blacklister>): _1.Blacklister;
        };
        Blacklisted: {
            encode(message: _0.Blacklisted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.Blacklisted;
            fromPartial(object: Partial<_0.Blacklisted>): _0.Blacklisted;
        };
    };
    const globalfee: {
        QueryClientImpl: typeof _141.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _14.QueryParamsRequest): Promise<_13.Params>;
        };
        LCDQueryClient: typeof _138.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _14.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _14.QueryParamsRequest;
            fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
        };
        GenesisState: {
            encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _13.GenesisState;
            fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
        };
        Params: {
            encode(message: _13.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _13.Params;
            fromPartial(object: Partial<_13.Params>): _13.Params;
        };
    };
    const tariff: {
        Params: {
            encode(message: _16.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _16.Params;
            fromPartial(object: Partial<_16.Params>): _16.Params;
        };
        DistributionEntity: {
            encode(message: _16.DistributionEntity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _16.DistributionEntity;
            fromPartial(object: Partial<_16.DistributionEntity>): _16.DistributionEntity;
        };
        GenesisState: {
            encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _15.GenesisState;
            fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
        };
    };
    const tokenfactory: {
        MsgClientImpl: typeof _144.MsgClientImpl;
        QueryClientImpl: typeof _142.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
            blacklisted(request: _28.QueryGetBlacklistedRequest): Promise<_28.QueryGetBlacklistedResponse>;
            blacklistedAll(request?: _28.QueryAllBlacklistedRequest): Promise<_28.QueryAllBlacklistedResponse>;
            paused(request?: _28.QueryGetPausedRequest): Promise<_28.QueryGetPausedResponse>;
            masterMinter(request?: _28.QueryGetMasterMinterRequest): Promise<_28.QueryGetMasterMinterResponse>;
            minters(request: _28.QueryGetMintersRequest): Promise<_28.QueryGetMintersResponse>;
            mintersAll(request?: _28.QueryAllMintersRequest): Promise<_28.QueryAllMintersResponse>;
            pauser(request?: _28.QueryGetPauserRequest): Promise<_28.QueryGetPauserResponse>;
            blacklister(request?: _28.QueryGetBlacklisterRequest): Promise<_28.QueryGetBlacklisterResponse>;
            owner(request?: _28.QueryGetOwnerRequest): Promise<_28.QueryGetOwnerResponse>;
            minterController(request: _28.QueryGetMinterControllerRequest): Promise<_28.QueryGetMinterControllerResponse>;
            minterControllerAll(request?: _28.QueryAllMinterControllerRequest): Promise<_28.QueryAllMinterControllerResponse>;
            mintingDenom(request?: _28.QueryGetMintingDenomRequest): Promise<_28.QueryGetMintingDenomResponse>;
        };
        LCDQueryClient: typeof _139.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateMasterMinter(value: _29.MsgUpdateMasterMinter): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updatePauser(value: _29.MsgUpdatePauser): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateBlacklister(value: _29.MsgUpdateBlacklister): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateOwner(value: _29.MsgUpdateOwner): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                acceptOwner(value: _29.MsgAcceptOwner): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                configureMinter(value: _29.MsgConfigureMinter): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeMinter(value: _29.MsgRemoveMinter): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                mint(value: _29.MsgMint): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                burn(value: _29.MsgBurn): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                blacklist(value: _29.MsgBlacklist): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unblacklist(value: _29.MsgUnblacklist): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                pause(value: _29.MsgPause): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unpause(value: _29.MsgUnpause): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                configureMinterController(value: _29.MsgConfigureMinterController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeMinterController(value: _29.MsgRemoveMinterController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateMasterMinter(value: _29.MsgUpdateMasterMinter): {
                    typeUrl: string;
                    value: _29.MsgUpdateMasterMinter;
                };
                updatePauser(value: _29.MsgUpdatePauser): {
                    typeUrl: string;
                    value: _29.MsgUpdatePauser;
                };
                updateBlacklister(value: _29.MsgUpdateBlacklister): {
                    typeUrl: string;
                    value: _29.MsgUpdateBlacklister;
                };
                updateOwner(value: _29.MsgUpdateOwner): {
                    typeUrl: string;
                    value: _29.MsgUpdateOwner;
                };
                acceptOwner(value: _29.MsgAcceptOwner): {
                    typeUrl: string;
                    value: _29.MsgAcceptOwner;
                };
                configureMinter(value: _29.MsgConfigureMinter): {
                    typeUrl: string;
                    value: _29.MsgConfigureMinter;
                };
                removeMinter(value: _29.MsgRemoveMinter): {
                    typeUrl: string;
                    value: _29.MsgRemoveMinter;
                };
                mint(value: _29.MsgMint): {
                    typeUrl: string;
                    value: _29.MsgMint;
                };
                burn(value: _29.MsgBurn): {
                    typeUrl: string;
                    value: _29.MsgBurn;
                };
                blacklist(value: _29.MsgBlacklist): {
                    typeUrl: string;
                    value: _29.MsgBlacklist;
                };
                unblacklist(value: _29.MsgUnblacklist): {
                    typeUrl: string;
                    value: _29.MsgUnblacklist;
                };
                pause(value: _29.MsgPause): {
                    typeUrl: string;
                    value: _29.MsgPause;
                };
                unpause(value: _29.MsgUnpause): {
                    typeUrl: string;
                    value: _29.MsgUnpause;
                };
                configureMinterController(value: _29.MsgConfigureMinterController): {
                    typeUrl: string;
                    value: _29.MsgConfigureMinterController;
                };
                removeMinterController(value: _29.MsgRemoveMinterController): {
                    typeUrl: string;
                    value: _29.MsgRemoveMinterController;
                };
            };
            fromJSON: {
                updateMasterMinter(value: any): {
                    typeUrl: string;
                    value: _29.MsgUpdateMasterMinter;
                };
                updatePauser(value: any): {
                    typeUrl: string;
                    value: _29.MsgUpdatePauser;
                };
                updateBlacklister(value: any): {
                    typeUrl: string;
                    value: _29.MsgUpdateBlacklister;
                };
                updateOwner(value: any): {
                    typeUrl: string;
                    value: _29.MsgUpdateOwner;
                };
                acceptOwner(value: any): {
                    typeUrl: string;
                    value: _29.MsgAcceptOwner;
                };
                configureMinter(value: any): {
                    typeUrl: string;
                    value: _29.MsgConfigureMinter;
                };
                removeMinter(value: any): {
                    typeUrl: string;
                    value: _29.MsgRemoveMinter;
                };
                mint(value: any): {
                    typeUrl: string;
                    value: _29.MsgMint;
                };
                burn(value: any): {
                    typeUrl: string;
                    value: _29.MsgBurn;
                };
                blacklist(value: any): {
                    typeUrl: string;
                    value: _29.MsgBlacklist;
                };
                unblacklist(value: any): {
                    typeUrl: string;
                    value: _29.MsgUnblacklist;
                };
                pause(value: any): {
                    typeUrl: string;
                    value: _29.MsgPause;
                };
                unpause(value: any): {
                    typeUrl: string;
                    value: _29.MsgUnpause;
                };
                configureMinterController(value: any): {
                    typeUrl: string;
                    value: _29.MsgConfigureMinterController;
                };
                removeMinterController(value: any): {
                    typeUrl: string;
                    value: _29.MsgRemoveMinterController;
                };
            };
            fromPartial: {
                updateMasterMinter(value: _29.MsgUpdateMasterMinter): {
                    typeUrl: string;
                    value: _29.MsgUpdateMasterMinter;
                };
                updatePauser(value: _29.MsgUpdatePauser): {
                    typeUrl: string;
                    value: _29.MsgUpdatePauser;
                };
                updateBlacklister(value: _29.MsgUpdateBlacklister): {
                    typeUrl: string;
                    value: _29.MsgUpdateBlacklister;
                };
                updateOwner(value: _29.MsgUpdateOwner): {
                    typeUrl: string;
                    value: _29.MsgUpdateOwner;
                };
                acceptOwner(value: _29.MsgAcceptOwner): {
                    typeUrl: string;
                    value: _29.MsgAcceptOwner;
                };
                configureMinter(value: _29.MsgConfigureMinter): {
                    typeUrl: string;
                    value: _29.MsgConfigureMinter;
                };
                removeMinter(value: _29.MsgRemoveMinter): {
                    typeUrl: string;
                    value: _29.MsgRemoveMinter;
                };
                mint(value: _29.MsgMint): {
                    typeUrl: string;
                    value: _29.MsgMint;
                };
                burn(value: _29.MsgBurn): {
                    typeUrl: string;
                    value: _29.MsgBurn;
                };
                blacklist(value: _29.MsgBlacklist): {
                    typeUrl: string;
                    value: _29.MsgBlacklist;
                };
                unblacklist(value: _29.MsgUnblacklist): {
                    typeUrl: string;
                    value: _29.MsgUnblacklist;
                };
                pause(value: _29.MsgPause): {
                    typeUrl: string;
                    value: _29.MsgPause;
                };
                unpause(value: _29.MsgUnpause): {
                    typeUrl: string;
                    value: _29.MsgUnpause;
                };
                configureMinterController(value: _29.MsgConfigureMinterController): {
                    typeUrl: string;
                    value: _29.MsgConfigureMinterController;
                };
                removeMinterController(value: _29.MsgRemoveMinterController): {
                    typeUrl: string;
                    value: _29.MsgRemoveMinterController;
                };
            };
        };
        AminoConverter: {
            "/noble.tokenfactory.MsgUpdateMasterMinter": {
                aminoType: string;
                toAmino: ({ from, address }: _29.MsgUpdateMasterMinter) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _29.MsgUpdateMasterMinter;
            };
            "/noble.tokenfactory.MsgUpdatePauser": {
                aminoType: string;
                toAmino: ({ from, address }: _29.MsgUpdatePauser) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _29.MsgUpdatePauser;
            };
            "/noble.tokenfactory.MsgUpdateBlacklister": {
                aminoType: string;
                toAmino: ({ from, address }: _29.MsgUpdateBlacklister) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _29.MsgUpdateBlacklister;
            };
            "/noble.tokenfactory.MsgUpdateOwner": {
                aminoType: string;
                toAmino: ({ from, address }: _29.MsgUpdateOwner) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _29.MsgUpdateOwner;
            };
            "/noble.tokenfactory.MsgAcceptOwner": {
                aminoType: string;
                toAmino: ({ from }: _29.MsgAcceptOwner) => {
                    from: string;
                };
                fromAmino: ({ from }: {
                    from: string;
                }) => _29.MsgAcceptOwner;
            };
            "/noble.tokenfactory.MsgConfigureMinter": {
                aminoType: string;
                toAmino: ({ from, address, allowance }: _29.MsgConfigureMinter) => {
                    from: string;
                    address: string;
                    allowance: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ from, address, allowance }: {
                    from: string;
                    address: string;
                    allowance: {
                        denom: string;
                        amount: string;
                    };
                }) => _29.MsgConfigureMinter;
            };
            "/noble.tokenfactory.MsgRemoveMinter": {
                aminoType: string;
                toAmino: ({ from, address }: _29.MsgRemoveMinter) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _29.MsgRemoveMinter;
            };
            "/noble.tokenfactory.MsgMint": {
                aminoType: string;
                toAmino: ({ from, address, amount }: _29.MsgMint) => {
                    from: string;
                    address: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ from, address, amount }: {
                    from: string;
                    address: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                }) => _29.MsgMint;
            };
            "/noble.tokenfactory.MsgBurn": {
                aminoType: string;
                toAmino: ({ from, amount }: _29.MsgBurn) => {
                    from: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ from, amount }: {
                    from: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                }) => _29.MsgBurn;
            };
            "/noble.tokenfactory.MsgBlacklist": {
                aminoType: string;
                toAmino: ({ from, address }: _29.MsgBlacklist) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _29.MsgBlacklist;
            };
            "/noble.tokenfactory.MsgUnblacklist": {
                aminoType: string;
                toAmino: ({ from, address }: _29.MsgUnblacklist) => {
                    from: string;
                    address: string;
                };
                fromAmino: ({ from, address }: {
                    from: string;
                    address: string;
                }) => _29.MsgUnblacklist;
            };
            "/noble.tokenfactory.MsgPause": {
                aminoType: string;
                toAmino: ({ from }: _29.MsgPause) => {
                    from: string;
                };
                fromAmino: ({ from }: {
                    from: string;
                }) => _29.MsgPause;
            };
            "/noble.tokenfactory.MsgUnpause": {
                aminoType: string;
                toAmino: ({ from }: _29.MsgUnpause) => {
                    from: string;
                };
                fromAmino: ({ from }: {
                    from: string;
                }) => _29.MsgUnpause;
            };
            "/noble.tokenfactory.MsgConfigureMinterController": {
                aminoType: string;
                toAmino: ({ from, controller, minter }: _29.MsgConfigureMinterController) => {
                    from: string;
                    controller: string;
                    minter: string;
                };
                fromAmino: ({ from, controller, minter }: {
                    from: string;
                    controller: string;
                    minter: string;
                }) => _29.MsgConfigureMinterController;
            };
            "/noble.tokenfactory.MsgRemoveMinterController": {
                aminoType: string;
                toAmino: ({ from, controller }: _29.MsgRemoveMinterController) => {
                    from: string;
                    controller: string;
                };
                fromAmino: ({ from, controller }: {
                    from: string;
                    controller: string;
                }) => _29.MsgRemoveMinterController;
            };
        };
        MsgUpdateMasterMinter: {
            encode(message: _29.MsgUpdateMasterMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgUpdateMasterMinter;
            fromPartial(object: Partial<_29.MsgUpdateMasterMinter>): _29.MsgUpdateMasterMinter;
        };
        MsgUpdateMasterMinterResponse: {
            encode(_: _29.MsgUpdateMasterMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgUpdateMasterMinterResponse;
            fromPartial(_: Partial<_29.MsgUpdateMasterMinterResponse>): _29.MsgUpdateMasterMinterResponse;
        };
        MsgUpdatePauser: {
            encode(message: _29.MsgUpdatePauser, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgUpdatePauser;
            fromPartial(object: Partial<_29.MsgUpdatePauser>): _29.MsgUpdatePauser;
        };
        MsgUpdatePauserResponse: {
            encode(_: _29.MsgUpdatePauserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgUpdatePauserResponse;
            fromPartial(_: Partial<_29.MsgUpdatePauserResponse>): _29.MsgUpdatePauserResponse;
        };
        MsgUpdateBlacklister: {
            encode(message: _29.MsgUpdateBlacklister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgUpdateBlacklister;
            fromPartial(object: Partial<_29.MsgUpdateBlacklister>): _29.MsgUpdateBlacklister;
        };
        MsgUpdateBlacklisterResponse: {
            encode(_: _29.MsgUpdateBlacklisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgUpdateBlacklisterResponse;
            fromPartial(_: Partial<_29.MsgUpdateBlacklisterResponse>): _29.MsgUpdateBlacklisterResponse;
        };
        MsgUpdateOwner: {
            encode(message: _29.MsgUpdateOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgUpdateOwner;
            fromPartial(object: Partial<_29.MsgUpdateOwner>): _29.MsgUpdateOwner;
        };
        MsgUpdateOwnerResponse: {
            encode(_: _29.MsgUpdateOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgUpdateOwnerResponse;
            fromPartial(_: Partial<_29.MsgUpdateOwnerResponse>): _29.MsgUpdateOwnerResponse;
        };
        MsgAcceptOwner: {
            encode(message: _29.MsgAcceptOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgAcceptOwner;
            fromPartial(object: Partial<_29.MsgAcceptOwner>): _29.MsgAcceptOwner;
        };
        MsgAcceptOwnerResponse: {
            encode(_: _29.MsgAcceptOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgAcceptOwnerResponse;
            fromPartial(_: Partial<_29.MsgAcceptOwnerResponse>): _29.MsgAcceptOwnerResponse;
        };
        MsgConfigureMinter: {
            encode(message: _29.MsgConfigureMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgConfigureMinter;
            fromPartial(object: Partial<_29.MsgConfigureMinter>): _29.MsgConfigureMinter;
        };
        MsgConfigureMinterResponse: {
            encode(_: _29.MsgConfigureMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgConfigureMinterResponse;
            fromPartial(_: Partial<_29.MsgConfigureMinterResponse>): _29.MsgConfigureMinterResponse;
        };
        MsgRemoveMinter: {
            encode(message: _29.MsgRemoveMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgRemoveMinter;
            fromPartial(object: Partial<_29.MsgRemoveMinter>): _29.MsgRemoveMinter;
        };
        MsgRemoveMinterResponse: {
            encode(_: _29.MsgRemoveMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgRemoveMinterResponse;
            fromPartial(_: Partial<_29.MsgRemoveMinterResponse>): _29.MsgRemoveMinterResponse;
        };
        MsgMint: {
            encode(message: _29.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgMint;
            fromPartial(object: Partial<_29.MsgMint>): _29.MsgMint;
        };
        MsgMintResponse: {
            encode(_: _29.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgMintResponse;
            fromPartial(_: Partial<_29.MsgMintResponse>): _29.MsgMintResponse;
        };
        MsgBurn: {
            encode(message: _29.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgBurn;
            fromPartial(object: Partial<_29.MsgBurn>): _29.MsgBurn;
        };
        MsgBurnResponse: {
            encode(_: _29.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgBurnResponse;
            fromPartial(_: Partial<_29.MsgBurnResponse>): _29.MsgBurnResponse;
        };
        MsgBlacklist: {
            encode(message: _29.MsgBlacklist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgBlacklist;
            fromPartial(object: Partial<_29.MsgBlacklist>): _29.MsgBlacklist;
        };
        MsgBlacklistResponse: {
            encode(_: _29.MsgBlacklistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgBlacklistResponse;
            fromPartial(_: Partial<_29.MsgBlacklistResponse>): _29.MsgBlacklistResponse;
        };
        MsgUnblacklist: {
            encode(message: _29.MsgUnblacklist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgUnblacklist;
            fromPartial(object: Partial<_29.MsgUnblacklist>): _29.MsgUnblacklist;
        };
        MsgUnblacklistResponse: {
            encode(_: _29.MsgUnblacklistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgUnblacklistResponse;
            fromPartial(_: Partial<_29.MsgUnblacklistResponse>): _29.MsgUnblacklistResponse;
        };
        MsgPause: {
            encode(message: _29.MsgPause, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgPause;
            fromPartial(object: Partial<_29.MsgPause>): _29.MsgPause;
        };
        MsgPauseResponse: {
            encode(_: _29.MsgPauseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgPauseResponse;
            fromPartial(_: Partial<_29.MsgPauseResponse>): _29.MsgPauseResponse;
        };
        MsgUnpause: {
            encode(message: _29.MsgUnpause, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgUnpause;
            fromPartial(object: Partial<_29.MsgUnpause>): _29.MsgUnpause;
        };
        MsgUnpauseResponse: {
            encode(_: _29.MsgUnpauseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgUnpauseResponse;
            fromPartial(_: Partial<_29.MsgUnpauseResponse>): _29.MsgUnpauseResponse;
        };
        MsgConfigureMinterController: {
            encode(message: _29.MsgConfigureMinterController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgConfigureMinterController;
            fromPartial(object: Partial<_29.MsgConfigureMinterController>): _29.MsgConfigureMinterController;
        };
        MsgConfigureMinterControllerResponse: {
            encode(_: _29.MsgConfigureMinterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgConfigureMinterControllerResponse;
            fromPartial(_: Partial<_29.MsgConfigureMinterControllerResponse>): _29.MsgConfigureMinterControllerResponse;
        };
        MsgRemoveMinterController: {
            encode(message: _29.MsgRemoveMinterController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.MsgRemoveMinterController;
            fromPartial(object: Partial<_29.MsgRemoveMinterController>): _29.MsgRemoveMinterController;
        };
        MsgRemoveMinterControllerResponse: {
            encode(_: _29.MsgRemoveMinterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.MsgRemoveMinterControllerResponse;
            fromPartial(_: Partial<_29.MsgRemoveMinterControllerResponse>): _29.MsgRemoveMinterControllerResponse;
        };
        QueryParamsRequest: {
            encode(_: _28.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _28.QueryParamsRequest;
            fromPartial(_: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _28.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryParamsResponse;
            fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
        };
        QueryGetBlacklistedRequest: {
            encode(message: _28.QueryGetBlacklistedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetBlacklistedRequest;
            fromPartial(object: Partial<_28.QueryGetBlacklistedRequest>): _28.QueryGetBlacklistedRequest;
        };
        QueryGetBlacklistedResponse: {
            encode(message: _28.QueryGetBlacklistedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetBlacklistedResponse;
            fromPartial(object: Partial<_28.QueryGetBlacklistedResponse>): _28.QueryGetBlacklistedResponse;
        };
        QueryAllBlacklistedRequest: {
            encode(message: _28.QueryAllBlacklistedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryAllBlacklistedRequest;
            fromPartial(object: Partial<_28.QueryAllBlacklistedRequest>): _28.QueryAllBlacklistedRequest;
        };
        QueryAllBlacklistedResponse: {
            encode(message: _28.QueryAllBlacklistedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryAllBlacklistedResponse;
            fromPartial(object: Partial<_28.QueryAllBlacklistedResponse>): _28.QueryAllBlacklistedResponse;
        };
        QueryGetPausedRequest: {
            encode(_: _28.QueryGetPausedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _28.QueryGetPausedRequest;
            fromPartial(_: Partial<_28.QueryGetPausedRequest>): _28.QueryGetPausedRequest;
        };
        QueryGetPausedResponse: {
            encode(message: _28.QueryGetPausedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetPausedResponse;
            fromPartial(object: Partial<_28.QueryGetPausedResponse>): _28.QueryGetPausedResponse;
        };
        QueryGetMasterMinterRequest: {
            encode(_: _28.QueryGetMasterMinterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _28.QueryGetMasterMinterRequest;
            fromPartial(_: Partial<_28.QueryGetMasterMinterRequest>): _28.QueryGetMasterMinterRequest;
        };
        QueryGetMasterMinterResponse: {
            encode(message: _28.QueryGetMasterMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetMasterMinterResponse;
            fromPartial(object: Partial<_28.QueryGetMasterMinterResponse>): _28.QueryGetMasterMinterResponse;
        };
        QueryGetMintersRequest: {
            encode(message: _28.QueryGetMintersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetMintersRequest;
            fromPartial(object: Partial<_28.QueryGetMintersRequest>): _28.QueryGetMintersRequest;
        };
        QueryGetMintersResponse: {
            encode(message: _28.QueryGetMintersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetMintersResponse;
            fromPartial(object: Partial<_28.QueryGetMintersResponse>): _28.QueryGetMintersResponse;
        };
        QueryAllMintersRequest: {
            encode(message: _28.QueryAllMintersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryAllMintersRequest;
            fromPartial(object: Partial<_28.QueryAllMintersRequest>): _28.QueryAllMintersRequest;
        };
        QueryAllMintersResponse: {
            encode(message: _28.QueryAllMintersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryAllMintersResponse;
            fromPartial(object: Partial<_28.QueryAllMintersResponse>): _28.QueryAllMintersResponse;
        };
        QueryGetPauserRequest: {
            encode(_: _28.QueryGetPauserRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _28.QueryGetPauserRequest;
            fromPartial(_: Partial<_28.QueryGetPauserRequest>): _28.QueryGetPauserRequest;
        };
        QueryGetPauserResponse: {
            encode(message: _28.QueryGetPauserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetPauserResponse;
            fromPartial(object: Partial<_28.QueryGetPauserResponse>): _28.QueryGetPauserResponse;
        };
        QueryGetBlacklisterRequest: {
            encode(_: _28.QueryGetBlacklisterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _28.QueryGetBlacklisterRequest;
            fromPartial(_: Partial<_28.QueryGetBlacklisterRequest>): _28.QueryGetBlacklisterRequest;
        };
        QueryGetBlacklisterResponse: {
            encode(message: _28.QueryGetBlacklisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetBlacklisterResponse;
            fromPartial(object: Partial<_28.QueryGetBlacklisterResponse>): _28.QueryGetBlacklisterResponse;
        };
        QueryGetOwnerRequest: {
            encode(_: _28.QueryGetOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _28.QueryGetOwnerRequest;
            fromPartial(_: Partial<_28.QueryGetOwnerRequest>): _28.QueryGetOwnerRequest;
        };
        QueryGetOwnerResponse: {
            encode(message: _28.QueryGetOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetOwnerResponse;
            fromPartial(object: Partial<_28.QueryGetOwnerResponse>): _28.QueryGetOwnerResponse;
        };
        QueryGetMinterControllerRequest: {
            encode(message: _28.QueryGetMinterControllerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetMinterControllerRequest;
            fromPartial(object: Partial<_28.QueryGetMinterControllerRequest>): _28.QueryGetMinterControllerRequest;
        };
        QueryGetMinterControllerResponse: {
            encode(message: _28.QueryGetMinterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetMinterControllerResponse;
            fromPartial(object: Partial<_28.QueryGetMinterControllerResponse>): _28.QueryGetMinterControllerResponse;
        };
        QueryAllMinterControllerRequest: {
            encode(message: _28.QueryAllMinterControllerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryAllMinterControllerRequest;
            fromPartial(object: Partial<_28.QueryAllMinterControllerRequest>): _28.QueryAllMinterControllerRequest;
        };
        QueryAllMinterControllerResponse: {
            encode(message: _28.QueryAllMinterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryAllMinterControllerResponse;
            fromPartial(object: Partial<_28.QueryAllMinterControllerResponse>): _28.QueryAllMinterControllerResponse;
        };
        QueryGetMintingDenomRequest: {
            encode(_: _28.QueryGetMintingDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _28.QueryGetMintingDenomRequest;
            fromPartial(_: Partial<_28.QueryGetMintingDenomRequest>): _28.QueryGetMintingDenomRequest;
        };
        QueryGetMintingDenomResponse: {
            encode(message: _28.QueryGetMintingDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.QueryGetMintingDenomResponse;
            fromPartial(object: Partial<_28.QueryGetMintingDenomResponse>): _28.QueryGetMintingDenomResponse;
        };
        Pauser: {
            encode(message: _27.Pauser, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _27.Pauser;
            fromPartial(object: Partial<_27.Pauser>): _27.Pauser;
        };
        Paused: {
            encode(message: _26.Paused, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _26.Paused;
            fromPartial(object: Partial<_26.Paused>): _26.Paused;
        };
        Params: {
            encode(_: _25.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _25.Params;
            fromPartial(_: Partial<_25.Params>): _25.Params;
        };
        Owner: {
            encode(message: _24.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _24.Owner;
            fromPartial(object: Partial<_24.Owner>): _24.Owner;
        };
        MintingDenom: {
            encode(message: _23.MintingDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _23.MintingDenom;
            fromPartial(object: Partial<_23.MintingDenom>): _23.MintingDenom;
        };
        Minters: {
            encode(message: _22.Minters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _22.Minters;
            fromPartial(object: Partial<_22.Minters>): _22.Minters;
        };
        MinterController: {
            encode(message: _21.MinterController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _21.MinterController;
            fromPartial(object: Partial<_21.MinterController>): _21.MinterController;
        };
        MasterMinter: {
            encode(message: _20.MasterMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _20.MasterMinter;
            fromPartial(object: Partial<_20.MasterMinter>): _20.MasterMinter;
        };
        GenesisState: {
            encode(message: _19.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _19.GenesisState;
            fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
        };
        Blacklister: {
            encode(message: _18.Blacklister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _18.Blacklister;
            fromPartial(object: Partial<_18.Blacklister>): _18.Blacklister;
        };
        Blacklisted: {
            encode(message: _17.Blacklisted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _17.Blacklisted;
            fromPartial(object: Partial<_17.Blacklisted>): _17.Blacklisted;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            noble: {
                fiattokenfactory: _143.MsgClientImpl;
                tokenfactory: _144.MsgClientImpl;
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            noble: {
                fiattokenfactory: {
                    params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                    blacklisted(request: _11.QueryGetBlacklistedRequest): Promise<_11.QueryGetBlacklistedResponse>;
                    blacklistedAll(request?: _11.QueryAllBlacklistedRequest): Promise<_11.QueryAllBlacklistedResponse>;
                    paused(request?: _11.QueryGetPausedRequest): Promise<_11.QueryGetPausedResponse>;
                    masterMinter(request?: _11.QueryGetMasterMinterRequest): Promise<_11.QueryGetMasterMinterResponse>;
                    minters(request: _11.QueryGetMintersRequest): Promise<_11.QueryGetMintersResponse>;
                    mintersAll(request?: _11.QueryAllMintersRequest): Promise<_11.QueryAllMintersResponse>;
                    pauser(request?: _11.QueryGetPauserRequest): Promise<_11.QueryGetPauserResponse>;
                    blacklister(request?: _11.QueryGetBlacklisterRequest): Promise<_11.QueryGetBlacklisterResponse>;
                    owner(request?: _11.QueryGetOwnerRequest): Promise<_11.QueryGetOwnerResponse>;
                    minterController(request: _11.QueryGetMinterControllerRequest): Promise<_11.QueryGetMinterControllerResponse>;
                    minterControllerAll(request?: _11.QueryAllMinterControllerRequest): Promise<_11.QueryAllMinterControllerResponse>;
                    mintingDenom(request?: _11.QueryGetMintingDenomRequest): Promise<_11.QueryGetMintingDenomResponse>;
                };
                globalfee: {
                    params(request?: _14.QueryParamsRequest): Promise<_13.Params>;
                };
                tokenfactory: {
                    params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                    blacklisted(request: _28.QueryGetBlacklistedRequest): Promise<_28.QueryGetBlacklistedResponse>;
                    blacklistedAll(request?: _28.QueryAllBlacklistedRequest): Promise<_28.QueryAllBlacklistedResponse>;
                    paused(request?: _28.QueryGetPausedRequest): Promise<_28.QueryGetPausedResponse>;
                    masterMinter(request?: _28.QueryGetMasterMinterRequest): Promise<_28.QueryGetMasterMinterResponse>;
                    minters(request: _28.QueryGetMintersRequest): Promise<_28.QueryGetMintersResponse>;
                    mintersAll(request?: _28.QueryAllMintersRequest): Promise<_28.QueryAllMintersResponse>;
                    pauser(request?: _28.QueryGetPauserRequest): Promise<_28.QueryGetPauserResponse>;
                    blacklister(request?: _28.QueryGetBlacklisterRequest): Promise<_28.QueryGetBlacklisterResponse>;
                    owner(request?: _28.QueryGetOwnerRequest): Promise<_28.QueryGetOwnerResponse>;
                    minterController(request: _28.QueryGetMinterControllerRequest): Promise<_28.QueryGetMinterControllerResponse>;
                    minterControllerAll(request?: _28.QueryAllMinterControllerRequest): Promise<_28.QueryAllMinterControllerResponse>;
                    mintingDenom(request?: _28.QueryGetMintingDenomRequest): Promise<_28.QueryGetMintingDenomResponse>;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            noble: {
                fiattokenfactory: _137.LCDQueryClient;
                globalfee: _138.LCDQueryClient;
                tokenfactory: _139.LCDQueryClient;
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
