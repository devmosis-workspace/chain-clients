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
                toAmino: (message: _12.MsgUpdateMasterMinter) => _12.MsgUpdateMasterMinterAmino;
                fromAmino: (object: _12.MsgUpdateMasterMinterAmino) => _12.MsgUpdateMasterMinter;
            };
            "/noble.fiattokenfactory.MsgUpdatePauser": {
                aminoType: string;
                toAmino: (message: _12.MsgUpdatePauser) => _12.MsgUpdatePauserAmino;
                fromAmino: (object: _12.MsgUpdatePauserAmino) => _12.MsgUpdatePauser;
            };
            "/noble.fiattokenfactory.MsgUpdateBlacklister": {
                aminoType: string;
                toAmino: (message: _12.MsgUpdateBlacklister) => _12.MsgUpdateBlacklisterAmino;
                fromAmino: (object: _12.MsgUpdateBlacklisterAmino) => _12.MsgUpdateBlacklister;
            };
            "/noble.fiattokenfactory.MsgUpdateOwner": {
                aminoType: string;
                toAmino: (message: _12.MsgUpdateOwner) => _12.MsgUpdateOwnerAmino;
                fromAmino: (object: _12.MsgUpdateOwnerAmino) => _12.MsgUpdateOwner;
            };
            "/noble.fiattokenfactory.MsgAcceptOwner": {
                aminoType: string;
                toAmino: (message: _12.MsgAcceptOwner) => _12.MsgAcceptOwnerAmino;
                fromAmino: (object: _12.MsgAcceptOwnerAmino) => _12.MsgAcceptOwner;
            };
            "/noble.fiattokenfactory.MsgConfigureMinter": {
                aminoType: string;
                toAmino: (message: _12.MsgConfigureMinter) => _12.MsgConfigureMinterAmino;
                fromAmino: (object: _12.MsgConfigureMinterAmino) => _12.MsgConfigureMinter;
            };
            "/noble.fiattokenfactory.MsgRemoveMinter": {
                aminoType: string;
                toAmino: (message: _12.MsgRemoveMinter) => _12.MsgRemoveMinterAmino;
                fromAmino: (object: _12.MsgRemoveMinterAmino) => _12.MsgRemoveMinter;
            };
            "/noble.fiattokenfactory.MsgMint": {
                aminoType: string;
                toAmino: (message: _12.MsgMint) => _12.MsgMintAmino;
                fromAmino: (object: _12.MsgMintAmino) => _12.MsgMint;
            };
            "/noble.fiattokenfactory.MsgBurn": {
                aminoType: string;
                toAmino: (message: _12.MsgBurn) => _12.MsgBurnAmino;
                fromAmino: (object: _12.MsgBurnAmino) => _12.MsgBurn;
            };
            "/noble.fiattokenfactory.MsgBlacklist": {
                aminoType: string;
                toAmino: (message: _12.MsgBlacklist) => _12.MsgBlacklistAmino;
                fromAmino: (object: _12.MsgBlacklistAmino) => _12.MsgBlacklist;
            };
            "/noble.fiattokenfactory.MsgUnblacklist": {
                aminoType: string;
                toAmino: (message: _12.MsgUnblacklist) => _12.MsgUnblacklistAmino;
                fromAmino: (object: _12.MsgUnblacklistAmino) => _12.MsgUnblacklist;
            };
            "/noble.fiattokenfactory.MsgPause": {
                aminoType: string;
                toAmino: (message: _12.MsgPause) => _12.MsgPauseAmino;
                fromAmino: (object: _12.MsgPauseAmino) => _12.MsgPause;
            };
            "/noble.fiattokenfactory.MsgUnpause": {
                aminoType: string;
                toAmino: (message: _12.MsgUnpause) => _12.MsgUnpauseAmino;
                fromAmino: (object: _12.MsgUnpauseAmino) => _12.MsgUnpause;
            };
            "/noble.fiattokenfactory.MsgConfigureMinterController": {
                aminoType: string;
                toAmino: (message: _12.MsgConfigureMinterController) => _12.MsgConfigureMinterControllerAmino;
                fromAmino: (object: _12.MsgConfigureMinterControllerAmino) => _12.MsgConfigureMinterController;
            };
            "/noble.fiattokenfactory.MsgRemoveMinterController": {
                aminoType: string;
                toAmino: (message: _12.MsgRemoveMinterController) => _12.MsgRemoveMinterControllerAmino;
                fromAmino: (object: _12.MsgRemoveMinterControllerAmino) => _12.MsgRemoveMinterController;
            };
        };
        MsgUpdateMasterMinter: {
            typeUrl: string;
            encode(message: _12.MsgUpdateMasterMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgUpdateMasterMinter;
            fromPartial(object: Partial<_12.MsgUpdateMasterMinter>): _12.MsgUpdateMasterMinter;
            fromAmino(object: _12.MsgUpdateMasterMinterAmino): _12.MsgUpdateMasterMinter;
            toAmino(message: _12.MsgUpdateMasterMinter): _12.MsgUpdateMasterMinterAmino;
            fromAminoMsg(object: _12.MsgUpdateMasterMinterAminoMsg): _12.MsgUpdateMasterMinter;
            fromProtoMsg(message: _12.MsgUpdateMasterMinterProtoMsg): _12.MsgUpdateMasterMinter;
            toProto(message: _12.MsgUpdateMasterMinter): Uint8Array;
            toProtoMsg(message: _12.MsgUpdateMasterMinter): _12.MsgUpdateMasterMinterProtoMsg;
        };
        MsgUpdateMasterMinterResponse: {
            typeUrl: string;
            encode(_: _12.MsgUpdateMasterMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgUpdateMasterMinterResponse;
            fromPartial(_: Partial<_12.MsgUpdateMasterMinterResponse>): _12.MsgUpdateMasterMinterResponse;
            fromAmino(_: _12.MsgUpdateMasterMinterResponseAmino): _12.MsgUpdateMasterMinterResponse;
            toAmino(_: _12.MsgUpdateMasterMinterResponse): _12.MsgUpdateMasterMinterResponseAmino;
            fromAminoMsg(object: _12.MsgUpdateMasterMinterResponseAminoMsg): _12.MsgUpdateMasterMinterResponse;
            fromProtoMsg(message: _12.MsgUpdateMasterMinterResponseProtoMsg): _12.MsgUpdateMasterMinterResponse;
            toProto(message: _12.MsgUpdateMasterMinterResponse): Uint8Array;
            toProtoMsg(message: _12.MsgUpdateMasterMinterResponse): _12.MsgUpdateMasterMinterResponseProtoMsg;
        };
        MsgUpdatePauser: {
            typeUrl: string;
            encode(message: _12.MsgUpdatePauser, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgUpdatePauser;
            fromPartial(object: Partial<_12.MsgUpdatePauser>): _12.MsgUpdatePauser;
            fromAmino(object: _12.MsgUpdatePauserAmino): _12.MsgUpdatePauser;
            toAmino(message: _12.MsgUpdatePauser): _12.MsgUpdatePauserAmino;
            fromAminoMsg(object: _12.MsgUpdatePauserAminoMsg): _12.MsgUpdatePauser;
            fromProtoMsg(message: _12.MsgUpdatePauserProtoMsg): _12.MsgUpdatePauser;
            toProto(message: _12.MsgUpdatePauser): Uint8Array;
            toProtoMsg(message: _12.MsgUpdatePauser): _12.MsgUpdatePauserProtoMsg;
        };
        MsgUpdatePauserResponse: {
            typeUrl: string;
            encode(_: _12.MsgUpdatePauserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgUpdatePauserResponse;
            fromPartial(_: Partial<_12.MsgUpdatePauserResponse>): _12.MsgUpdatePauserResponse;
            fromAmino(_: _12.MsgUpdatePauserResponseAmino): _12.MsgUpdatePauserResponse;
            toAmino(_: _12.MsgUpdatePauserResponse): _12.MsgUpdatePauserResponseAmino;
            fromAminoMsg(object: _12.MsgUpdatePauserResponseAminoMsg): _12.MsgUpdatePauserResponse;
            fromProtoMsg(message: _12.MsgUpdatePauserResponseProtoMsg): _12.MsgUpdatePauserResponse;
            toProto(message: _12.MsgUpdatePauserResponse): Uint8Array;
            toProtoMsg(message: _12.MsgUpdatePauserResponse): _12.MsgUpdatePauserResponseProtoMsg;
        };
        MsgUpdateBlacklister: {
            typeUrl: string;
            encode(message: _12.MsgUpdateBlacklister, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgUpdateBlacklister;
            fromPartial(object: Partial<_12.MsgUpdateBlacklister>): _12.MsgUpdateBlacklister;
            fromAmino(object: _12.MsgUpdateBlacklisterAmino): _12.MsgUpdateBlacklister;
            toAmino(message: _12.MsgUpdateBlacklister): _12.MsgUpdateBlacklisterAmino;
            fromAminoMsg(object: _12.MsgUpdateBlacklisterAminoMsg): _12.MsgUpdateBlacklister;
            fromProtoMsg(message: _12.MsgUpdateBlacklisterProtoMsg): _12.MsgUpdateBlacklister;
            toProto(message: _12.MsgUpdateBlacklister): Uint8Array;
            toProtoMsg(message: _12.MsgUpdateBlacklister): _12.MsgUpdateBlacklisterProtoMsg;
        };
        MsgUpdateBlacklisterResponse: {
            typeUrl: string;
            encode(_: _12.MsgUpdateBlacklisterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgUpdateBlacklisterResponse;
            fromPartial(_: Partial<_12.MsgUpdateBlacklisterResponse>): _12.MsgUpdateBlacklisterResponse;
            fromAmino(_: _12.MsgUpdateBlacklisterResponseAmino): _12.MsgUpdateBlacklisterResponse;
            toAmino(_: _12.MsgUpdateBlacklisterResponse): _12.MsgUpdateBlacklisterResponseAmino;
            fromAminoMsg(object: _12.MsgUpdateBlacklisterResponseAminoMsg): _12.MsgUpdateBlacklisterResponse;
            fromProtoMsg(message: _12.MsgUpdateBlacklisterResponseProtoMsg): _12.MsgUpdateBlacklisterResponse;
            toProto(message: _12.MsgUpdateBlacklisterResponse): Uint8Array;
            toProtoMsg(message: _12.MsgUpdateBlacklisterResponse): _12.MsgUpdateBlacklisterResponseProtoMsg;
        };
        MsgUpdateOwner: {
            typeUrl: string;
            encode(message: _12.MsgUpdateOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgUpdateOwner;
            fromPartial(object: Partial<_12.MsgUpdateOwner>): _12.MsgUpdateOwner;
            fromAmino(object: _12.MsgUpdateOwnerAmino): _12.MsgUpdateOwner;
            toAmino(message: _12.MsgUpdateOwner): _12.MsgUpdateOwnerAmino;
            fromAminoMsg(object: _12.MsgUpdateOwnerAminoMsg): _12.MsgUpdateOwner;
            fromProtoMsg(message: _12.MsgUpdateOwnerProtoMsg): _12.MsgUpdateOwner;
            toProto(message: _12.MsgUpdateOwner): Uint8Array;
            toProtoMsg(message: _12.MsgUpdateOwner): _12.MsgUpdateOwnerProtoMsg;
        };
        MsgUpdateOwnerResponse: {
            typeUrl: string;
            encode(_: _12.MsgUpdateOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgUpdateOwnerResponse;
            fromPartial(_: Partial<_12.MsgUpdateOwnerResponse>): _12.MsgUpdateOwnerResponse;
            fromAmino(_: _12.MsgUpdateOwnerResponseAmino): _12.MsgUpdateOwnerResponse;
            toAmino(_: _12.MsgUpdateOwnerResponse): _12.MsgUpdateOwnerResponseAmino;
            fromAminoMsg(object: _12.MsgUpdateOwnerResponseAminoMsg): _12.MsgUpdateOwnerResponse;
            fromProtoMsg(message: _12.MsgUpdateOwnerResponseProtoMsg): _12.MsgUpdateOwnerResponse;
            toProto(message: _12.MsgUpdateOwnerResponse): Uint8Array;
            toProtoMsg(message: _12.MsgUpdateOwnerResponse): _12.MsgUpdateOwnerResponseProtoMsg;
        };
        MsgAcceptOwner: {
            typeUrl: string;
            encode(message: _12.MsgAcceptOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgAcceptOwner;
            fromPartial(object: Partial<_12.MsgAcceptOwner>): _12.MsgAcceptOwner;
            fromAmino(object: _12.MsgAcceptOwnerAmino): _12.MsgAcceptOwner;
            toAmino(message: _12.MsgAcceptOwner): _12.MsgAcceptOwnerAmino;
            fromAminoMsg(object: _12.MsgAcceptOwnerAminoMsg): _12.MsgAcceptOwner;
            fromProtoMsg(message: _12.MsgAcceptOwnerProtoMsg): _12.MsgAcceptOwner;
            toProto(message: _12.MsgAcceptOwner): Uint8Array;
            toProtoMsg(message: _12.MsgAcceptOwner): _12.MsgAcceptOwnerProtoMsg;
        };
        MsgAcceptOwnerResponse: {
            typeUrl: string;
            encode(_: _12.MsgAcceptOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgAcceptOwnerResponse;
            fromPartial(_: Partial<_12.MsgAcceptOwnerResponse>): _12.MsgAcceptOwnerResponse;
            fromAmino(_: _12.MsgAcceptOwnerResponseAmino): _12.MsgAcceptOwnerResponse;
            toAmino(_: _12.MsgAcceptOwnerResponse): _12.MsgAcceptOwnerResponseAmino;
            fromAminoMsg(object: _12.MsgAcceptOwnerResponseAminoMsg): _12.MsgAcceptOwnerResponse;
            fromProtoMsg(message: _12.MsgAcceptOwnerResponseProtoMsg): _12.MsgAcceptOwnerResponse;
            toProto(message: _12.MsgAcceptOwnerResponse): Uint8Array;
            toProtoMsg(message: _12.MsgAcceptOwnerResponse): _12.MsgAcceptOwnerResponseProtoMsg;
        };
        MsgConfigureMinter: {
            typeUrl: string;
            encode(message: _12.MsgConfigureMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgConfigureMinter;
            fromPartial(object: Partial<_12.MsgConfigureMinter>): _12.MsgConfigureMinter;
            fromAmino(object: _12.MsgConfigureMinterAmino): _12.MsgConfigureMinter;
            toAmino(message: _12.MsgConfigureMinter): _12.MsgConfigureMinterAmino;
            fromAminoMsg(object: _12.MsgConfigureMinterAminoMsg): _12.MsgConfigureMinter;
            fromProtoMsg(message: _12.MsgConfigureMinterProtoMsg): _12.MsgConfigureMinter;
            toProto(message: _12.MsgConfigureMinter): Uint8Array;
            toProtoMsg(message: _12.MsgConfigureMinter): _12.MsgConfigureMinterProtoMsg;
        };
        MsgConfigureMinterResponse: {
            typeUrl: string;
            encode(_: _12.MsgConfigureMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgConfigureMinterResponse;
            fromPartial(_: Partial<_12.MsgConfigureMinterResponse>): _12.MsgConfigureMinterResponse;
            fromAmino(_: _12.MsgConfigureMinterResponseAmino): _12.MsgConfigureMinterResponse;
            toAmino(_: _12.MsgConfigureMinterResponse): _12.MsgConfigureMinterResponseAmino;
            fromAminoMsg(object: _12.MsgConfigureMinterResponseAminoMsg): _12.MsgConfigureMinterResponse;
            fromProtoMsg(message: _12.MsgConfigureMinterResponseProtoMsg): _12.MsgConfigureMinterResponse;
            toProto(message: _12.MsgConfigureMinterResponse): Uint8Array;
            toProtoMsg(message: _12.MsgConfigureMinterResponse): _12.MsgConfigureMinterResponseProtoMsg;
        };
        MsgRemoveMinter: {
            typeUrl: string;
            encode(message: _12.MsgRemoveMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgRemoveMinter;
            fromPartial(object: Partial<_12.MsgRemoveMinter>): _12.MsgRemoveMinter;
            fromAmino(object: _12.MsgRemoveMinterAmino): _12.MsgRemoveMinter;
            toAmino(message: _12.MsgRemoveMinter): _12.MsgRemoveMinterAmino;
            fromAminoMsg(object: _12.MsgRemoveMinterAminoMsg): _12.MsgRemoveMinter;
            fromProtoMsg(message: _12.MsgRemoveMinterProtoMsg): _12.MsgRemoveMinter;
            toProto(message: _12.MsgRemoveMinter): Uint8Array;
            toProtoMsg(message: _12.MsgRemoveMinter): _12.MsgRemoveMinterProtoMsg;
        };
        MsgRemoveMinterResponse: {
            typeUrl: string;
            encode(_: _12.MsgRemoveMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgRemoveMinterResponse;
            fromPartial(_: Partial<_12.MsgRemoveMinterResponse>): _12.MsgRemoveMinterResponse;
            fromAmino(_: _12.MsgRemoveMinterResponseAmino): _12.MsgRemoveMinterResponse;
            toAmino(_: _12.MsgRemoveMinterResponse): _12.MsgRemoveMinterResponseAmino;
            fromAminoMsg(object: _12.MsgRemoveMinterResponseAminoMsg): _12.MsgRemoveMinterResponse;
            fromProtoMsg(message: _12.MsgRemoveMinterResponseProtoMsg): _12.MsgRemoveMinterResponse;
            toProto(message: _12.MsgRemoveMinterResponse): Uint8Array;
            toProtoMsg(message: _12.MsgRemoveMinterResponse): _12.MsgRemoveMinterResponseProtoMsg;
        };
        MsgMint: {
            typeUrl: string;
            encode(message: _12.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgMint;
            fromPartial(object: Partial<_12.MsgMint>): _12.MsgMint;
            fromAmino(object: _12.MsgMintAmino): _12.MsgMint;
            toAmino(message: _12.MsgMint): _12.MsgMintAmino;
            fromAminoMsg(object: _12.MsgMintAminoMsg): _12.MsgMint;
            fromProtoMsg(message: _12.MsgMintProtoMsg): _12.MsgMint;
            toProto(message: _12.MsgMint): Uint8Array;
            toProtoMsg(message: _12.MsgMint): _12.MsgMintProtoMsg;
        };
        MsgMintResponse: {
            typeUrl: string;
            encode(_: _12.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgMintResponse;
            fromPartial(_: Partial<_12.MsgMintResponse>): _12.MsgMintResponse;
            fromAmino(_: _12.MsgMintResponseAmino): _12.MsgMintResponse;
            toAmino(_: _12.MsgMintResponse): _12.MsgMintResponseAmino;
            fromAminoMsg(object: _12.MsgMintResponseAminoMsg): _12.MsgMintResponse;
            fromProtoMsg(message: _12.MsgMintResponseProtoMsg): _12.MsgMintResponse;
            toProto(message: _12.MsgMintResponse): Uint8Array;
            toProtoMsg(message: _12.MsgMintResponse): _12.MsgMintResponseProtoMsg;
        };
        MsgBurn: {
            typeUrl: string;
            encode(message: _12.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgBurn;
            fromPartial(object: Partial<_12.MsgBurn>): _12.MsgBurn;
            fromAmino(object: _12.MsgBurnAmino): _12.MsgBurn;
            toAmino(message: _12.MsgBurn): _12.MsgBurnAmino;
            fromAminoMsg(object: _12.MsgBurnAminoMsg): _12.MsgBurn;
            fromProtoMsg(message: _12.MsgBurnProtoMsg): _12.MsgBurn;
            toProto(message: _12.MsgBurn): Uint8Array;
            toProtoMsg(message: _12.MsgBurn): _12.MsgBurnProtoMsg;
        };
        MsgBurnResponse: {
            typeUrl: string;
            encode(_: _12.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgBurnResponse;
            fromPartial(_: Partial<_12.MsgBurnResponse>): _12.MsgBurnResponse;
            fromAmino(_: _12.MsgBurnResponseAmino): _12.MsgBurnResponse;
            toAmino(_: _12.MsgBurnResponse): _12.MsgBurnResponseAmino;
            fromAminoMsg(object: _12.MsgBurnResponseAminoMsg): _12.MsgBurnResponse;
            fromProtoMsg(message: _12.MsgBurnResponseProtoMsg): _12.MsgBurnResponse;
            toProto(message: _12.MsgBurnResponse): Uint8Array;
            toProtoMsg(message: _12.MsgBurnResponse): _12.MsgBurnResponseProtoMsg;
        };
        MsgBlacklist: {
            typeUrl: string;
            encode(message: _12.MsgBlacklist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgBlacklist;
            fromPartial(object: Partial<_12.MsgBlacklist>): _12.MsgBlacklist;
            fromAmino(object: _12.MsgBlacklistAmino): _12.MsgBlacklist;
            toAmino(message: _12.MsgBlacklist): _12.MsgBlacklistAmino;
            fromAminoMsg(object: _12.MsgBlacklistAminoMsg): _12.MsgBlacklist;
            fromProtoMsg(message: _12.MsgBlacklistProtoMsg): _12.MsgBlacklist;
            toProto(message: _12.MsgBlacklist): Uint8Array;
            toProtoMsg(message: _12.MsgBlacklist): _12.MsgBlacklistProtoMsg;
        };
        MsgBlacklistResponse: {
            typeUrl: string;
            encode(_: _12.MsgBlacklistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgBlacklistResponse;
            fromPartial(_: Partial<_12.MsgBlacklistResponse>): _12.MsgBlacklistResponse;
            fromAmino(_: _12.MsgBlacklistResponseAmino): _12.MsgBlacklistResponse;
            toAmino(_: _12.MsgBlacklistResponse): _12.MsgBlacklistResponseAmino;
            fromAminoMsg(object: _12.MsgBlacklistResponseAminoMsg): _12.MsgBlacklistResponse;
            fromProtoMsg(message: _12.MsgBlacklistResponseProtoMsg): _12.MsgBlacklistResponse;
            toProto(message: _12.MsgBlacklistResponse): Uint8Array;
            toProtoMsg(message: _12.MsgBlacklistResponse): _12.MsgBlacklistResponseProtoMsg;
        };
        MsgUnblacklist: {
            typeUrl: string;
            encode(message: _12.MsgUnblacklist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgUnblacklist;
            fromPartial(object: Partial<_12.MsgUnblacklist>): _12.MsgUnblacklist;
            fromAmino(object: _12.MsgUnblacklistAmino): _12.MsgUnblacklist;
            toAmino(message: _12.MsgUnblacklist): _12.MsgUnblacklistAmino;
            fromAminoMsg(object: _12.MsgUnblacklistAminoMsg): _12.MsgUnblacklist;
            fromProtoMsg(message: _12.MsgUnblacklistProtoMsg): _12.MsgUnblacklist;
            toProto(message: _12.MsgUnblacklist): Uint8Array;
            toProtoMsg(message: _12.MsgUnblacklist): _12.MsgUnblacklistProtoMsg;
        };
        MsgUnblacklistResponse: {
            typeUrl: string;
            encode(_: _12.MsgUnblacklistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgUnblacklistResponse;
            fromPartial(_: Partial<_12.MsgUnblacklistResponse>): _12.MsgUnblacklistResponse;
            fromAmino(_: _12.MsgUnblacklistResponseAmino): _12.MsgUnblacklistResponse;
            toAmino(_: _12.MsgUnblacklistResponse): _12.MsgUnblacklistResponseAmino;
            fromAminoMsg(object: _12.MsgUnblacklistResponseAminoMsg): _12.MsgUnblacklistResponse;
            fromProtoMsg(message: _12.MsgUnblacklistResponseProtoMsg): _12.MsgUnblacklistResponse;
            toProto(message: _12.MsgUnblacklistResponse): Uint8Array;
            toProtoMsg(message: _12.MsgUnblacklistResponse): _12.MsgUnblacklistResponseProtoMsg;
        };
        MsgPause: {
            typeUrl: string;
            encode(message: _12.MsgPause, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgPause;
            fromPartial(object: Partial<_12.MsgPause>): _12.MsgPause;
            fromAmino(object: _12.MsgPauseAmino): _12.MsgPause;
            toAmino(message: _12.MsgPause): _12.MsgPauseAmino;
            fromAminoMsg(object: _12.MsgPauseAminoMsg): _12.MsgPause;
            fromProtoMsg(message: _12.MsgPauseProtoMsg): _12.MsgPause;
            toProto(message: _12.MsgPause): Uint8Array;
            toProtoMsg(message: _12.MsgPause): _12.MsgPauseProtoMsg;
        };
        MsgPauseResponse: {
            typeUrl: string;
            encode(_: _12.MsgPauseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgPauseResponse;
            fromPartial(_: Partial<_12.MsgPauseResponse>): _12.MsgPauseResponse;
            fromAmino(_: _12.MsgPauseResponseAmino): _12.MsgPauseResponse;
            toAmino(_: _12.MsgPauseResponse): _12.MsgPauseResponseAmino;
            fromAminoMsg(object: _12.MsgPauseResponseAminoMsg): _12.MsgPauseResponse;
            fromProtoMsg(message: _12.MsgPauseResponseProtoMsg): _12.MsgPauseResponse;
            toProto(message: _12.MsgPauseResponse): Uint8Array;
            toProtoMsg(message: _12.MsgPauseResponse): _12.MsgPauseResponseProtoMsg;
        };
        MsgUnpause: {
            typeUrl: string;
            encode(message: _12.MsgUnpause, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgUnpause;
            fromPartial(object: Partial<_12.MsgUnpause>): _12.MsgUnpause;
            fromAmino(object: _12.MsgUnpauseAmino): _12.MsgUnpause;
            toAmino(message: _12.MsgUnpause): _12.MsgUnpauseAmino;
            fromAminoMsg(object: _12.MsgUnpauseAminoMsg): _12.MsgUnpause;
            fromProtoMsg(message: _12.MsgUnpauseProtoMsg): _12.MsgUnpause;
            toProto(message: _12.MsgUnpause): Uint8Array;
            toProtoMsg(message: _12.MsgUnpause): _12.MsgUnpauseProtoMsg;
        };
        MsgUnpauseResponse: {
            typeUrl: string;
            encode(_: _12.MsgUnpauseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgUnpauseResponse;
            fromPartial(_: Partial<_12.MsgUnpauseResponse>): _12.MsgUnpauseResponse;
            fromAmino(_: _12.MsgUnpauseResponseAmino): _12.MsgUnpauseResponse;
            toAmino(_: _12.MsgUnpauseResponse): _12.MsgUnpauseResponseAmino;
            fromAminoMsg(object: _12.MsgUnpauseResponseAminoMsg): _12.MsgUnpauseResponse;
            fromProtoMsg(message: _12.MsgUnpauseResponseProtoMsg): _12.MsgUnpauseResponse;
            toProto(message: _12.MsgUnpauseResponse): Uint8Array;
            toProtoMsg(message: _12.MsgUnpauseResponse): _12.MsgUnpauseResponseProtoMsg;
        };
        MsgConfigureMinterController: {
            typeUrl: string;
            encode(message: _12.MsgConfigureMinterController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgConfigureMinterController;
            fromPartial(object: Partial<_12.MsgConfigureMinterController>): _12.MsgConfigureMinterController;
            fromAmino(object: _12.MsgConfigureMinterControllerAmino): _12.MsgConfigureMinterController;
            toAmino(message: _12.MsgConfigureMinterController): _12.MsgConfigureMinterControllerAmino;
            fromAminoMsg(object: _12.MsgConfigureMinterControllerAminoMsg): _12.MsgConfigureMinterController;
            fromProtoMsg(message: _12.MsgConfigureMinterControllerProtoMsg): _12.MsgConfigureMinterController;
            toProto(message: _12.MsgConfigureMinterController): Uint8Array;
            toProtoMsg(message: _12.MsgConfigureMinterController): _12.MsgConfigureMinterControllerProtoMsg;
        };
        MsgConfigureMinterControllerResponse: {
            typeUrl: string;
            encode(_: _12.MsgConfigureMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgConfigureMinterControllerResponse;
            fromPartial(_: Partial<_12.MsgConfigureMinterControllerResponse>): _12.MsgConfigureMinterControllerResponse;
            fromAmino(_: _12.MsgConfigureMinterControllerResponseAmino): _12.MsgConfigureMinterControllerResponse;
            toAmino(_: _12.MsgConfigureMinterControllerResponse): _12.MsgConfigureMinterControllerResponseAmino;
            fromAminoMsg(object: _12.MsgConfigureMinterControllerResponseAminoMsg): _12.MsgConfigureMinterControllerResponse;
            fromProtoMsg(message: _12.MsgConfigureMinterControllerResponseProtoMsg): _12.MsgConfigureMinterControllerResponse;
            toProto(message: _12.MsgConfigureMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _12.MsgConfigureMinterControllerResponse): _12.MsgConfigureMinterControllerResponseProtoMsg;
        };
        MsgRemoveMinterController: {
            typeUrl: string;
            encode(message: _12.MsgRemoveMinterController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.MsgRemoveMinterController;
            fromPartial(object: Partial<_12.MsgRemoveMinterController>): _12.MsgRemoveMinterController;
            fromAmino(object: _12.MsgRemoveMinterControllerAmino): _12.MsgRemoveMinterController;
            toAmino(message: _12.MsgRemoveMinterController): _12.MsgRemoveMinterControllerAmino;
            fromAminoMsg(object: _12.MsgRemoveMinterControllerAminoMsg): _12.MsgRemoveMinterController;
            fromProtoMsg(message: _12.MsgRemoveMinterControllerProtoMsg): _12.MsgRemoveMinterController;
            toProto(message: _12.MsgRemoveMinterController): Uint8Array;
            toProtoMsg(message: _12.MsgRemoveMinterController): _12.MsgRemoveMinterControllerProtoMsg;
        };
        MsgRemoveMinterControllerResponse: {
            typeUrl: string;
            encode(_: _12.MsgRemoveMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.MsgRemoveMinterControllerResponse;
            fromPartial(_: Partial<_12.MsgRemoveMinterControllerResponse>): _12.MsgRemoveMinterControllerResponse;
            fromAmino(_: _12.MsgRemoveMinterControllerResponseAmino): _12.MsgRemoveMinterControllerResponse;
            toAmino(_: _12.MsgRemoveMinterControllerResponse): _12.MsgRemoveMinterControllerResponseAmino;
            fromAminoMsg(object: _12.MsgRemoveMinterControllerResponseAminoMsg): _12.MsgRemoveMinterControllerResponse;
            fromProtoMsg(message: _12.MsgRemoveMinterControllerResponseProtoMsg): _12.MsgRemoveMinterControllerResponse;
            toProto(message: _12.MsgRemoveMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _12.MsgRemoveMinterControllerResponse): _12.MsgRemoveMinterControllerResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _11.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _11.QueryParamsRequest;
            fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
            fromAmino(_: _11.QueryParamsRequestAmino): _11.QueryParamsRequest;
            toAmino(_: _11.QueryParamsRequest): _11.QueryParamsRequestAmino;
            fromAminoMsg(object: _11.QueryParamsRequestAminoMsg): _11.QueryParamsRequest;
            fromProtoMsg(message: _11.QueryParamsRequestProtoMsg): _11.QueryParamsRequest;
            toProto(message: _11.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _11.QueryParamsRequest): _11.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _11.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryParamsResponse;
            fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
            fromAmino(object: _11.QueryParamsResponseAmino): _11.QueryParamsResponse;
            toAmino(message: _11.QueryParamsResponse): _11.QueryParamsResponseAmino;
            fromAminoMsg(object: _11.QueryParamsResponseAminoMsg): _11.QueryParamsResponse;
            fromProtoMsg(message: _11.QueryParamsResponseProtoMsg): _11.QueryParamsResponse;
            toProto(message: _11.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _11.QueryParamsResponse): _11.QueryParamsResponseProtoMsg;
        };
        QueryGetBlacklistedRequest: {
            typeUrl: string;
            encode(message: _11.QueryGetBlacklistedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetBlacklistedRequest;
            fromPartial(object: Partial<_11.QueryGetBlacklistedRequest>): _11.QueryGetBlacklistedRequest;
            fromAmino(object: _11.QueryGetBlacklistedRequestAmino): _11.QueryGetBlacklistedRequest;
            toAmino(message: _11.QueryGetBlacklistedRequest): _11.QueryGetBlacklistedRequestAmino;
            fromAminoMsg(object: _11.QueryGetBlacklistedRequestAminoMsg): _11.QueryGetBlacklistedRequest;
            fromProtoMsg(message: _11.QueryGetBlacklistedRequestProtoMsg): _11.QueryGetBlacklistedRequest;
            toProto(message: _11.QueryGetBlacklistedRequest): Uint8Array;
            toProtoMsg(message: _11.QueryGetBlacklistedRequest): _11.QueryGetBlacklistedRequestProtoMsg;
        };
        QueryGetBlacklistedResponse: {
            typeUrl: string;
            encode(message: _11.QueryGetBlacklistedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetBlacklistedResponse;
            fromPartial(object: Partial<_11.QueryGetBlacklistedResponse>): _11.QueryGetBlacklistedResponse;
            fromAmino(object: _11.QueryGetBlacklistedResponseAmino): _11.QueryGetBlacklistedResponse;
            toAmino(message: _11.QueryGetBlacklistedResponse): _11.QueryGetBlacklistedResponseAmino;
            fromAminoMsg(object: _11.QueryGetBlacklistedResponseAminoMsg): _11.QueryGetBlacklistedResponse;
            fromProtoMsg(message: _11.QueryGetBlacklistedResponseProtoMsg): _11.QueryGetBlacklistedResponse;
            toProto(message: _11.QueryGetBlacklistedResponse): Uint8Array;
            toProtoMsg(message: _11.QueryGetBlacklistedResponse): _11.QueryGetBlacklistedResponseProtoMsg;
        };
        QueryAllBlacklistedRequest: {
            typeUrl: string;
            encode(message: _11.QueryAllBlacklistedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryAllBlacklistedRequest;
            fromPartial(object: Partial<_11.QueryAllBlacklistedRequest>): _11.QueryAllBlacklistedRequest;
            fromAmino(object: _11.QueryAllBlacklistedRequestAmino): _11.QueryAllBlacklistedRequest;
            toAmino(message: _11.QueryAllBlacklistedRequest): _11.QueryAllBlacklistedRequestAmino;
            fromAminoMsg(object: _11.QueryAllBlacklistedRequestAminoMsg): _11.QueryAllBlacklistedRequest;
            fromProtoMsg(message: _11.QueryAllBlacklistedRequestProtoMsg): _11.QueryAllBlacklistedRequest;
            toProto(message: _11.QueryAllBlacklistedRequest): Uint8Array;
            toProtoMsg(message: _11.QueryAllBlacklistedRequest): _11.QueryAllBlacklistedRequestProtoMsg;
        };
        QueryAllBlacklistedResponse: {
            typeUrl: string;
            encode(message: _11.QueryAllBlacklistedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryAllBlacklistedResponse;
            fromPartial(object: Partial<_11.QueryAllBlacklistedResponse>): _11.QueryAllBlacklistedResponse;
            fromAmino(object: _11.QueryAllBlacklistedResponseAmino): _11.QueryAllBlacklistedResponse;
            toAmino(message: _11.QueryAllBlacklistedResponse): _11.QueryAllBlacklistedResponseAmino;
            fromAminoMsg(object: _11.QueryAllBlacklistedResponseAminoMsg): _11.QueryAllBlacklistedResponse;
            fromProtoMsg(message: _11.QueryAllBlacklistedResponseProtoMsg): _11.QueryAllBlacklistedResponse;
            toProto(message: _11.QueryAllBlacklistedResponse): Uint8Array;
            toProtoMsg(message: _11.QueryAllBlacklistedResponse): _11.QueryAllBlacklistedResponseProtoMsg;
        };
        QueryGetPausedRequest: {
            typeUrl: string;
            encode(_: _11.QueryGetPausedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _11.QueryGetPausedRequest;
            fromPartial(_: Partial<_11.QueryGetPausedRequest>): _11.QueryGetPausedRequest;
            fromAmino(_: _11.QueryGetPausedRequestAmino): _11.QueryGetPausedRequest;
            toAmino(_: _11.QueryGetPausedRequest): _11.QueryGetPausedRequestAmino;
            fromAminoMsg(object: _11.QueryGetPausedRequestAminoMsg): _11.QueryGetPausedRequest;
            fromProtoMsg(message: _11.QueryGetPausedRequestProtoMsg): _11.QueryGetPausedRequest;
            toProto(message: _11.QueryGetPausedRequest): Uint8Array;
            toProtoMsg(message: _11.QueryGetPausedRequest): _11.QueryGetPausedRequestProtoMsg;
        };
        QueryGetPausedResponse: {
            typeUrl: string;
            encode(message: _11.QueryGetPausedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetPausedResponse;
            fromPartial(object: Partial<_11.QueryGetPausedResponse>): _11.QueryGetPausedResponse;
            fromAmino(object: _11.QueryGetPausedResponseAmino): _11.QueryGetPausedResponse;
            toAmino(message: _11.QueryGetPausedResponse): _11.QueryGetPausedResponseAmino;
            fromAminoMsg(object: _11.QueryGetPausedResponseAminoMsg): _11.QueryGetPausedResponse;
            fromProtoMsg(message: _11.QueryGetPausedResponseProtoMsg): _11.QueryGetPausedResponse;
            toProto(message: _11.QueryGetPausedResponse): Uint8Array;
            toProtoMsg(message: _11.QueryGetPausedResponse): _11.QueryGetPausedResponseProtoMsg;
        };
        QueryGetMasterMinterRequest: {
            typeUrl: string;
            encode(_: _11.QueryGetMasterMinterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _11.QueryGetMasterMinterRequest;
            fromPartial(_: Partial<_11.QueryGetMasterMinterRequest>): _11.QueryGetMasterMinterRequest;
            fromAmino(_: _11.QueryGetMasterMinterRequestAmino): _11.QueryGetMasterMinterRequest;
            toAmino(_: _11.QueryGetMasterMinterRequest): _11.QueryGetMasterMinterRequestAmino;
            fromAminoMsg(object: _11.QueryGetMasterMinterRequestAminoMsg): _11.QueryGetMasterMinterRequest;
            fromProtoMsg(message: _11.QueryGetMasterMinterRequestProtoMsg): _11.QueryGetMasterMinterRequest;
            toProto(message: _11.QueryGetMasterMinterRequest): Uint8Array;
            toProtoMsg(message: _11.QueryGetMasterMinterRequest): _11.QueryGetMasterMinterRequestProtoMsg;
        };
        QueryGetMasterMinterResponse: {
            typeUrl: string;
            encode(message: _11.QueryGetMasterMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetMasterMinterResponse;
            fromPartial(object: Partial<_11.QueryGetMasterMinterResponse>): _11.QueryGetMasterMinterResponse;
            fromAmino(object: _11.QueryGetMasterMinterResponseAmino): _11.QueryGetMasterMinterResponse;
            toAmino(message: _11.QueryGetMasterMinterResponse): _11.QueryGetMasterMinterResponseAmino;
            fromAminoMsg(object: _11.QueryGetMasterMinterResponseAminoMsg): _11.QueryGetMasterMinterResponse;
            fromProtoMsg(message: _11.QueryGetMasterMinterResponseProtoMsg): _11.QueryGetMasterMinterResponse;
            toProto(message: _11.QueryGetMasterMinterResponse): Uint8Array;
            toProtoMsg(message: _11.QueryGetMasterMinterResponse): _11.QueryGetMasterMinterResponseProtoMsg;
        };
        QueryGetMintersRequest: {
            typeUrl: string;
            encode(message: _11.QueryGetMintersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetMintersRequest;
            fromPartial(object: Partial<_11.QueryGetMintersRequest>): _11.QueryGetMintersRequest;
            fromAmino(object: _11.QueryGetMintersRequestAmino): _11.QueryGetMintersRequest;
            toAmino(message: _11.QueryGetMintersRequest): _11.QueryGetMintersRequestAmino;
            fromAminoMsg(object: _11.QueryGetMintersRequestAminoMsg): _11.QueryGetMintersRequest;
            fromProtoMsg(message: _11.QueryGetMintersRequestProtoMsg): _11.QueryGetMintersRequest;
            toProto(message: _11.QueryGetMintersRequest): Uint8Array;
            toProtoMsg(message: _11.QueryGetMintersRequest): _11.QueryGetMintersRequestProtoMsg;
        };
        QueryGetMintersResponse: {
            typeUrl: string;
            encode(message: _11.QueryGetMintersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetMintersResponse;
            fromPartial(object: Partial<_11.QueryGetMintersResponse>): _11.QueryGetMintersResponse;
            fromAmino(object: _11.QueryGetMintersResponseAmino): _11.QueryGetMintersResponse;
            toAmino(message: _11.QueryGetMintersResponse): _11.QueryGetMintersResponseAmino;
            fromAminoMsg(object: _11.QueryGetMintersResponseAminoMsg): _11.QueryGetMintersResponse;
            fromProtoMsg(message: _11.QueryGetMintersResponseProtoMsg): _11.QueryGetMintersResponse;
            toProto(message: _11.QueryGetMintersResponse): Uint8Array;
            toProtoMsg(message: _11.QueryGetMintersResponse): _11.QueryGetMintersResponseProtoMsg;
        };
        QueryAllMintersRequest: {
            typeUrl: string;
            encode(message: _11.QueryAllMintersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryAllMintersRequest;
            fromPartial(object: Partial<_11.QueryAllMintersRequest>): _11.QueryAllMintersRequest;
            fromAmino(object: _11.QueryAllMintersRequestAmino): _11.QueryAllMintersRequest;
            toAmino(message: _11.QueryAllMintersRequest): _11.QueryAllMintersRequestAmino;
            fromAminoMsg(object: _11.QueryAllMintersRequestAminoMsg): _11.QueryAllMintersRequest;
            fromProtoMsg(message: _11.QueryAllMintersRequestProtoMsg): _11.QueryAllMintersRequest;
            toProto(message: _11.QueryAllMintersRequest): Uint8Array;
            toProtoMsg(message: _11.QueryAllMintersRequest): _11.QueryAllMintersRequestProtoMsg;
        };
        QueryAllMintersResponse: {
            typeUrl: string;
            encode(message: _11.QueryAllMintersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryAllMintersResponse;
            fromPartial(object: Partial<_11.QueryAllMintersResponse>): _11.QueryAllMintersResponse;
            fromAmino(object: _11.QueryAllMintersResponseAmino): _11.QueryAllMintersResponse;
            toAmino(message: _11.QueryAllMintersResponse): _11.QueryAllMintersResponseAmino;
            fromAminoMsg(object: _11.QueryAllMintersResponseAminoMsg): _11.QueryAllMintersResponse;
            fromProtoMsg(message: _11.QueryAllMintersResponseProtoMsg): _11.QueryAllMintersResponse;
            toProto(message: _11.QueryAllMintersResponse): Uint8Array;
            toProtoMsg(message: _11.QueryAllMintersResponse): _11.QueryAllMintersResponseProtoMsg;
        };
        QueryGetPauserRequest: {
            typeUrl: string;
            encode(_: _11.QueryGetPauserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _11.QueryGetPauserRequest;
            fromPartial(_: Partial<_11.QueryGetPauserRequest>): _11.QueryGetPauserRequest;
            fromAmino(_: _11.QueryGetPauserRequestAmino): _11.QueryGetPauserRequest;
            toAmino(_: _11.QueryGetPauserRequest): _11.QueryGetPauserRequestAmino;
            fromAminoMsg(object: _11.QueryGetPauserRequestAminoMsg): _11.QueryGetPauserRequest;
            fromProtoMsg(message: _11.QueryGetPauserRequestProtoMsg): _11.QueryGetPauserRequest;
            toProto(message: _11.QueryGetPauserRequest): Uint8Array;
            toProtoMsg(message: _11.QueryGetPauserRequest): _11.QueryGetPauserRequestProtoMsg;
        };
        QueryGetPauserResponse: {
            typeUrl: string;
            encode(message: _11.QueryGetPauserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetPauserResponse;
            fromPartial(object: Partial<_11.QueryGetPauserResponse>): _11.QueryGetPauserResponse;
            fromAmino(object: _11.QueryGetPauserResponseAmino): _11.QueryGetPauserResponse;
            toAmino(message: _11.QueryGetPauserResponse): _11.QueryGetPauserResponseAmino;
            fromAminoMsg(object: _11.QueryGetPauserResponseAminoMsg): _11.QueryGetPauserResponse;
            fromProtoMsg(message: _11.QueryGetPauserResponseProtoMsg): _11.QueryGetPauserResponse;
            toProto(message: _11.QueryGetPauserResponse): Uint8Array;
            toProtoMsg(message: _11.QueryGetPauserResponse): _11.QueryGetPauserResponseProtoMsg;
        };
        QueryGetBlacklisterRequest: {
            typeUrl: string;
            encode(_: _11.QueryGetBlacklisterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _11.QueryGetBlacklisterRequest;
            fromPartial(_: Partial<_11.QueryGetBlacklisterRequest>): _11.QueryGetBlacklisterRequest;
            fromAmino(_: _11.QueryGetBlacklisterRequestAmino): _11.QueryGetBlacklisterRequest;
            toAmino(_: _11.QueryGetBlacklisterRequest): _11.QueryGetBlacklisterRequestAmino;
            fromAminoMsg(object: _11.QueryGetBlacklisterRequestAminoMsg): _11.QueryGetBlacklisterRequest;
            fromProtoMsg(message: _11.QueryGetBlacklisterRequestProtoMsg): _11.QueryGetBlacklisterRequest;
            toProto(message: _11.QueryGetBlacklisterRequest): Uint8Array;
            toProtoMsg(message: _11.QueryGetBlacklisterRequest): _11.QueryGetBlacklisterRequestProtoMsg;
        };
        QueryGetBlacklisterResponse: {
            typeUrl: string;
            encode(message: _11.QueryGetBlacklisterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetBlacklisterResponse;
            fromPartial(object: Partial<_11.QueryGetBlacklisterResponse>): _11.QueryGetBlacklisterResponse;
            fromAmino(object: _11.QueryGetBlacklisterResponseAmino): _11.QueryGetBlacklisterResponse;
            toAmino(message: _11.QueryGetBlacklisterResponse): _11.QueryGetBlacklisterResponseAmino;
            fromAminoMsg(object: _11.QueryGetBlacklisterResponseAminoMsg): _11.QueryGetBlacklisterResponse;
            fromProtoMsg(message: _11.QueryGetBlacklisterResponseProtoMsg): _11.QueryGetBlacklisterResponse;
            toProto(message: _11.QueryGetBlacklisterResponse): Uint8Array;
            toProtoMsg(message: _11.QueryGetBlacklisterResponse): _11.QueryGetBlacklisterResponseProtoMsg;
        };
        QueryGetOwnerRequest: {
            typeUrl: string;
            encode(_: _11.QueryGetOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _11.QueryGetOwnerRequest;
            fromPartial(_: Partial<_11.QueryGetOwnerRequest>): _11.QueryGetOwnerRequest;
            fromAmino(_: _11.QueryGetOwnerRequestAmino): _11.QueryGetOwnerRequest;
            toAmino(_: _11.QueryGetOwnerRequest): _11.QueryGetOwnerRequestAmino;
            fromAminoMsg(object: _11.QueryGetOwnerRequestAminoMsg): _11.QueryGetOwnerRequest;
            fromProtoMsg(message: _11.QueryGetOwnerRequestProtoMsg): _11.QueryGetOwnerRequest;
            toProto(message: _11.QueryGetOwnerRequest): Uint8Array;
            toProtoMsg(message: _11.QueryGetOwnerRequest): _11.QueryGetOwnerRequestProtoMsg;
        };
        QueryGetOwnerResponse: {
            typeUrl: string;
            encode(message: _11.QueryGetOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetOwnerResponse;
            fromPartial(object: Partial<_11.QueryGetOwnerResponse>): _11.QueryGetOwnerResponse;
            fromAmino(object: _11.QueryGetOwnerResponseAmino): _11.QueryGetOwnerResponse;
            toAmino(message: _11.QueryGetOwnerResponse): _11.QueryGetOwnerResponseAmino;
            fromAminoMsg(object: _11.QueryGetOwnerResponseAminoMsg): _11.QueryGetOwnerResponse;
            fromProtoMsg(message: _11.QueryGetOwnerResponseProtoMsg): _11.QueryGetOwnerResponse;
            toProto(message: _11.QueryGetOwnerResponse): Uint8Array;
            toProtoMsg(message: _11.QueryGetOwnerResponse): _11.QueryGetOwnerResponseProtoMsg;
        };
        QueryGetMinterControllerRequest: {
            typeUrl: string;
            encode(message: _11.QueryGetMinterControllerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetMinterControllerRequest;
            fromPartial(object: Partial<_11.QueryGetMinterControllerRequest>): _11.QueryGetMinterControllerRequest;
            fromAmino(object: _11.QueryGetMinterControllerRequestAmino): _11.QueryGetMinterControllerRequest;
            toAmino(message: _11.QueryGetMinterControllerRequest): _11.QueryGetMinterControllerRequestAmino;
            fromAminoMsg(object: _11.QueryGetMinterControllerRequestAminoMsg): _11.QueryGetMinterControllerRequest;
            fromProtoMsg(message: _11.QueryGetMinterControllerRequestProtoMsg): _11.QueryGetMinterControllerRequest;
            toProto(message: _11.QueryGetMinterControllerRequest): Uint8Array;
            toProtoMsg(message: _11.QueryGetMinterControllerRequest): _11.QueryGetMinterControllerRequestProtoMsg;
        };
        QueryGetMinterControllerResponse: {
            typeUrl: string;
            encode(message: _11.QueryGetMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetMinterControllerResponse;
            fromPartial(object: Partial<_11.QueryGetMinterControllerResponse>): _11.QueryGetMinterControllerResponse;
            fromAmino(object: _11.QueryGetMinterControllerResponseAmino): _11.QueryGetMinterControllerResponse;
            toAmino(message: _11.QueryGetMinterControllerResponse): _11.QueryGetMinterControllerResponseAmino;
            fromAminoMsg(object: _11.QueryGetMinterControllerResponseAminoMsg): _11.QueryGetMinterControllerResponse;
            fromProtoMsg(message: _11.QueryGetMinterControllerResponseProtoMsg): _11.QueryGetMinterControllerResponse;
            toProto(message: _11.QueryGetMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _11.QueryGetMinterControllerResponse): _11.QueryGetMinterControllerResponseProtoMsg;
        };
        QueryAllMinterControllerRequest: {
            typeUrl: string;
            encode(message: _11.QueryAllMinterControllerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryAllMinterControllerRequest;
            fromPartial(object: Partial<_11.QueryAllMinterControllerRequest>): _11.QueryAllMinterControllerRequest;
            fromAmino(object: _11.QueryAllMinterControllerRequestAmino): _11.QueryAllMinterControllerRequest;
            toAmino(message: _11.QueryAllMinterControllerRequest): _11.QueryAllMinterControllerRequestAmino;
            fromAminoMsg(object: _11.QueryAllMinterControllerRequestAminoMsg): _11.QueryAllMinterControllerRequest;
            fromProtoMsg(message: _11.QueryAllMinterControllerRequestProtoMsg): _11.QueryAllMinterControllerRequest;
            toProto(message: _11.QueryAllMinterControllerRequest): Uint8Array;
            toProtoMsg(message: _11.QueryAllMinterControllerRequest): _11.QueryAllMinterControllerRequestProtoMsg;
        };
        QueryAllMinterControllerResponse: {
            typeUrl: string;
            encode(message: _11.QueryAllMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryAllMinterControllerResponse;
            fromPartial(object: Partial<_11.QueryAllMinterControllerResponse>): _11.QueryAllMinterControllerResponse;
            fromAmino(object: _11.QueryAllMinterControllerResponseAmino): _11.QueryAllMinterControllerResponse;
            toAmino(message: _11.QueryAllMinterControllerResponse): _11.QueryAllMinterControllerResponseAmino;
            fromAminoMsg(object: _11.QueryAllMinterControllerResponseAminoMsg): _11.QueryAllMinterControllerResponse;
            fromProtoMsg(message: _11.QueryAllMinterControllerResponseProtoMsg): _11.QueryAllMinterControllerResponse;
            toProto(message: _11.QueryAllMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _11.QueryAllMinterControllerResponse): _11.QueryAllMinterControllerResponseProtoMsg;
        };
        QueryGetMintingDenomRequest: {
            typeUrl: string;
            encode(_: _11.QueryGetMintingDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _11.QueryGetMintingDenomRequest;
            fromPartial(_: Partial<_11.QueryGetMintingDenomRequest>): _11.QueryGetMintingDenomRequest;
            fromAmino(_: _11.QueryGetMintingDenomRequestAmino): _11.QueryGetMintingDenomRequest;
            toAmino(_: _11.QueryGetMintingDenomRequest): _11.QueryGetMintingDenomRequestAmino;
            fromAminoMsg(object: _11.QueryGetMintingDenomRequestAminoMsg): _11.QueryGetMintingDenomRequest;
            fromProtoMsg(message: _11.QueryGetMintingDenomRequestProtoMsg): _11.QueryGetMintingDenomRequest;
            toProto(message: _11.QueryGetMintingDenomRequest): Uint8Array;
            toProtoMsg(message: _11.QueryGetMintingDenomRequest): _11.QueryGetMintingDenomRequestProtoMsg;
        };
        QueryGetMintingDenomResponse: {
            typeUrl: string;
            encode(message: _11.QueryGetMintingDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.QueryGetMintingDenomResponse;
            fromPartial(object: Partial<_11.QueryGetMintingDenomResponse>): _11.QueryGetMintingDenomResponse;
            fromAmino(object: _11.QueryGetMintingDenomResponseAmino): _11.QueryGetMintingDenomResponse;
            toAmino(message: _11.QueryGetMintingDenomResponse): _11.QueryGetMintingDenomResponseAmino;
            fromAminoMsg(object: _11.QueryGetMintingDenomResponseAminoMsg): _11.QueryGetMintingDenomResponse;
            fromProtoMsg(message: _11.QueryGetMintingDenomResponseProtoMsg): _11.QueryGetMintingDenomResponse;
            toProto(message: _11.QueryGetMintingDenomResponse): Uint8Array;
            toProtoMsg(message: _11.QueryGetMintingDenomResponse): _11.QueryGetMintingDenomResponseProtoMsg;
        };
        Pauser: {
            typeUrl: string;
            encode(message: _10.Pauser, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.Pauser;
            fromPartial(object: Partial<_10.Pauser>): _10.Pauser;
            fromAmino(object: _10.PauserAmino): _10.Pauser;
            toAmino(message: _10.Pauser): _10.PauserAmino;
            fromAminoMsg(object: _10.PauserAminoMsg): _10.Pauser;
            fromProtoMsg(message: _10.PauserProtoMsg): _10.Pauser;
            toProto(message: _10.Pauser): Uint8Array;
            toProtoMsg(message: _10.Pauser): _10.PauserProtoMsg;
        };
        Paused: {
            typeUrl: string;
            encode(message: _9.Paused, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.Paused;
            fromPartial(object: Partial<_9.Paused>): _9.Paused;
            fromAmino(object: _9.PausedAmino): _9.Paused;
            toAmino(message: _9.Paused): _9.PausedAmino;
            fromAminoMsg(object: _9.PausedAminoMsg): _9.Paused;
            fromProtoMsg(message: _9.PausedProtoMsg): _9.Paused;
            toProto(message: _9.Paused): Uint8Array;
            toProtoMsg(message: _9.Paused): _9.PausedProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _8.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _8.Params;
            fromPartial(_: Partial<_8.Params>): _8.Params;
            fromAmino(_: _8.ParamsAmino): _8.Params;
            toAmino(_: _8.Params): _8.ParamsAmino;
            fromAminoMsg(object: _8.ParamsAminoMsg): _8.Params;
            fromProtoMsg(message: _8.ParamsProtoMsg): _8.Params;
            toProto(message: _8.Params): Uint8Array;
            toProtoMsg(message: _8.Params): _8.ParamsProtoMsg;
        };
        Owner: {
            typeUrl: string;
            encode(message: _7.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.Owner;
            fromPartial(object: Partial<_7.Owner>): _7.Owner;
            fromAmino(object: _7.OwnerAmino): _7.Owner;
            toAmino(message: _7.Owner): _7.OwnerAmino;
            fromAminoMsg(object: _7.OwnerAminoMsg): _7.Owner;
            fromProtoMsg(message: _7.OwnerProtoMsg): _7.Owner;
            toProto(message: _7.Owner): Uint8Array;
            toProtoMsg(message: _7.Owner): _7.OwnerProtoMsg;
        };
        MintingDenom: {
            typeUrl: string;
            encode(message: _6.MintingDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.MintingDenom;
            fromPartial(object: Partial<_6.MintingDenom>): _6.MintingDenom;
            fromAmino(object: _6.MintingDenomAmino): _6.MintingDenom;
            toAmino(message: _6.MintingDenom): _6.MintingDenomAmino;
            fromAminoMsg(object: _6.MintingDenomAminoMsg): _6.MintingDenom;
            fromProtoMsg(message: _6.MintingDenomProtoMsg): _6.MintingDenom;
            toProto(message: _6.MintingDenom): Uint8Array;
            toProtoMsg(message: _6.MintingDenom): _6.MintingDenomProtoMsg;
        };
        Minters: {
            typeUrl: string;
            encode(message: _5.Minters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.Minters;
            fromPartial(object: Partial<_5.Minters>): _5.Minters;
            fromAmino(object: _5.MintersAmino): _5.Minters;
            toAmino(message: _5.Minters): _5.MintersAmino;
            fromAminoMsg(object: _5.MintersAminoMsg): _5.Minters;
            fromProtoMsg(message: _5.MintersProtoMsg): _5.Minters;
            toProto(message: _5.Minters): Uint8Array;
            toProtoMsg(message: _5.Minters): _5.MintersProtoMsg;
        };
        MinterController: {
            typeUrl: string;
            encode(message: _4.MinterController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MinterController;
            fromPartial(object: Partial<_4.MinterController>): _4.MinterController;
            fromAmino(object: _4.MinterControllerAmino): _4.MinterController;
            toAmino(message: _4.MinterController): _4.MinterControllerAmino;
            fromAminoMsg(object: _4.MinterControllerAminoMsg): _4.MinterController;
            fromProtoMsg(message: _4.MinterControllerProtoMsg): _4.MinterController;
            toProto(message: _4.MinterController): Uint8Array;
            toProtoMsg(message: _4.MinterController): _4.MinterControllerProtoMsg;
        };
        MasterMinter: {
            typeUrl: string;
            encode(message: _3.MasterMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.MasterMinter;
            fromPartial(object: Partial<_3.MasterMinter>): _3.MasterMinter;
            fromAmino(object: _3.MasterMinterAmino): _3.MasterMinter;
            toAmino(message: _3.MasterMinter): _3.MasterMinterAmino;
            fromAminoMsg(object: _3.MasterMinterAminoMsg): _3.MasterMinter;
            fromProtoMsg(message: _3.MasterMinterProtoMsg): _3.MasterMinter;
            toProto(message: _3.MasterMinter): Uint8Array;
            toProtoMsg(message: _3.MasterMinter): _3.MasterMinterProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _2.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _2.GenesisState;
            fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
            fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
            toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
            fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
            fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
            toProto(message: _2.GenesisState): Uint8Array;
            toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
        };
        Blacklister: {
            typeUrl: string;
            encode(message: _1.Blacklister, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.Blacklister;
            fromPartial(object: Partial<_1.Blacklister>): _1.Blacklister;
            fromAmino(object: _1.BlacklisterAmino): _1.Blacklister;
            toAmino(message: _1.Blacklister): _1.BlacklisterAmino;
            fromAminoMsg(object: _1.BlacklisterAminoMsg): _1.Blacklister;
            fromProtoMsg(message: _1.BlacklisterProtoMsg): _1.Blacklister;
            toProto(message: _1.Blacklister): Uint8Array;
            toProtoMsg(message: _1.Blacklister): _1.BlacklisterProtoMsg;
        };
        Blacklisted: {
            typeUrl: string;
            encode(message: _0.Blacklisted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.Blacklisted;
            fromPartial(object: Partial<_0.Blacklisted>): _0.Blacklisted;
            fromAmino(object: _0.BlacklistedAmino): _0.Blacklisted;
            toAmino(message: _0.Blacklisted): _0.BlacklistedAmino;
            fromAminoMsg(object: _0.BlacklistedAminoMsg): _0.Blacklisted;
            fromProtoMsg(message: _0.BlacklistedProtoMsg): _0.Blacklisted;
            toProto(message: _0.Blacklisted): Uint8Array;
            toProtoMsg(message: _0.Blacklisted): _0.BlacklistedProtoMsg;
        };
    };
    const globalfee: {
        QueryClientImpl: typeof _141.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _14.QueryParamsRequest): Promise<_13.Params>;
        };
        LCDQueryClient: typeof _138.LCDQueryClient;
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _14.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _14.QueryParamsRequest;
            fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
            fromAmino(_: _14.QueryParamsRequestAmino): _14.QueryParamsRequest;
            toAmino(_: _14.QueryParamsRequest): _14.QueryParamsRequestAmino;
            fromAminoMsg(object: _14.QueryParamsRequestAminoMsg): _14.QueryParamsRequest;
            fromProtoMsg(message: _14.QueryParamsRequestProtoMsg): _14.QueryParamsRequest;
            toProto(message: _14.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _13.GenesisState;
            fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
            fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
            toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
            fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
            fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
            toProto(message: _13.GenesisState): Uint8Array;
            toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _13.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _13.Params;
            fromPartial(object: Partial<_13.Params>): _13.Params;
            fromAmino(object: _13.ParamsAmino): _13.Params;
            toAmino(message: _13.Params): _13.ParamsAmino;
            fromAminoMsg(object: _13.ParamsAminoMsg): _13.Params;
            fromProtoMsg(message: _13.ParamsProtoMsg): _13.Params;
            toProto(message: _13.Params): Uint8Array;
            toProtoMsg(message: _13.Params): _13.ParamsProtoMsg;
        };
    };
    const tariff: {
        Params: {
            typeUrl: string;
            encode(message: _16.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _16.Params;
            fromPartial(object: Partial<_16.Params>): _16.Params;
            fromAmino(object: _16.ParamsAmino): _16.Params;
            toAmino(message: _16.Params): _16.ParamsAmino;
            fromAminoMsg(object: _16.ParamsAminoMsg): _16.Params;
            fromProtoMsg(message: _16.ParamsProtoMsg): _16.Params;
            toProto(message: _16.Params): Uint8Array;
            toProtoMsg(message: _16.Params): _16.ParamsProtoMsg;
        };
        DistributionEntity: {
            typeUrl: string;
            encode(message: _16.DistributionEntity, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _16.DistributionEntity;
            fromPartial(object: Partial<_16.DistributionEntity>): _16.DistributionEntity;
            fromAmino(object: _16.DistributionEntityAmino): _16.DistributionEntity;
            toAmino(message: _16.DistributionEntity): _16.DistributionEntityAmino;
            fromAminoMsg(object: _16.DistributionEntityAminoMsg): _16.DistributionEntity;
            fromProtoMsg(message: _16.DistributionEntityProtoMsg): _16.DistributionEntity;
            toProto(message: _16.DistributionEntity): Uint8Array;
            toProtoMsg(message: _16.DistributionEntity): _16.DistributionEntityProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _15.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _15.GenesisState;
            fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
            fromAmino(object: _15.GenesisStateAmino): _15.GenesisState;
            toAmino(message: _15.GenesisState): _15.GenesisStateAmino;
            fromAminoMsg(object: _15.GenesisStateAminoMsg): _15.GenesisState;
            fromProtoMsg(message: _15.GenesisStateProtoMsg): _15.GenesisState;
            toProto(message: _15.GenesisState): Uint8Array;
            toProtoMsg(message: _15.GenesisState): _15.GenesisStateProtoMsg;
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
                toAmino: (message: _29.MsgUpdateMasterMinter) => _29.MsgUpdateMasterMinterAmino;
                fromAmino: (object: _29.MsgUpdateMasterMinterAmino) => _29.MsgUpdateMasterMinter;
            };
            "/noble.tokenfactory.MsgUpdatePauser": {
                aminoType: string;
                toAmino: (message: _29.MsgUpdatePauser) => _29.MsgUpdatePauserAmino;
                fromAmino: (object: _29.MsgUpdatePauserAmino) => _29.MsgUpdatePauser;
            };
            "/noble.tokenfactory.MsgUpdateBlacklister": {
                aminoType: string;
                toAmino: (message: _29.MsgUpdateBlacklister) => _29.MsgUpdateBlacklisterAmino;
                fromAmino: (object: _29.MsgUpdateBlacklisterAmino) => _29.MsgUpdateBlacklister;
            };
            "/noble.tokenfactory.MsgUpdateOwner": {
                aminoType: string;
                toAmino: (message: _29.MsgUpdateOwner) => _29.MsgUpdateOwnerAmino;
                fromAmino: (object: _29.MsgUpdateOwnerAmino) => _29.MsgUpdateOwner;
            };
            "/noble.tokenfactory.MsgAcceptOwner": {
                aminoType: string;
                toAmino: (message: _29.MsgAcceptOwner) => _29.MsgAcceptOwnerAmino;
                fromAmino: (object: _29.MsgAcceptOwnerAmino) => _29.MsgAcceptOwner;
            };
            "/noble.tokenfactory.MsgConfigureMinter": {
                aminoType: string;
                toAmino: (message: _29.MsgConfigureMinter) => _29.MsgConfigureMinterAmino;
                fromAmino: (object: _29.MsgConfigureMinterAmino) => _29.MsgConfigureMinter;
            };
            "/noble.tokenfactory.MsgRemoveMinter": {
                aminoType: string;
                toAmino: (message: _29.MsgRemoveMinter) => _29.MsgRemoveMinterAmino;
                fromAmino: (object: _29.MsgRemoveMinterAmino) => _29.MsgRemoveMinter;
            };
            "/noble.tokenfactory.MsgMint": {
                aminoType: string;
                toAmino: (message: _29.MsgMint) => _29.MsgMintAmino;
                fromAmino: (object: _29.MsgMintAmino) => _29.MsgMint;
            };
            "/noble.tokenfactory.MsgBurn": {
                aminoType: string;
                toAmino: (message: _29.MsgBurn) => _29.MsgBurnAmino;
                fromAmino: (object: _29.MsgBurnAmino) => _29.MsgBurn;
            };
            "/noble.tokenfactory.MsgBlacklist": {
                aminoType: string;
                toAmino: (message: _29.MsgBlacklist) => _29.MsgBlacklistAmino;
                fromAmino: (object: _29.MsgBlacklistAmino) => _29.MsgBlacklist;
            };
            "/noble.tokenfactory.MsgUnblacklist": {
                aminoType: string;
                toAmino: (message: _29.MsgUnblacklist) => _29.MsgUnblacklistAmino;
                fromAmino: (object: _29.MsgUnblacklistAmino) => _29.MsgUnblacklist;
            };
            "/noble.tokenfactory.MsgPause": {
                aminoType: string;
                toAmino: (message: _29.MsgPause) => _29.MsgPauseAmino;
                fromAmino: (object: _29.MsgPauseAmino) => _29.MsgPause;
            };
            "/noble.tokenfactory.MsgUnpause": {
                aminoType: string;
                toAmino: (message: _29.MsgUnpause) => _29.MsgUnpauseAmino;
                fromAmino: (object: _29.MsgUnpauseAmino) => _29.MsgUnpause;
            };
            "/noble.tokenfactory.MsgConfigureMinterController": {
                aminoType: string;
                toAmino: (message: _29.MsgConfigureMinterController) => _29.MsgConfigureMinterControllerAmino;
                fromAmino: (object: _29.MsgConfigureMinterControllerAmino) => _29.MsgConfigureMinterController;
            };
            "/noble.tokenfactory.MsgRemoveMinterController": {
                aminoType: string;
                toAmino: (message: _29.MsgRemoveMinterController) => _29.MsgRemoveMinterControllerAmino;
                fromAmino: (object: _29.MsgRemoveMinterControllerAmino) => _29.MsgRemoveMinterController;
            };
        };
        MsgUpdateMasterMinter: {
            typeUrl: string;
            encode(message: _29.MsgUpdateMasterMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgUpdateMasterMinter;
            fromPartial(object: Partial<_29.MsgUpdateMasterMinter>): _29.MsgUpdateMasterMinter;
            fromAmino(object: _29.MsgUpdateMasterMinterAmino): _29.MsgUpdateMasterMinter;
            toAmino(message: _29.MsgUpdateMasterMinter): _29.MsgUpdateMasterMinterAmino;
            fromAminoMsg(object: _29.MsgUpdateMasterMinterAminoMsg): _29.MsgUpdateMasterMinter;
            fromProtoMsg(message: _29.MsgUpdateMasterMinterProtoMsg): _29.MsgUpdateMasterMinter;
            toProto(message: _29.MsgUpdateMasterMinter): Uint8Array;
            toProtoMsg(message: _29.MsgUpdateMasterMinter): _29.MsgUpdateMasterMinterProtoMsg;
        };
        MsgUpdateMasterMinterResponse: {
            typeUrl: string;
            encode(_: _29.MsgUpdateMasterMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgUpdateMasterMinterResponse;
            fromPartial(_: Partial<_29.MsgUpdateMasterMinterResponse>): _29.MsgUpdateMasterMinterResponse;
            fromAmino(_: _29.MsgUpdateMasterMinterResponseAmino): _29.MsgUpdateMasterMinterResponse;
            toAmino(_: _29.MsgUpdateMasterMinterResponse): _29.MsgUpdateMasterMinterResponseAmino;
            fromAminoMsg(object: _29.MsgUpdateMasterMinterResponseAminoMsg): _29.MsgUpdateMasterMinterResponse;
            fromProtoMsg(message: _29.MsgUpdateMasterMinterResponseProtoMsg): _29.MsgUpdateMasterMinterResponse;
            toProto(message: _29.MsgUpdateMasterMinterResponse): Uint8Array;
            toProtoMsg(message: _29.MsgUpdateMasterMinterResponse): _29.MsgUpdateMasterMinterResponseProtoMsg;
        };
        MsgUpdatePauser: {
            typeUrl: string;
            encode(message: _29.MsgUpdatePauser, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgUpdatePauser;
            fromPartial(object: Partial<_29.MsgUpdatePauser>): _29.MsgUpdatePauser;
            fromAmino(object: _29.MsgUpdatePauserAmino): _29.MsgUpdatePauser;
            toAmino(message: _29.MsgUpdatePauser): _29.MsgUpdatePauserAmino;
            fromAminoMsg(object: _29.MsgUpdatePauserAminoMsg): _29.MsgUpdatePauser;
            fromProtoMsg(message: _29.MsgUpdatePauserProtoMsg): _29.MsgUpdatePauser;
            toProto(message: _29.MsgUpdatePauser): Uint8Array;
            toProtoMsg(message: _29.MsgUpdatePauser): _29.MsgUpdatePauserProtoMsg;
        };
        MsgUpdatePauserResponse: {
            typeUrl: string;
            encode(_: _29.MsgUpdatePauserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgUpdatePauserResponse;
            fromPartial(_: Partial<_29.MsgUpdatePauserResponse>): _29.MsgUpdatePauserResponse;
            fromAmino(_: _29.MsgUpdatePauserResponseAmino): _29.MsgUpdatePauserResponse;
            toAmino(_: _29.MsgUpdatePauserResponse): _29.MsgUpdatePauserResponseAmino;
            fromAminoMsg(object: _29.MsgUpdatePauserResponseAminoMsg): _29.MsgUpdatePauserResponse;
            fromProtoMsg(message: _29.MsgUpdatePauserResponseProtoMsg): _29.MsgUpdatePauserResponse;
            toProto(message: _29.MsgUpdatePauserResponse): Uint8Array;
            toProtoMsg(message: _29.MsgUpdatePauserResponse): _29.MsgUpdatePauserResponseProtoMsg;
        };
        MsgUpdateBlacklister: {
            typeUrl: string;
            encode(message: _29.MsgUpdateBlacklister, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgUpdateBlacklister;
            fromPartial(object: Partial<_29.MsgUpdateBlacklister>): _29.MsgUpdateBlacklister;
            fromAmino(object: _29.MsgUpdateBlacklisterAmino): _29.MsgUpdateBlacklister;
            toAmino(message: _29.MsgUpdateBlacklister): _29.MsgUpdateBlacklisterAmino;
            fromAminoMsg(object: _29.MsgUpdateBlacklisterAminoMsg): _29.MsgUpdateBlacklister;
            fromProtoMsg(message: _29.MsgUpdateBlacklisterProtoMsg): _29.MsgUpdateBlacklister;
            toProto(message: _29.MsgUpdateBlacklister): Uint8Array;
            toProtoMsg(message: _29.MsgUpdateBlacklister): _29.MsgUpdateBlacklisterProtoMsg;
        };
        MsgUpdateBlacklisterResponse: {
            typeUrl: string;
            encode(_: _29.MsgUpdateBlacklisterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgUpdateBlacklisterResponse;
            fromPartial(_: Partial<_29.MsgUpdateBlacklisterResponse>): _29.MsgUpdateBlacklisterResponse;
            fromAmino(_: _29.MsgUpdateBlacklisterResponseAmino): _29.MsgUpdateBlacklisterResponse;
            toAmino(_: _29.MsgUpdateBlacklisterResponse): _29.MsgUpdateBlacklisterResponseAmino;
            fromAminoMsg(object: _29.MsgUpdateBlacklisterResponseAminoMsg): _29.MsgUpdateBlacklisterResponse;
            fromProtoMsg(message: _29.MsgUpdateBlacklisterResponseProtoMsg): _29.MsgUpdateBlacklisterResponse;
            toProto(message: _29.MsgUpdateBlacklisterResponse): Uint8Array;
            toProtoMsg(message: _29.MsgUpdateBlacklisterResponse): _29.MsgUpdateBlacklisterResponseProtoMsg;
        };
        MsgUpdateOwner: {
            typeUrl: string;
            encode(message: _29.MsgUpdateOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgUpdateOwner;
            fromPartial(object: Partial<_29.MsgUpdateOwner>): _29.MsgUpdateOwner;
            fromAmino(object: _29.MsgUpdateOwnerAmino): _29.MsgUpdateOwner;
            toAmino(message: _29.MsgUpdateOwner): _29.MsgUpdateOwnerAmino;
            fromAminoMsg(object: _29.MsgUpdateOwnerAminoMsg): _29.MsgUpdateOwner;
            fromProtoMsg(message: _29.MsgUpdateOwnerProtoMsg): _29.MsgUpdateOwner;
            toProto(message: _29.MsgUpdateOwner): Uint8Array;
            toProtoMsg(message: _29.MsgUpdateOwner): _29.MsgUpdateOwnerProtoMsg;
        };
        MsgUpdateOwnerResponse: {
            typeUrl: string;
            encode(_: _29.MsgUpdateOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgUpdateOwnerResponse;
            fromPartial(_: Partial<_29.MsgUpdateOwnerResponse>): _29.MsgUpdateOwnerResponse;
            fromAmino(_: _29.MsgUpdateOwnerResponseAmino): _29.MsgUpdateOwnerResponse;
            toAmino(_: _29.MsgUpdateOwnerResponse): _29.MsgUpdateOwnerResponseAmino;
            fromAminoMsg(object: _29.MsgUpdateOwnerResponseAminoMsg): _29.MsgUpdateOwnerResponse;
            fromProtoMsg(message: _29.MsgUpdateOwnerResponseProtoMsg): _29.MsgUpdateOwnerResponse;
            toProto(message: _29.MsgUpdateOwnerResponse): Uint8Array;
            toProtoMsg(message: _29.MsgUpdateOwnerResponse): _29.MsgUpdateOwnerResponseProtoMsg;
        };
        MsgAcceptOwner: {
            typeUrl: string;
            encode(message: _29.MsgAcceptOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgAcceptOwner;
            fromPartial(object: Partial<_29.MsgAcceptOwner>): _29.MsgAcceptOwner;
            fromAmino(object: _29.MsgAcceptOwnerAmino): _29.MsgAcceptOwner;
            toAmino(message: _29.MsgAcceptOwner): _29.MsgAcceptOwnerAmino;
            fromAminoMsg(object: _29.MsgAcceptOwnerAminoMsg): _29.MsgAcceptOwner;
            fromProtoMsg(message: _29.MsgAcceptOwnerProtoMsg): _29.MsgAcceptOwner;
            toProto(message: _29.MsgAcceptOwner): Uint8Array;
            toProtoMsg(message: _29.MsgAcceptOwner): _29.MsgAcceptOwnerProtoMsg;
        };
        MsgAcceptOwnerResponse: {
            typeUrl: string;
            encode(_: _29.MsgAcceptOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgAcceptOwnerResponse;
            fromPartial(_: Partial<_29.MsgAcceptOwnerResponse>): _29.MsgAcceptOwnerResponse;
            fromAmino(_: _29.MsgAcceptOwnerResponseAmino): _29.MsgAcceptOwnerResponse;
            toAmino(_: _29.MsgAcceptOwnerResponse): _29.MsgAcceptOwnerResponseAmino;
            fromAminoMsg(object: _29.MsgAcceptOwnerResponseAminoMsg): _29.MsgAcceptOwnerResponse;
            fromProtoMsg(message: _29.MsgAcceptOwnerResponseProtoMsg): _29.MsgAcceptOwnerResponse;
            toProto(message: _29.MsgAcceptOwnerResponse): Uint8Array;
            toProtoMsg(message: _29.MsgAcceptOwnerResponse): _29.MsgAcceptOwnerResponseProtoMsg;
        };
        MsgConfigureMinter: {
            typeUrl: string;
            encode(message: _29.MsgConfigureMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgConfigureMinter;
            fromPartial(object: Partial<_29.MsgConfigureMinter>): _29.MsgConfigureMinter;
            fromAmino(object: _29.MsgConfigureMinterAmino): _29.MsgConfigureMinter;
            toAmino(message: _29.MsgConfigureMinter): _29.MsgConfigureMinterAmino;
            fromAminoMsg(object: _29.MsgConfigureMinterAminoMsg): _29.MsgConfigureMinter;
            fromProtoMsg(message: _29.MsgConfigureMinterProtoMsg): _29.MsgConfigureMinter;
            toProto(message: _29.MsgConfigureMinter): Uint8Array;
            toProtoMsg(message: _29.MsgConfigureMinter): _29.MsgConfigureMinterProtoMsg;
        };
        MsgConfigureMinterResponse: {
            typeUrl: string;
            encode(_: _29.MsgConfigureMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgConfigureMinterResponse;
            fromPartial(_: Partial<_29.MsgConfigureMinterResponse>): _29.MsgConfigureMinterResponse;
            fromAmino(_: _29.MsgConfigureMinterResponseAmino): _29.MsgConfigureMinterResponse;
            toAmino(_: _29.MsgConfigureMinterResponse): _29.MsgConfigureMinterResponseAmino;
            fromAminoMsg(object: _29.MsgConfigureMinterResponseAminoMsg): _29.MsgConfigureMinterResponse;
            fromProtoMsg(message: _29.MsgConfigureMinterResponseProtoMsg): _29.MsgConfigureMinterResponse;
            toProto(message: _29.MsgConfigureMinterResponse): Uint8Array;
            toProtoMsg(message: _29.MsgConfigureMinterResponse): _29.MsgConfigureMinterResponseProtoMsg;
        };
        MsgRemoveMinter: {
            typeUrl: string;
            encode(message: _29.MsgRemoveMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgRemoveMinter;
            fromPartial(object: Partial<_29.MsgRemoveMinter>): _29.MsgRemoveMinter;
            fromAmino(object: _29.MsgRemoveMinterAmino): _29.MsgRemoveMinter;
            toAmino(message: _29.MsgRemoveMinter): _29.MsgRemoveMinterAmino;
            fromAminoMsg(object: _29.MsgRemoveMinterAminoMsg): _29.MsgRemoveMinter;
            fromProtoMsg(message: _29.MsgRemoveMinterProtoMsg): _29.MsgRemoveMinter;
            toProto(message: _29.MsgRemoveMinter): Uint8Array;
            toProtoMsg(message: _29.MsgRemoveMinter): _29.MsgRemoveMinterProtoMsg;
        };
        MsgRemoveMinterResponse: {
            typeUrl: string;
            encode(_: _29.MsgRemoveMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgRemoveMinterResponse;
            fromPartial(_: Partial<_29.MsgRemoveMinterResponse>): _29.MsgRemoveMinterResponse;
            fromAmino(_: _29.MsgRemoveMinterResponseAmino): _29.MsgRemoveMinterResponse;
            toAmino(_: _29.MsgRemoveMinterResponse): _29.MsgRemoveMinterResponseAmino;
            fromAminoMsg(object: _29.MsgRemoveMinterResponseAminoMsg): _29.MsgRemoveMinterResponse;
            fromProtoMsg(message: _29.MsgRemoveMinterResponseProtoMsg): _29.MsgRemoveMinterResponse;
            toProto(message: _29.MsgRemoveMinterResponse): Uint8Array;
            toProtoMsg(message: _29.MsgRemoveMinterResponse): _29.MsgRemoveMinterResponseProtoMsg;
        };
        MsgMint: {
            typeUrl: string;
            encode(message: _29.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgMint;
            fromPartial(object: Partial<_29.MsgMint>): _29.MsgMint;
            fromAmino(object: _29.MsgMintAmino): _29.MsgMint;
            toAmino(message: _29.MsgMint): _29.MsgMintAmino;
            fromAminoMsg(object: _29.MsgMintAminoMsg): _29.MsgMint;
            fromProtoMsg(message: _29.MsgMintProtoMsg): _29.MsgMint;
            toProto(message: _29.MsgMint): Uint8Array;
            toProtoMsg(message: _29.MsgMint): _29.MsgMintProtoMsg;
        };
        MsgMintResponse: {
            typeUrl: string;
            encode(_: _29.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgMintResponse;
            fromPartial(_: Partial<_29.MsgMintResponse>): _29.MsgMintResponse;
            fromAmino(_: _29.MsgMintResponseAmino): _29.MsgMintResponse;
            toAmino(_: _29.MsgMintResponse): _29.MsgMintResponseAmino;
            fromAminoMsg(object: _29.MsgMintResponseAminoMsg): _29.MsgMintResponse;
            fromProtoMsg(message: _29.MsgMintResponseProtoMsg): _29.MsgMintResponse;
            toProto(message: _29.MsgMintResponse): Uint8Array;
            toProtoMsg(message: _29.MsgMintResponse): _29.MsgMintResponseProtoMsg;
        };
        MsgBurn: {
            typeUrl: string;
            encode(message: _29.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgBurn;
            fromPartial(object: Partial<_29.MsgBurn>): _29.MsgBurn;
            fromAmino(object: _29.MsgBurnAmino): _29.MsgBurn;
            toAmino(message: _29.MsgBurn): _29.MsgBurnAmino;
            fromAminoMsg(object: _29.MsgBurnAminoMsg): _29.MsgBurn;
            fromProtoMsg(message: _29.MsgBurnProtoMsg): _29.MsgBurn;
            toProto(message: _29.MsgBurn): Uint8Array;
            toProtoMsg(message: _29.MsgBurn): _29.MsgBurnProtoMsg;
        };
        MsgBurnResponse: {
            typeUrl: string;
            encode(_: _29.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgBurnResponse;
            fromPartial(_: Partial<_29.MsgBurnResponse>): _29.MsgBurnResponse;
            fromAmino(_: _29.MsgBurnResponseAmino): _29.MsgBurnResponse;
            toAmino(_: _29.MsgBurnResponse): _29.MsgBurnResponseAmino;
            fromAminoMsg(object: _29.MsgBurnResponseAminoMsg): _29.MsgBurnResponse;
            fromProtoMsg(message: _29.MsgBurnResponseProtoMsg): _29.MsgBurnResponse;
            toProto(message: _29.MsgBurnResponse): Uint8Array;
            toProtoMsg(message: _29.MsgBurnResponse): _29.MsgBurnResponseProtoMsg;
        };
        MsgBlacklist: {
            typeUrl: string;
            encode(message: _29.MsgBlacklist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgBlacklist;
            fromPartial(object: Partial<_29.MsgBlacklist>): _29.MsgBlacklist;
            fromAmino(object: _29.MsgBlacklistAmino): _29.MsgBlacklist;
            toAmino(message: _29.MsgBlacklist): _29.MsgBlacklistAmino;
            fromAminoMsg(object: _29.MsgBlacklistAminoMsg): _29.MsgBlacklist;
            fromProtoMsg(message: _29.MsgBlacklistProtoMsg): _29.MsgBlacklist;
            toProto(message: _29.MsgBlacklist): Uint8Array;
            toProtoMsg(message: _29.MsgBlacklist): _29.MsgBlacklistProtoMsg;
        };
        MsgBlacklistResponse: {
            typeUrl: string;
            encode(_: _29.MsgBlacklistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgBlacklistResponse;
            fromPartial(_: Partial<_29.MsgBlacklistResponse>): _29.MsgBlacklistResponse;
            fromAmino(_: _29.MsgBlacklistResponseAmino): _29.MsgBlacklistResponse;
            toAmino(_: _29.MsgBlacklistResponse): _29.MsgBlacklistResponseAmino;
            fromAminoMsg(object: _29.MsgBlacklistResponseAminoMsg): _29.MsgBlacklistResponse;
            fromProtoMsg(message: _29.MsgBlacklistResponseProtoMsg): _29.MsgBlacklistResponse;
            toProto(message: _29.MsgBlacklistResponse): Uint8Array;
            toProtoMsg(message: _29.MsgBlacklistResponse): _29.MsgBlacklistResponseProtoMsg;
        };
        MsgUnblacklist: {
            typeUrl: string;
            encode(message: _29.MsgUnblacklist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgUnblacklist;
            fromPartial(object: Partial<_29.MsgUnblacklist>): _29.MsgUnblacklist;
            fromAmino(object: _29.MsgUnblacklistAmino): _29.MsgUnblacklist;
            toAmino(message: _29.MsgUnblacklist): _29.MsgUnblacklistAmino;
            fromAminoMsg(object: _29.MsgUnblacklistAminoMsg): _29.MsgUnblacklist;
            fromProtoMsg(message: _29.MsgUnblacklistProtoMsg): _29.MsgUnblacklist;
            toProto(message: _29.MsgUnblacklist): Uint8Array;
            toProtoMsg(message: _29.MsgUnblacklist): _29.MsgUnblacklistProtoMsg;
        };
        MsgUnblacklistResponse: {
            typeUrl: string;
            encode(_: _29.MsgUnblacklistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgUnblacklistResponse;
            fromPartial(_: Partial<_29.MsgUnblacklistResponse>): _29.MsgUnblacklistResponse;
            fromAmino(_: _29.MsgUnblacklistResponseAmino): _29.MsgUnblacklistResponse;
            toAmino(_: _29.MsgUnblacklistResponse): _29.MsgUnblacklistResponseAmino;
            fromAminoMsg(object: _29.MsgUnblacklistResponseAminoMsg): _29.MsgUnblacklistResponse;
            fromProtoMsg(message: _29.MsgUnblacklistResponseProtoMsg): _29.MsgUnblacklistResponse;
            toProto(message: _29.MsgUnblacklistResponse): Uint8Array;
            toProtoMsg(message: _29.MsgUnblacklistResponse): _29.MsgUnblacklistResponseProtoMsg;
        };
        MsgPause: {
            typeUrl: string;
            encode(message: _29.MsgPause, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgPause;
            fromPartial(object: Partial<_29.MsgPause>): _29.MsgPause;
            fromAmino(object: _29.MsgPauseAmino): _29.MsgPause;
            toAmino(message: _29.MsgPause): _29.MsgPauseAmino;
            fromAminoMsg(object: _29.MsgPauseAminoMsg): _29.MsgPause;
            fromProtoMsg(message: _29.MsgPauseProtoMsg): _29.MsgPause;
            toProto(message: _29.MsgPause): Uint8Array;
            toProtoMsg(message: _29.MsgPause): _29.MsgPauseProtoMsg;
        };
        MsgPauseResponse: {
            typeUrl: string;
            encode(_: _29.MsgPauseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgPauseResponse;
            fromPartial(_: Partial<_29.MsgPauseResponse>): _29.MsgPauseResponse;
            fromAmino(_: _29.MsgPauseResponseAmino): _29.MsgPauseResponse;
            toAmino(_: _29.MsgPauseResponse): _29.MsgPauseResponseAmino;
            fromAminoMsg(object: _29.MsgPauseResponseAminoMsg): _29.MsgPauseResponse;
            fromProtoMsg(message: _29.MsgPauseResponseProtoMsg): _29.MsgPauseResponse;
            toProto(message: _29.MsgPauseResponse): Uint8Array;
            toProtoMsg(message: _29.MsgPauseResponse): _29.MsgPauseResponseProtoMsg;
        };
        MsgUnpause: {
            typeUrl: string;
            encode(message: _29.MsgUnpause, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgUnpause;
            fromPartial(object: Partial<_29.MsgUnpause>): _29.MsgUnpause;
            fromAmino(object: _29.MsgUnpauseAmino): _29.MsgUnpause;
            toAmino(message: _29.MsgUnpause): _29.MsgUnpauseAmino;
            fromAminoMsg(object: _29.MsgUnpauseAminoMsg): _29.MsgUnpause;
            fromProtoMsg(message: _29.MsgUnpauseProtoMsg): _29.MsgUnpause;
            toProto(message: _29.MsgUnpause): Uint8Array;
            toProtoMsg(message: _29.MsgUnpause): _29.MsgUnpauseProtoMsg;
        };
        MsgUnpauseResponse: {
            typeUrl: string;
            encode(_: _29.MsgUnpauseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgUnpauseResponse;
            fromPartial(_: Partial<_29.MsgUnpauseResponse>): _29.MsgUnpauseResponse;
            fromAmino(_: _29.MsgUnpauseResponseAmino): _29.MsgUnpauseResponse;
            toAmino(_: _29.MsgUnpauseResponse): _29.MsgUnpauseResponseAmino;
            fromAminoMsg(object: _29.MsgUnpauseResponseAminoMsg): _29.MsgUnpauseResponse;
            fromProtoMsg(message: _29.MsgUnpauseResponseProtoMsg): _29.MsgUnpauseResponse;
            toProto(message: _29.MsgUnpauseResponse): Uint8Array;
            toProtoMsg(message: _29.MsgUnpauseResponse): _29.MsgUnpauseResponseProtoMsg;
        };
        MsgConfigureMinterController: {
            typeUrl: string;
            encode(message: _29.MsgConfigureMinterController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgConfigureMinterController;
            fromPartial(object: Partial<_29.MsgConfigureMinterController>): _29.MsgConfigureMinterController;
            fromAmino(object: _29.MsgConfigureMinterControllerAmino): _29.MsgConfigureMinterController;
            toAmino(message: _29.MsgConfigureMinterController): _29.MsgConfigureMinterControllerAmino;
            fromAminoMsg(object: _29.MsgConfigureMinterControllerAminoMsg): _29.MsgConfigureMinterController;
            fromProtoMsg(message: _29.MsgConfigureMinterControllerProtoMsg): _29.MsgConfigureMinterController;
            toProto(message: _29.MsgConfigureMinterController): Uint8Array;
            toProtoMsg(message: _29.MsgConfigureMinterController): _29.MsgConfigureMinterControllerProtoMsg;
        };
        MsgConfigureMinterControllerResponse: {
            typeUrl: string;
            encode(_: _29.MsgConfigureMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgConfigureMinterControllerResponse;
            fromPartial(_: Partial<_29.MsgConfigureMinterControllerResponse>): _29.MsgConfigureMinterControllerResponse;
            fromAmino(_: _29.MsgConfigureMinterControllerResponseAmino): _29.MsgConfigureMinterControllerResponse;
            toAmino(_: _29.MsgConfigureMinterControllerResponse): _29.MsgConfigureMinterControllerResponseAmino;
            fromAminoMsg(object: _29.MsgConfigureMinterControllerResponseAminoMsg): _29.MsgConfigureMinterControllerResponse;
            fromProtoMsg(message: _29.MsgConfigureMinterControllerResponseProtoMsg): _29.MsgConfigureMinterControllerResponse;
            toProto(message: _29.MsgConfigureMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _29.MsgConfigureMinterControllerResponse): _29.MsgConfigureMinterControllerResponseProtoMsg;
        };
        MsgRemoveMinterController: {
            typeUrl: string;
            encode(message: _29.MsgRemoveMinterController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.MsgRemoveMinterController;
            fromPartial(object: Partial<_29.MsgRemoveMinterController>): _29.MsgRemoveMinterController;
            fromAmino(object: _29.MsgRemoveMinterControllerAmino): _29.MsgRemoveMinterController;
            toAmino(message: _29.MsgRemoveMinterController): _29.MsgRemoveMinterControllerAmino;
            fromAminoMsg(object: _29.MsgRemoveMinterControllerAminoMsg): _29.MsgRemoveMinterController;
            fromProtoMsg(message: _29.MsgRemoveMinterControllerProtoMsg): _29.MsgRemoveMinterController;
            toProto(message: _29.MsgRemoveMinterController): Uint8Array;
            toProtoMsg(message: _29.MsgRemoveMinterController): _29.MsgRemoveMinterControllerProtoMsg;
        };
        MsgRemoveMinterControllerResponse: {
            typeUrl: string;
            encode(_: _29.MsgRemoveMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.MsgRemoveMinterControllerResponse;
            fromPartial(_: Partial<_29.MsgRemoveMinterControllerResponse>): _29.MsgRemoveMinterControllerResponse;
            fromAmino(_: _29.MsgRemoveMinterControllerResponseAmino): _29.MsgRemoveMinterControllerResponse;
            toAmino(_: _29.MsgRemoveMinterControllerResponse): _29.MsgRemoveMinterControllerResponseAmino;
            fromAminoMsg(object: _29.MsgRemoveMinterControllerResponseAminoMsg): _29.MsgRemoveMinterControllerResponse;
            fromProtoMsg(message: _29.MsgRemoveMinterControllerResponseProtoMsg): _29.MsgRemoveMinterControllerResponse;
            toProto(message: _29.MsgRemoveMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _29.MsgRemoveMinterControllerResponse): _29.MsgRemoveMinterControllerResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _28.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _28.QueryParamsRequest;
            fromPartial(_: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
            fromAmino(_: _28.QueryParamsRequestAmino): _28.QueryParamsRequest;
            toAmino(_: _28.QueryParamsRequest): _28.QueryParamsRequestAmino;
            fromAminoMsg(object: _28.QueryParamsRequestAminoMsg): _28.QueryParamsRequest;
            fromProtoMsg(message: _28.QueryParamsRequestProtoMsg): _28.QueryParamsRequest;
            toProto(message: _28.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _28.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryParamsResponse;
            fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
            fromAmino(object: _28.QueryParamsResponseAmino): _28.QueryParamsResponse;
            toAmino(message: _28.QueryParamsResponse): _28.QueryParamsResponseAmino;
            fromAminoMsg(object: _28.QueryParamsResponseAminoMsg): _28.QueryParamsResponse;
            fromProtoMsg(message: _28.QueryParamsResponseProtoMsg): _28.QueryParamsResponse;
            toProto(message: _28.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseProtoMsg;
        };
        QueryGetBlacklistedRequest: {
            typeUrl: string;
            encode(message: _28.QueryGetBlacklistedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetBlacklistedRequest;
            fromPartial(object: Partial<_28.QueryGetBlacklistedRequest>): _28.QueryGetBlacklistedRequest;
            fromAmino(object: _28.QueryGetBlacklistedRequestAmino): _28.QueryGetBlacklistedRequest;
            toAmino(message: _28.QueryGetBlacklistedRequest): _28.QueryGetBlacklistedRequestAmino;
            fromAminoMsg(object: _28.QueryGetBlacklistedRequestAminoMsg): _28.QueryGetBlacklistedRequest;
            fromProtoMsg(message: _28.QueryGetBlacklistedRequestProtoMsg): _28.QueryGetBlacklistedRequest;
            toProto(message: _28.QueryGetBlacklistedRequest): Uint8Array;
            toProtoMsg(message: _28.QueryGetBlacklistedRequest): _28.QueryGetBlacklistedRequestProtoMsg;
        };
        QueryGetBlacklistedResponse: {
            typeUrl: string;
            encode(message: _28.QueryGetBlacklistedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetBlacklistedResponse;
            fromPartial(object: Partial<_28.QueryGetBlacklistedResponse>): _28.QueryGetBlacklistedResponse;
            fromAmino(object: _28.QueryGetBlacklistedResponseAmino): _28.QueryGetBlacklistedResponse;
            toAmino(message: _28.QueryGetBlacklistedResponse): _28.QueryGetBlacklistedResponseAmino;
            fromAminoMsg(object: _28.QueryGetBlacklistedResponseAminoMsg): _28.QueryGetBlacklistedResponse;
            fromProtoMsg(message: _28.QueryGetBlacklistedResponseProtoMsg): _28.QueryGetBlacklistedResponse;
            toProto(message: _28.QueryGetBlacklistedResponse): Uint8Array;
            toProtoMsg(message: _28.QueryGetBlacklistedResponse): _28.QueryGetBlacklistedResponseProtoMsg;
        };
        QueryAllBlacklistedRequest: {
            typeUrl: string;
            encode(message: _28.QueryAllBlacklistedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryAllBlacklistedRequest;
            fromPartial(object: Partial<_28.QueryAllBlacklistedRequest>): _28.QueryAllBlacklistedRequest;
            fromAmino(object: _28.QueryAllBlacklistedRequestAmino): _28.QueryAllBlacklistedRequest;
            toAmino(message: _28.QueryAllBlacklistedRequest): _28.QueryAllBlacklistedRequestAmino;
            fromAminoMsg(object: _28.QueryAllBlacklistedRequestAminoMsg): _28.QueryAllBlacklistedRequest;
            fromProtoMsg(message: _28.QueryAllBlacklistedRequestProtoMsg): _28.QueryAllBlacklistedRequest;
            toProto(message: _28.QueryAllBlacklistedRequest): Uint8Array;
            toProtoMsg(message: _28.QueryAllBlacklistedRequest): _28.QueryAllBlacklistedRequestProtoMsg;
        };
        QueryAllBlacklistedResponse: {
            typeUrl: string;
            encode(message: _28.QueryAllBlacklistedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryAllBlacklistedResponse;
            fromPartial(object: Partial<_28.QueryAllBlacklistedResponse>): _28.QueryAllBlacklistedResponse;
            fromAmino(object: _28.QueryAllBlacklistedResponseAmino): _28.QueryAllBlacklistedResponse;
            toAmino(message: _28.QueryAllBlacklistedResponse): _28.QueryAllBlacklistedResponseAmino;
            fromAminoMsg(object: _28.QueryAllBlacklistedResponseAminoMsg): _28.QueryAllBlacklistedResponse;
            fromProtoMsg(message: _28.QueryAllBlacklistedResponseProtoMsg): _28.QueryAllBlacklistedResponse;
            toProto(message: _28.QueryAllBlacklistedResponse): Uint8Array;
            toProtoMsg(message: _28.QueryAllBlacklistedResponse): _28.QueryAllBlacklistedResponseProtoMsg;
        };
        QueryGetPausedRequest: {
            typeUrl: string;
            encode(_: _28.QueryGetPausedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _28.QueryGetPausedRequest;
            fromPartial(_: Partial<_28.QueryGetPausedRequest>): _28.QueryGetPausedRequest;
            fromAmino(_: _28.QueryGetPausedRequestAmino): _28.QueryGetPausedRequest;
            toAmino(_: _28.QueryGetPausedRequest): _28.QueryGetPausedRequestAmino;
            fromAminoMsg(object: _28.QueryGetPausedRequestAminoMsg): _28.QueryGetPausedRequest;
            fromProtoMsg(message: _28.QueryGetPausedRequestProtoMsg): _28.QueryGetPausedRequest;
            toProto(message: _28.QueryGetPausedRequest): Uint8Array;
            toProtoMsg(message: _28.QueryGetPausedRequest): _28.QueryGetPausedRequestProtoMsg;
        };
        QueryGetPausedResponse: {
            typeUrl: string;
            encode(message: _28.QueryGetPausedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetPausedResponse;
            fromPartial(object: Partial<_28.QueryGetPausedResponse>): _28.QueryGetPausedResponse;
            fromAmino(object: _28.QueryGetPausedResponseAmino): _28.QueryGetPausedResponse;
            toAmino(message: _28.QueryGetPausedResponse): _28.QueryGetPausedResponseAmino;
            fromAminoMsg(object: _28.QueryGetPausedResponseAminoMsg): _28.QueryGetPausedResponse;
            fromProtoMsg(message: _28.QueryGetPausedResponseProtoMsg): _28.QueryGetPausedResponse;
            toProto(message: _28.QueryGetPausedResponse): Uint8Array;
            toProtoMsg(message: _28.QueryGetPausedResponse): _28.QueryGetPausedResponseProtoMsg;
        };
        QueryGetMasterMinterRequest: {
            typeUrl: string;
            encode(_: _28.QueryGetMasterMinterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _28.QueryGetMasterMinterRequest;
            fromPartial(_: Partial<_28.QueryGetMasterMinterRequest>): _28.QueryGetMasterMinterRequest;
            fromAmino(_: _28.QueryGetMasterMinterRequestAmino): _28.QueryGetMasterMinterRequest;
            toAmino(_: _28.QueryGetMasterMinterRequest): _28.QueryGetMasterMinterRequestAmino;
            fromAminoMsg(object: _28.QueryGetMasterMinterRequestAminoMsg): _28.QueryGetMasterMinterRequest;
            fromProtoMsg(message: _28.QueryGetMasterMinterRequestProtoMsg): _28.QueryGetMasterMinterRequest;
            toProto(message: _28.QueryGetMasterMinterRequest): Uint8Array;
            toProtoMsg(message: _28.QueryGetMasterMinterRequest): _28.QueryGetMasterMinterRequestProtoMsg;
        };
        QueryGetMasterMinterResponse: {
            typeUrl: string;
            encode(message: _28.QueryGetMasterMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetMasterMinterResponse;
            fromPartial(object: Partial<_28.QueryGetMasterMinterResponse>): _28.QueryGetMasterMinterResponse;
            fromAmino(object: _28.QueryGetMasterMinterResponseAmino): _28.QueryGetMasterMinterResponse;
            toAmino(message: _28.QueryGetMasterMinterResponse): _28.QueryGetMasterMinterResponseAmino;
            fromAminoMsg(object: _28.QueryGetMasterMinterResponseAminoMsg): _28.QueryGetMasterMinterResponse;
            fromProtoMsg(message: _28.QueryGetMasterMinterResponseProtoMsg): _28.QueryGetMasterMinterResponse;
            toProto(message: _28.QueryGetMasterMinterResponse): Uint8Array;
            toProtoMsg(message: _28.QueryGetMasterMinterResponse): _28.QueryGetMasterMinterResponseProtoMsg;
        };
        QueryGetMintersRequest: {
            typeUrl: string;
            encode(message: _28.QueryGetMintersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetMintersRequest;
            fromPartial(object: Partial<_28.QueryGetMintersRequest>): _28.QueryGetMintersRequest;
            fromAmino(object: _28.QueryGetMintersRequestAmino): _28.QueryGetMintersRequest;
            toAmino(message: _28.QueryGetMintersRequest): _28.QueryGetMintersRequestAmino;
            fromAminoMsg(object: _28.QueryGetMintersRequestAminoMsg): _28.QueryGetMintersRequest;
            fromProtoMsg(message: _28.QueryGetMintersRequestProtoMsg): _28.QueryGetMintersRequest;
            toProto(message: _28.QueryGetMintersRequest): Uint8Array;
            toProtoMsg(message: _28.QueryGetMintersRequest): _28.QueryGetMintersRequestProtoMsg;
        };
        QueryGetMintersResponse: {
            typeUrl: string;
            encode(message: _28.QueryGetMintersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetMintersResponse;
            fromPartial(object: Partial<_28.QueryGetMintersResponse>): _28.QueryGetMintersResponse;
            fromAmino(object: _28.QueryGetMintersResponseAmino): _28.QueryGetMintersResponse;
            toAmino(message: _28.QueryGetMintersResponse): _28.QueryGetMintersResponseAmino;
            fromAminoMsg(object: _28.QueryGetMintersResponseAminoMsg): _28.QueryGetMintersResponse;
            fromProtoMsg(message: _28.QueryGetMintersResponseProtoMsg): _28.QueryGetMintersResponse;
            toProto(message: _28.QueryGetMintersResponse): Uint8Array;
            toProtoMsg(message: _28.QueryGetMintersResponse): _28.QueryGetMintersResponseProtoMsg;
        };
        QueryAllMintersRequest: {
            typeUrl: string;
            encode(message: _28.QueryAllMintersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryAllMintersRequest;
            fromPartial(object: Partial<_28.QueryAllMintersRequest>): _28.QueryAllMintersRequest;
            fromAmino(object: _28.QueryAllMintersRequestAmino): _28.QueryAllMintersRequest;
            toAmino(message: _28.QueryAllMintersRequest): _28.QueryAllMintersRequestAmino;
            fromAminoMsg(object: _28.QueryAllMintersRequestAminoMsg): _28.QueryAllMintersRequest;
            fromProtoMsg(message: _28.QueryAllMintersRequestProtoMsg): _28.QueryAllMintersRequest;
            toProto(message: _28.QueryAllMintersRequest): Uint8Array;
            toProtoMsg(message: _28.QueryAllMintersRequest): _28.QueryAllMintersRequestProtoMsg;
        };
        QueryAllMintersResponse: {
            typeUrl: string;
            encode(message: _28.QueryAllMintersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryAllMintersResponse;
            fromPartial(object: Partial<_28.QueryAllMintersResponse>): _28.QueryAllMintersResponse;
            fromAmino(object: _28.QueryAllMintersResponseAmino): _28.QueryAllMintersResponse;
            toAmino(message: _28.QueryAllMintersResponse): _28.QueryAllMintersResponseAmino;
            fromAminoMsg(object: _28.QueryAllMintersResponseAminoMsg): _28.QueryAllMintersResponse;
            fromProtoMsg(message: _28.QueryAllMintersResponseProtoMsg): _28.QueryAllMintersResponse;
            toProto(message: _28.QueryAllMintersResponse): Uint8Array;
            toProtoMsg(message: _28.QueryAllMintersResponse): _28.QueryAllMintersResponseProtoMsg;
        };
        QueryGetPauserRequest: {
            typeUrl: string;
            encode(_: _28.QueryGetPauserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _28.QueryGetPauserRequest;
            fromPartial(_: Partial<_28.QueryGetPauserRequest>): _28.QueryGetPauserRequest;
            fromAmino(_: _28.QueryGetPauserRequestAmino): _28.QueryGetPauserRequest;
            toAmino(_: _28.QueryGetPauserRequest): _28.QueryGetPauserRequestAmino;
            fromAminoMsg(object: _28.QueryGetPauserRequestAminoMsg): _28.QueryGetPauserRequest;
            fromProtoMsg(message: _28.QueryGetPauserRequestProtoMsg): _28.QueryGetPauserRequest;
            toProto(message: _28.QueryGetPauserRequest): Uint8Array;
            toProtoMsg(message: _28.QueryGetPauserRequest): _28.QueryGetPauserRequestProtoMsg;
        };
        QueryGetPauserResponse: {
            typeUrl: string;
            encode(message: _28.QueryGetPauserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetPauserResponse;
            fromPartial(object: Partial<_28.QueryGetPauserResponse>): _28.QueryGetPauserResponse;
            fromAmino(object: _28.QueryGetPauserResponseAmino): _28.QueryGetPauserResponse;
            toAmino(message: _28.QueryGetPauserResponse): _28.QueryGetPauserResponseAmino;
            fromAminoMsg(object: _28.QueryGetPauserResponseAminoMsg): _28.QueryGetPauserResponse;
            fromProtoMsg(message: _28.QueryGetPauserResponseProtoMsg): _28.QueryGetPauserResponse;
            toProto(message: _28.QueryGetPauserResponse): Uint8Array;
            toProtoMsg(message: _28.QueryGetPauserResponse): _28.QueryGetPauserResponseProtoMsg;
        };
        QueryGetBlacklisterRequest: {
            typeUrl: string;
            encode(_: _28.QueryGetBlacklisterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _28.QueryGetBlacklisterRequest;
            fromPartial(_: Partial<_28.QueryGetBlacklisterRequest>): _28.QueryGetBlacklisterRequest;
            fromAmino(_: _28.QueryGetBlacklisterRequestAmino): _28.QueryGetBlacklisterRequest;
            toAmino(_: _28.QueryGetBlacklisterRequest): _28.QueryGetBlacklisterRequestAmino;
            fromAminoMsg(object: _28.QueryGetBlacklisterRequestAminoMsg): _28.QueryGetBlacklisterRequest;
            fromProtoMsg(message: _28.QueryGetBlacklisterRequestProtoMsg): _28.QueryGetBlacklisterRequest;
            toProto(message: _28.QueryGetBlacklisterRequest): Uint8Array;
            toProtoMsg(message: _28.QueryGetBlacklisterRequest): _28.QueryGetBlacklisterRequestProtoMsg;
        };
        QueryGetBlacklisterResponse: {
            typeUrl: string;
            encode(message: _28.QueryGetBlacklisterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetBlacklisterResponse;
            fromPartial(object: Partial<_28.QueryGetBlacklisterResponse>): _28.QueryGetBlacklisterResponse;
            fromAmino(object: _28.QueryGetBlacklisterResponseAmino): _28.QueryGetBlacklisterResponse;
            toAmino(message: _28.QueryGetBlacklisterResponse): _28.QueryGetBlacklisterResponseAmino;
            fromAminoMsg(object: _28.QueryGetBlacklisterResponseAminoMsg): _28.QueryGetBlacklisterResponse;
            fromProtoMsg(message: _28.QueryGetBlacklisterResponseProtoMsg): _28.QueryGetBlacklisterResponse;
            toProto(message: _28.QueryGetBlacklisterResponse): Uint8Array;
            toProtoMsg(message: _28.QueryGetBlacklisterResponse): _28.QueryGetBlacklisterResponseProtoMsg;
        };
        QueryGetOwnerRequest: {
            typeUrl: string;
            encode(_: _28.QueryGetOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _28.QueryGetOwnerRequest;
            fromPartial(_: Partial<_28.QueryGetOwnerRequest>): _28.QueryGetOwnerRequest;
            fromAmino(_: _28.QueryGetOwnerRequestAmino): _28.QueryGetOwnerRequest;
            toAmino(_: _28.QueryGetOwnerRequest): _28.QueryGetOwnerRequestAmino;
            fromAminoMsg(object: _28.QueryGetOwnerRequestAminoMsg): _28.QueryGetOwnerRequest;
            fromProtoMsg(message: _28.QueryGetOwnerRequestProtoMsg): _28.QueryGetOwnerRequest;
            toProto(message: _28.QueryGetOwnerRequest): Uint8Array;
            toProtoMsg(message: _28.QueryGetOwnerRequest): _28.QueryGetOwnerRequestProtoMsg;
        };
        QueryGetOwnerResponse: {
            typeUrl: string;
            encode(message: _28.QueryGetOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetOwnerResponse;
            fromPartial(object: Partial<_28.QueryGetOwnerResponse>): _28.QueryGetOwnerResponse;
            fromAmino(object: _28.QueryGetOwnerResponseAmino): _28.QueryGetOwnerResponse;
            toAmino(message: _28.QueryGetOwnerResponse): _28.QueryGetOwnerResponseAmino;
            fromAminoMsg(object: _28.QueryGetOwnerResponseAminoMsg): _28.QueryGetOwnerResponse;
            fromProtoMsg(message: _28.QueryGetOwnerResponseProtoMsg): _28.QueryGetOwnerResponse;
            toProto(message: _28.QueryGetOwnerResponse): Uint8Array;
            toProtoMsg(message: _28.QueryGetOwnerResponse): _28.QueryGetOwnerResponseProtoMsg;
        };
        QueryGetMinterControllerRequest: {
            typeUrl: string;
            encode(message: _28.QueryGetMinterControllerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetMinterControllerRequest;
            fromPartial(object: Partial<_28.QueryGetMinterControllerRequest>): _28.QueryGetMinterControllerRequest;
            fromAmino(object: _28.QueryGetMinterControllerRequestAmino): _28.QueryGetMinterControllerRequest;
            toAmino(message: _28.QueryGetMinterControllerRequest): _28.QueryGetMinterControllerRequestAmino;
            fromAminoMsg(object: _28.QueryGetMinterControllerRequestAminoMsg): _28.QueryGetMinterControllerRequest;
            fromProtoMsg(message: _28.QueryGetMinterControllerRequestProtoMsg): _28.QueryGetMinterControllerRequest;
            toProto(message: _28.QueryGetMinterControllerRequest): Uint8Array;
            toProtoMsg(message: _28.QueryGetMinterControllerRequest): _28.QueryGetMinterControllerRequestProtoMsg;
        };
        QueryGetMinterControllerResponse: {
            typeUrl: string;
            encode(message: _28.QueryGetMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetMinterControllerResponse;
            fromPartial(object: Partial<_28.QueryGetMinterControllerResponse>): _28.QueryGetMinterControllerResponse;
            fromAmino(object: _28.QueryGetMinterControllerResponseAmino): _28.QueryGetMinterControllerResponse;
            toAmino(message: _28.QueryGetMinterControllerResponse): _28.QueryGetMinterControllerResponseAmino;
            fromAminoMsg(object: _28.QueryGetMinterControllerResponseAminoMsg): _28.QueryGetMinterControllerResponse;
            fromProtoMsg(message: _28.QueryGetMinterControllerResponseProtoMsg): _28.QueryGetMinterControllerResponse;
            toProto(message: _28.QueryGetMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _28.QueryGetMinterControllerResponse): _28.QueryGetMinterControllerResponseProtoMsg;
        };
        QueryAllMinterControllerRequest: {
            typeUrl: string;
            encode(message: _28.QueryAllMinterControllerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryAllMinterControllerRequest;
            fromPartial(object: Partial<_28.QueryAllMinterControllerRequest>): _28.QueryAllMinterControllerRequest;
            fromAmino(object: _28.QueryAllMinterControllerRequestAmino): _28.QueryAllMinterControllerRequest;
            toAmino(message: _28.QueryAllMinterControllerRequest): _28.QueryAllMinterControllerRequestAmino;
            fromAminoMsg(object: _28.QueryAllMinterControllerRequestAminoMsg): _28.QueryAllMinterControllerRequest;
            fromProtoMsg(message: _28.QueryAllMinterControllerRequestProtoMsg): _28.QueryAllMinterControllerRequest;
            toProto(message: _28.QueryAllMinterControllerRequest): Uint8Array;
            toProtoMsg(message: _28.QueryAllMinterControllerRequest): _28.QueryAllMinterControllerRequestProtoMsg;
        };
        QueryAllMinterControllerResponse: {
            typeUrl: string;
            encode(message: _28.QueryAllMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryAllMinterControllerResponse;
            fromPartial(object: Partial<_28.QueryAllMinterControllerResponse>): _28.QueryAllMinterControllerResponse;
            fromAmino(object: _28.QueryAllMinterControllerResponseAmino): _28.QueryAllMinterControllerResponse;
            toAmino(message: _28.QueryAllMinterControllerResponse): _28.QueryAllMinterControllerResponseAmino;
            fromAminoMsg(object: _28.QueryAllMinterControllerResponseAminoMsg): _28.QueryAllMinterControllerResponse;
            fromProtoMsg(message: _28.QueryAllMinterControllerResponseProtoMsg): _28.QueryAllMinterControllerResponse;
            toProto(message: _28.QueryAllMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _28.QueryAllMinterControllerResponse): _28.QueryAllMinterControllerResponseProtoMsg;
        };
        QueryGetMintingDenomRequest: {
            typeUrl: string;
            encode(_: _28.QueryGetMintingDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _28.QueryGetMintingDenomRequest;
            fromPartial(_: Partial<_28.QueryGetMintingDenomRequest>): _28.QueryGetMintingDenomRequest;
            fromAmino(_: _28.QueryGetMintingDenomRequestAmino): _28.QueryGetMintingDenomRequest;
            toAmino(_: _28.QueryGetMintingDenomRequest): _28.QueryGetMintingDenomRequestAmino;
            fromAminoMsg(object: _28.QueryGetMintingDenomRequestAminoMsg): _28.QueryGetMintingDenomRequest;
            fromProtoMsg(message: _28.QueryGetMintingDenomRequestProtoMsg): _28.QueryGetMintingDenomRequest;
            toProto(message: _28.QueryGetMintingDenomRequest): Uint8Array;
            toProtoMsg(message: _28.QueryGetMintingDenomRequest): _28.QueryGetMintingDenomRequestProtoMsg;
        };
        QueryGetMintingDenomResponse: {
            typeUrl: string;
            encode(message: _28.QueryGetMintingDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.QueryGetMintingDenomResponse;
            fromPartial(object: Partial<_28.QueryGetMintingDenomResponse>): _28.QueryGetMintingDenomResponse;
            fromAmino(object: _28.QueryGetMintingDenomResponseAmino): _28.QueryGetMintingDenomResponse;
            toAmino(message: _28.QueryGetMintingDenomResponse): _28.QueryGetMintingDenomResponseAmino;
            fromAminoMsg(object: _28.QueryGetMintingDenomResponseAminoMsg): _28.QueryGetMintingDenomResponse;
            fromProtoMsg(message: _28.QueryGetMintingDenomResponseProtoMsg): _28.QueryGetMintingDenomResponse;
            toProto(message: _28.QueryGetMintingDenomResponse): Uint8Array;
            toProtoMsg(message: _28.QueryGetMintingDenomResponse): _28.QueryGetMintingDenomResponseProtoMsg;
        };
        Pauser: {
            typeUrl: string;
            encode(message: _27.Pauser, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _27.Pauser;
            fromPartial(object: Partial<_27.Pauser>): _27.Pauser;
            fromAmino(object: _27.PauserAmino): _27.Pauser;
            toAmino(message: _27.Pauser): _27.PauserAmino;
            fromAminoMsg(object: _27.PauserAminoMsg): _27.Pauser;
            fromProtoMsg(message: _27.PauserProtoMsg): _27.Pauser;
            toProto(message: _27.Pauser): Uint8Array;
            toProtoMsg(message: _27.Pauser): _27.PauserProtoMsg;
        };
        Paused: {
            typeUrl: string;
            encode(message: _26.Paused, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.Paused;
            fromPartial(object: Partial<_26.Paused>): _26.Paused;
            fromAmino(object: _26.PausedAmino): _26.Paused;
            toAmino(message: _26.Paused): _26.PausedAmino;
            fromAminoMsg(object: _26.PausedAminoMsg): _26.Paused;
            fromProtoMsg(message: _26.PausedProtoMsg): _26.Paused;
            toProto(message: _26.Paused): Uint8Array;
            toProtoMsg(message: _26.Paused): _26.PausedProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _25.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _25.Params;
            fromPartial(_: Partial<_25.Params>): _25.Params;
            fromAmino(_: _25.ParamsAmino): _25.Params;
            toAmino(_: _25.Params): _25.ParamsAmino;
            fromAminoMsg(object: _25.ParamsAminoMsg): _25.Params;
            fromProtoMsg(message: _25.ParamsProtoMsg): _25.Params;
            toProto(message: _25.Params): Uint8Array;
            toProtoMsg(message: _25.Params): _25.ParamsProtoMsg;
        };
        Owner: {
            typeUrl: string;
            encode(message: _24.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.Owner;
            fromPartial(object: Partial<_24.Owner>): _24.Owner;
            fromAmino(object: _24.OwnerAmino): _24.Owner;
            toAmino(message: _24.Owner): _24.OwnerAmino;
            fromAminoMsg(object: _24.OwnerAminoMsg): _24.Owner;
            fromProtoMsg(message: _24.OwnerProtoMsg): _24.Owner;
            toProto(message: _24.Owner): Uint8Array;
            toProtoMsg(message: _24.Owner): _24.OwnerProtoMsg;
        };
        MintingDenom: {
            typeUrl: string;
            encode(message: _23.MintingDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MintingDenom;
            fromPartial(object: Partial<_23.MintingDenom>): _23.MintingDenom;
            fromAmino(object: _23.MintingDenomAmino): _23.MintingDenom;
            toAmino(message: _23.MintingDenom): _23.MintingDenomAmino;
            fromAminoMsg(object: _23.MintingDenomAminoMsg): _23.MintingDenom;
            fromProtoMsg(message: _23.MintingDenomProtoMsg): _23.MintingDenom;
            toProto(message: _23.MintingDenom): Uint8Array;
            toProtoMsg(message: _23.MintingDenom): _23.MintingDenomProtoMsg;
        };
        Minters: {
            typeUrl: string;
            encode(message: _22.Minters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.Minters;
            fromPartial(object: Partial<_22.Minters>): _22.Minters;
            fromAmino(object: _22.MintersAmino): _22.Minters;
            toAmino(message: _22.Minters): _22.MintersAmino;
            fromAminoMsg(object: _22.MintersAminoMsg): _22.Minters;
            fromProtoMsg(message: _22.MintersProtoMsg): _22.Minters;
            toProto(message: _22.Minters): Uint8Array;
            toProtoMsg(message: _22.Minters): _22.MintersProtoMsg;
        };
        MinterController: {
            typeUrl: string;
            encode(message: _21.MinterController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.MinterController;
            fromPartial(object: Partial<_21.MinterController>): _21.MinterController;
            fromAmino(object: _21.MinterControllerAmino): _21.MinterController;
            toAmino(message: _21.MinterController): _21.MinterControllerAmino;
            fromAminoMsg(object: _21.MinterControllerAminoMsg): _21.MinterController;
            fromProtoMsg(message: _21.MinterControllerProtoMsg): _21.MinterController;
            toProto(message: _21.MinterController): Uint8Array;
            toProtoMsg(message: _21.MinterController): _21.MinterControllerProtoMsg;
        };
        MasterMinter: {
            typeUrl: string;
            encode(message: _20.MasterMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.MasterMinter;
            fromPartial(object: Partial<_20.MasterMinter>): _20.MasterMinter;
            fromAmino(object: _20.MasterMinterAmino): _20.MasterMinter;
            toAmino(message: _20.MasterMinter): _20.MasterMinterAmino;
            fromAminoMsg(object: _20.MasterMinterAminoMsg): _20.MasterMinter;
            fromProtoMsg(message: _20.MasterMinterProtoMsg): _20.MasterMinter;
            toProto(message: _20.MasterMinter): Uint8Array;
            toProtoMsg(message: _20.MasterMinter): _20.MasterMinterProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _19.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.GenesisState;
            fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
            fromAmino(object: _19.GenesisStateAmino): _19.GenesisState;
            toAmino(message: _19.GenesisState): _19.GenesisStateAmino;
            fromAminoMsg(object: _19.GenesisStateAminoMsg): _19.GenesisState;
            fromProtoMsg(message: _19.GenesisStateProtoMsg): _19.GenesisState;
            toProto(message: _19.GenesisState): Uint8Array;
            toProtoMsg(message: _19.GenesisState): _19.GenesisStateProtoMsg;
        };
        Blacklister: {
            typeUrl: string;
            encode(message: _18.Blacklister, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.Blacklister;
            fromPartial(object: Partial<_18.Blacklister>): _18.Blacklister;
            fromAmino(object: _18.BlacklisterAmino): _18.Blacklister;
            toAmino(message: _18.Blacklister): _18.BlacklisterAmino;
            fromAminoMsg(object: _18.BlacklisterAminoMsg): _18.Blacklister;
            fromProtoMsg(message: _18.BlacklisterProtoMsg): _18.Blacklister;
            toProto(message: _18.Blacklister): Uint8Array;
            toProtoMsg(message: _18.Blacklister): _18.BlacklisterProtoMsg;
        };
        Blacklisted: {
            typeUrl: string;
            encode(message: _17.Blacklisted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _17.Blacklisted;
            fromPartial(object: Partial<_17.Blacklisted>): _17.Blacklisted;
            fromAmino(object: _17.BlacklistedAmino): _17.Blacklisted;
            toAmino(message: _17.Blacklisted): _17.BlacklistedAmino;
            fromAminoMsg(object: _17.BlacklistedAminoMsg): _17.Blacklisted;
            fromProtoMsg(message: _17.BlacklistedProtoMsg): _17.Blacklisted;
            toProto(message: _17.Blacklisted): Uint8Array;
            toProtoMsg(message: _17.Blacklisted): _17.BlacklistedProtoMsg;
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
