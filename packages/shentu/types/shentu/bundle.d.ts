import * as _0 from "./auth/v1alpha1/tx";
import * as _1 from "./bank/v1alpha1/tx";
import * as _2 from "./bounty/v1/bounty";
import * as _3 from "./bounty/v1/genesis";
import * as _4 from "./bounty/v1/query";
import * as _5 from "./bounty/v1/tx";
import * as _6 from "./cert/v1alpha1/cert";
import * as _7 from "./cert/v1alpha1/genesis";
import * as _8 from "./cert/v1alpha1/query";
import * as _9 from "./cert/v1alpha1/tx";
import * as _10 from "./cvm/v1alpha1/genesis";
import * as _11 from "./cvm/v1alpha1/query";
import * as _12 from "./cvm/v1alpha1/tx";
import * as _13 from "./gov/v1alpha1/genesis";
import * as _14 from "./gov/v1alpha1/gov";
import * as _15 from "./gov/v1alpha1/query";
import * as _16 from "./oracle/v1alpha1/genesis";
import * as _17 from "./oracle/v1alpha1/oracle";
import * as _18 from "./oracle/v1alpha1/query";
import * as _19 from "./oracle/v1alpha1/tx";
import * as _20 from "./shield/v1alpha1/genesis";
import * as _21 from "./shield/v1alpha1/query";
import * as _22 from "./shield/v1alpha1/shield";
import * as _23 from "./shield/v1alpha1/tx";
import * as _137 from "./bounty/v1/query.lcd";
import * as _138 from "./cert/v1alpha1/query.lcd";
import * as _139 from "./cvm/v1alpha1/query.lcd";
import * as _140 from "./gov/v1alpha1/query.lcd";
import * as _141 from "./oracle/v1alpha1/query.lcd";
import * as _142 from "./shield/v1alpha1/query.lcd";
import * as _143 from "./bounty/v1/query.rpc.Query";
import * as _144 from "./cert/v1alpha1/query.rpc.Query";
import * as _145 from "./cvm/v1alpha1/query.rpc.Query";
import * as _146 from "./gov/v1alpha1/query.rpc.Query";
import * as _147 from "./oracle/v1alpha1/query.rpc.Query";
import * as _148 from "./shield/v1alpha1/query.rpc.Query";
import * as _149 from "./auth/v1alpha1/tx.rpc.msg";
import * as _150 from "./bank/v1alpha1/tx.rpc.msg";
import * as _151 from "./bounty/v1/tx.rpc.msg";
import * as _152 from "./cert/v1alpha1/tx.rpc.msg";
import * as _153 from "./cvm/v1alpha1/tx.rpc.msg";
import * as _154 from "./oracle/v1alpha1/tx.rpc.msg";
import * as _155 from "./shield/v1alpha1/tx.rpc.msg";
export declare namespace shentu {
    namespace auth {
        const v1alpha1: {
            MsgClientImpl: typeof _149.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    unlock(value: _0.MsgUnlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unlock(value: _0.MsgUnlock): {
                        typeUrl: string;
                        value: _0.MsgUnlock;
                    };
                };
                fromJSON: {
                    unlock(value: any): {
                        typeUrl: string;
                        value: _0.MsgUnlock;
                    };
                };
                fromPartial: {
                    unlock(value: _0.MsgUnlock): {
                        typeUrl: string;
                        value: _0.MsgUnlock;
                    };
                };
            };
            AminoConverter: {
                "/shentu.auth.v1alpha1.MsgUnlock": {
                    aminoType: string;
                    toAmino: (message: _0.MsgUnlock) => _0.MsgUnlockAmino;
                    fromAmino: (object: _0.MsgUnlockAmino) => _0.MsgUnlock;
                };
            };
            MsgUnlock: {
                typeUrl: string;
                encode(message: _0.MsgUnlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.MsgUnlock;
                fromPartial(object: Partial<_0.MsgUnlock>): _0.MsgUnlock;
                fromAmino(object: _0.MsgUnlockAmino): _0.MsgUnlock;
                toAmino(message: _0.MsgUnlock): _0.MsgUnlockAmino;
                fromAminoMsg(object: _0.MsgUnlockAminoMsg): _0.MsgUnlock;
                fromProtoMsg(message: _0.MsgUnlockProtoMsg): _0.MsgUnlock;
                toProto(message: _0.MsgUnlock): Uint8Array;
                toProtoMsg(message: _0.MsgUnlock): _0.MsgUnlockProtoMsg;
            };
            MsgUnlockResponse: {
                typeUrl: string;
                encode(_: _0.MsgUnlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _0.MsgUnlockResponse;
                fromPartial(_: Partial<_0.MsgUnlockResponse>): _0.MsgUnlockResponse;
                fromAmino(_: _0.MsgUnlockResponseAmino): _0.MsgUnlockResponse;
                toAmino(_: _0.MsgUnlockResponse): _0.MsgUnlockResponseAmino;
                fromAminoMsg(object: _0.MsgUnlockResponseAminoMsg): _0.MsgUnlockResponse;
                fromProtoMsg(message: _0.MsgUnlockResponseProtoMsg): _0.MsgUnlockResponse;
                toProto(message: _0.MsgUnlockResponse): Uint8Array;
                toProtoMsg(message: _0.MsgUnlockResponse): _0.MsgUnlockResponseProtoMsg;
            };
        };
    }
    namespace bank {
        const v1alpha1: {
            MsgClientImpl: typeof _150.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    lockedSend(value: _1.MsgLockedSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    lockedSend(value: _1.MsgLockedSend): {
                        typeUrl: string;
                        value: _1.MsgLockedSend;
                    };
                };
                fromJSON: {
                    lockedSend(value: any): {
                        typeUrl: string;
                        value: _1.MsgLockedSend;
                    };
                };
                fromPartial: {
                    lockedSend(value: _1.MsgLockedSend): {
                        typeUrl: string;
                        value: _1.MsgLockedSend;
                    };
                };
            };
            AminoConverter: {
                "/shentu.bank.v1alpha1.MsgLockedSend": {
                    aminoType: string;
                    toAmino: (message: _1.MsgLockedSend) => _1.MsgLockedSendAmino;
                    fromAmino: (object: _1.MsgLockedSendAmino) => _1.MsgLockedSend;
                };
            };
            MsgLockedSend: {
                typeUrl: string;
                encode(message: _1.MsgLockedSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgLockedSend;
                fromPartial(object: Partial<_1.MsgLockedSend>): _1.MsgLockedSend;
                fromAmino(object: _1.MsgLockedSendAmino): _1.MsgLockedSend;
                toAmino(message: _1.MsgLockedSend): _1.MsgLockedSendAmino;
                fromAminoMsg(object: _1.MsgLockedSendAminoMsg): _1.MsgLockedSend;
                fromProtoMsg(message: _1.MsgLockedSendProtoMsg): _1.MsgLockedSend;
                toProto(message: _1.MsgLockedSend): Uint8Array;
                toProtoMsg(message: _1.MsgLockedSend): _1.MsgLockedSendProtoMsg;
            };
            MsgLockedSendResponse: {
                typeUrl: string;
                encode(_: _1.MsgLockedSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.MsgLockedSendResponse;
                fromPartial(_: Partial<_1.MsgLockedSendResponse>): _1.MsgLockedSendResponse;
                fromAmino(_: _1.MsgLockedSendResponseAmino): _1.MsgLockedSendResponse;
                toAmino(_: _1.MsgLockedSendResponse): _1.MsgLockedSendResponseAmino;
                fromAminoMsg(object: _1.MsgLockedSendResponseAminoMsg): _1.MsgLockedSendResponse;
                fromProtoMsg(message: _1.MsgLockedSendResponseProtoMsg): _1.MsgLockedSendResponse;
                toProto(message: _1.MsgLockedSendResponse): Uint8Array;
                toProtoMsg(message: _1.MsgLockedSendResponse): _1.MsgLockedSendResponseProtoMsg;
            };
        };
    }
    namespace bounty {
        const v1: {
            MsgClientImpl: typeof _151.MsgClientImpl;
            QueryClientImpl: typeof _143.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                programs(request?: _4.QueryProgramsRequest): Promise<_4.QueryProgramsResponse>;
                program(request: _4.QueryProgramRequest): Promise<_4.QueryProgramResponse>;
                findings(request: _4.QueryFindingsRequest): Promise<_4.QueryFindingsResponse>;
                finding(request: _4.QueryFindingRequest): Promise<_4.QueryFindingResponse>;
                findingFingerprint(request: _4.QueryFindingFingerprintRequest): Promise<_4.QueryFindingFingerprintResponse>;
                programFingerprint(request: _4.QueryProgramFingerprintRequest): Promise<_4.QueryProgramFingerprintResponse>;
            };
            LCDQueryClient: typeof _137.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createProgram(value: _5.MsgCreateProgram): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editProgram(value: _5.MsgEditProgram): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    activateProgram(value: _5.MsgActivateProgram): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeProgram(value: _5.MsgCloseProgram): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitFinding(value: _5.MsgSubmitFinding): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editFinding(value: _5.MsgEditFinding): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    activateFinding(value: _5.MsgActivateFinding): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    confirmFinding(value: _5.MsgConfirmFinding): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    confirmFindingPaid(value: _5.MsgConfirmFindingPaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeFinding(value: _5.MsgCloseFinding): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    publishFinding(value: _5.MsgPublishFinding): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createProgram(value: _5.MsgCreateProgram): {
                        typeUrl: string;
                        value: _5.MsgCreateProgram;
                    };
                    editProgram(value: _5.MsgEditProgram): {
                        typeUrl: string;
                        value: _5.MsgEditProgram;
                    };
                    activateProgram(value: _5.MsgActivateProgram): {
                        typeUrl: string;
                        value: _5.MsgActivateProgram;
                    };
                    closeProgram(value: _5.MsgCloseProgram): {
                        typeUrl: string;
                        value: _5.MsgCloseProgram;
                    };
                    submitFinding(value: _5.MsgSubmitFinding): {
                        typeUrl: string;
                        value: _5.MsgSubmitFinding;
                    };
                    editFinding(value: _5.MsgEditFinding): {
                        typeUrl: string;
                        value: _5.MsgEditFinding;
                    };
                    activateFinding(value: _5.MsgActivateFinding): {
                        typeUrl: string;
                        value: _5.MsgActivateFinding;
                    };
                    confirmFinding(value: _5.MsgConfirmFinding): {
                        typeUrl: string;
                        value: _5.MsgConfirmFinding;
                    };
                    confirmFindingPaid(value: _5.MsgConfirmFindingPaid): {
                        typeUrl: string;
                        value: _5.MsgConfirmFindingPaid;
                    };
                    closeFinding(value: _5.MsgCloseFinding): {
                        typeUrl: string;
                        value: _5.MsgCloseFinding;
                    };
                    publishFinding(value: _5.MsgPublishFinding): {
                        typeUrl: string;
                        value: _5.MsgPublishFinding;
                    };
                };
                fromJSON: {
                    createProgram(value: any): {
                        typeUrl: string;
                        value: _5.MsgCreateProgram;
                    };
                    editProgram(value: any): {
                        typeUrl: string;
                        value: _5.MsgEditProgram;
                    };
                    activateProgram(value: any): {
                        typeUrl: string;
                        value: _5.MsgActivateProgram;
                    };
                    closeProgram(value: any): {
                        typeUrl: string;
                        value: _5.MsgCloseProgram;
                    };
                    submitFinding(value: any): {
                        typeUrl: string;
                        value: _5.MsgSubmitFinding;
                    };
                    editFinding(value: any): {
                        typeUrl: string;
                        value: _5.MsgEditFinding;
                    };
                    activateFinding(value: any): {
                        typeUrl: string;
                        value: _5.MsgActivateFinding;
                    };
                    confirmFinding(value: any): {
                        typeUrl: string;
                        value: _5.MsgConfirmFinding;
                    };
                    confirmFindingPaid(value: any): {
                        typeUrl: string;
                        value: _5.MsgConfirmFindingPaid;
                    };
                    closeFinding(value: any): {
                        typeUrl: string;
                        value: _5.MsgCloseFinding;
                    };
                    publishFinding(value: any): {
                        typeUrl: string;
                        value: _5.MsgPublishFinding;
                    };
                };
                fromPartial: {
                    createProgram(value: _5.MsgCreateProgram): {
                        typeUrl: string;
                        value: _5.MsgCreateProgram;
                    };
                    editProgram(value: _5.MsgEditProgram): {
                        typeUrl: string;
                        value: _5.MsgEditProgram;
                    };
                    activateProgram(value: _5.MsgActivateProgram): {
                        typeUrl: string;
                        value: _5.MsgActivateProgram;
                    };
                    closeProgram(value: _5.MsgCloseProgram): {
                        typeUrl: string;
                        value: _5.MsgCloseProgram;
                    };
                    submitFinding(value: _5.MsgSubmitFinding): {
                        typeUrl: string;
                        value: _5.MsgSubmitFinding;
                    };
                    editFinding(value: _5.MsgEditFinding): {
                        typeUrl: string;
                        value: _5.MsgEditFinding;
                    };
                    activateFinding(value: _5.MsgActivateFinding): {
                        typeUrl: string;
                        value: _5.MsgActivateFinding;
                    };
                    confirmFinding(value: _5.MsgConfirmFinding): {
                        typeUrl: string;
                        value: _5.MsgConfirmFinding;
                    };
                    confirmFindingPaid(value: _5.MsgConfirmFindingPaid): {
                        typeUrl: string;
                        value: _5.MsgConfirmFindingPaid;
                    };
                    closeFinding(value: _5.MsgCloseFinding): {
                        typeUrl: string;
                        value: _5.MsgCloseFinding;
                    };
                    publishFinding(value: _5.MsgPublishFinding): {
                        typeUrl: string;
                        value: _5.MsgPublishFinding;
                    };
                };
            };
            AminoConverter: {
                "/shentu.bounty.v1.MsgCreateProgram": {
                    aminoType: string;
                    toAmino: (message: _5.MsgCreateProgram) => _5.MsgCreateProgramAmino;
                    fromAmino: (object: _5.MsgCreateProgramAmino) => _5.MsgCreateProgram;
                };
                "/shentu.bounty.v1.MsgEditProgram": {
                    aminoType: string;
                    toAmino: (message: _5.MsgEditProgram) => _5.MsgEditProgramAmino;
                    fromAmino: (object: _5.MsgEditProgramAmino) => _5.MsgEditProgram;
                };
                "/shentu.bounty.v1.MsgActivateProgram": {
                    aminoType: string;
                    toAmino: (message: _5.MsgActivateProgram) => _5.MsgActivateProgramAmino;
                    fromAmino: (object: _5.MsgActivateProgramAmino) => _5.MsgActivateProgram;
                };
                "/shentu.bounty.v1.MsgCloseProgram": {
                    aminoType: string;
                    toAmino: (message: _5.MsgCloseProgram) => _5.MsgCloseProgramAmino;
                    fromAmino: (object: _5.MsgCloseProgramAmino) => _5.MsgCloseProgram;
                };
                "/shentu.bounty.v1.MsgSubmitFinding": {
                    aminoType: string;
                    toAmino: (message: _5.MsgSubmitFinding) => _5.MsgSubmitFindingAmino;
                    fromAmino: (object: _5.MsgSubmitFindingAmino) => _5.MsgSubmitFinding;
                };
                "/shentu.bounty.v1.MsgEditFinding": {
                    aminoType: string;
                    toAmino: (message: _5.MsgEditFinding) => _5.MsgEditFindingAmino;
                    fromAmino: (object: _5.MsgEditFindingAmino) => _5.MsgEditFinding;
                };
                "/shentu.bounty.v1.MsgActivateFinding": {
                    aminoType: string;
                    toAmino: (message: _5.MsgActivateFinding) => _5.MsgActivateFindingAmino;
                    fromAmino: (object: _5.MsgActivateFindingAmino) => _5.MsgActivateFinding;
                };
                "/shentu.bounty.v1.MsgConfirmFinding": {
                    aminoType: string;
                    toAmino: (message: _5.MsgConfirmFinding) => _5.MsgConfirmFindingAmino;
                    fromAmino: (object: _5.MsgConfirmFindingAmino) => _5.MsgConfirmFinding;
                };
                "/shentu.bounty.v1.MsgConfirmFindingPaid": {
                    aminoType: string;
                    toAmino: (message: _5.MsgConfirmFindingPaid) => _5.MsgConfirmFindingPaidAmino;
                    fromAmino: (object: _5.MsgConfirmFindingPaidAmino) => _5.MsgConfirmFindingPaid;
                };
                "/shentu.bounty.v1.MsgCloseFinding": {
                    aminoType: string;
                    toAmino: (message: _5.MsgCloseFinding) => _5.MsgCloseFindingAmino;
                    fromAmino: (object: _5.MsgCloseFindingAmino) => _5.MsgCloseFinding;
                };
                "/shentu.bounty.v1.MsgPublishFinding": {
                    aminoType: string;
                    toAmino: (message: _5.MsgPublishFinding) => _5.MsgPublishFindingAmino;
                    fromAmino: (object: _5.MsgPublishFindingAmino) => _5.MsgPublishFinding;
                };
            };
            MsgCreateProgram: {
                typeUrl: string;
                encode(message: _5.MsgCreateProgram, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgCreateProgram;
                fromPartial(object: Partial<_5.MsgCreateProgram>): _5.MsgCreateProgram;
                fromAmino(object: _5.MsgCreateProgramAmino): _5.MsgCreateProgram;
                toAmino(message: _5.MsgCreateProgram): _5.MsgCreateProgramAmino;
                fromAminoMsg(object: _5.MsgCreateProgramAminoMsg): _5.MsgCreateProgram;
                fromProtoMsg(message: _5.MsgCreateProgramProtoMsg): _5.MsgCreateProgram;
                toProto(message: _5.MsgCreateProgram): Uint8Array;
                toProtoMsg(message: _5.MsgCreateProgram): _5.MsgCreateProgramProtoMsg;
            };
            MsgEditProgram: {
                typeUrl: string;
                encode(message: _5.MsgEditProgram, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgEditProgram;
                fromPartial(object: Partial<_5.MsgEditProgram>): _5.MsgEditProgram;
                fromAmino(object: _5.MsgEditProgramAmino): _5.MsgEditProgram;
                toAmino(message: _5.MsgEditProgram): _5.MsgEditProgramAmino;
                fromAminoMsg(object: _5.MsgEditProgramAminoMsg): _5.MsgEditProgram;
                fromProtoMsg(message: _5.MsgEditProgramProtoMsg): _5.MsgEditProgram;
                toProto(message: _5.MsgEditProgram): Uint8Array;
                toProtoMsg(message: _5.MsgEditProgram): _5.MsgEditProgramProtoMsg;
            };
            MsgCreateProgramResponse: {
                typeUrl: string;
                encode(_: _5.MsgCreateProgramResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgCreateProgramResponse;
                fromPartial(_: Partial<_5.MsgCreateProgramResponse>): _5.MsgCreateProgramResponse;
                fromAmino(_: _5.MsgCreateProgramResponseAmino): _5.MsgCreateProgramResponse;
                toAmino(_: _5.MsgCreateProgramResponse): _5.MsgCreateProgramResponseAmino;
                fromAminoMsg(object: _5.MsgCreateProgramResponseAminoMsg): _5.MsgCreateProgramResponse;
                fromProtoMsg(message: _5.MsgCreateProgramResponseProtoMsg): _5.MsgCreateProgramResponse;
                toProto(message: _5.MsgCreateProgramResponse): Uint8Array;
                toProtoMsg(message: _5.MsgCreateProgramResponse): _5.MsgCreateProgramResponseProtoMsg;
            };
            MsgEditProgramResponse: {
                typeUrl: string;
                encode(_: _5.MsgEditProgramResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgEditProgramResponse;
                fromPartial(_: Partial<_5.MsgEditProgramResponse>): _5.MsgEditProgramResponse;
                fromAmino(_: _5.MsgEditProgramResponseAmino): _5.MsgEditProgramResponse;
                toAmino(_: _5.MsgEditProgramResponse): _5.MsgEditProgramResponseAmino;
                fromAminoMsg(object: _5.MsgEditProgramResponseAminoMsg): _5.MsgEditProgramResponse;
                fromProtoMsg(message: _5.MsgEditProgramResponseProtoMsg): _5.MsgEditProgramResponse;
                toProto(message: _5.MsgEditProgramResponse): Uint8Array;
                toProtoMsg(message: _5.MsgEditProgramResponse): _5.MsgEditProgramResponseProtoMsg;
            };
            MsgActivateProgram: {
                typeUrl: string;
                encode(message: _5.MsgActivateProgram, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgActivateProgram;
                fromPartial(object: Partial<_5.MsgActivateProgram>): _5.MsgActivateProgram;
                fromAmino(object: _5.MsgActivateProgramAmino): _5.MsgActivateProgram;
                toAmino(message: _5.MsgActivateProgram): _5.MsgActivateProgramAmino;
                fromAminoMsg(object: _5.MsgActivateProgramAminoMsg): _5.MsgActivateProgram;
                fromProtoMsg(message: _5.MsgActivateProgramProtoMsg): _5.MsgActivateProgram;
                toProto(message: _5.MsgActivateProgram): Uint8Array;
                toProtoMsg(message: _5.MsgActivateProgram): _5.MsgActivateProgramProtoMsg;
            };
            MsgActivateProgramResponse: {
                typeUrl: string;
                encode(_: _5.MsgActivateProgramResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgActivateProgramResponse;
                fromPartial(_: Partial<_5.MsgActivateProgramResponse>): _5.MsgActivateProgramResponse;
                fromAmino(_: _5.MsgActivateProgramResponseAmino): _5.MsgActivateProgramResponse;
                toAmino(_: _5.MsgActivateProgramResponse): _5.MsgActivateProgramResponseAmino;
                fromAminoMsg(object: _5.MsgActivateProgramResponseAminoMsg): _5.MsgActivateProgramResponse;
                fromProtoMsg(message: _5.MsgActivateProgramResponseProtoMsg): _5.MsgActivateProgramResponse;
                toProto(message: _5.MsgActivateProgramResponse): Uint8Array;
                toProtoMsg(message: _5.MsgActivateProgramResponse): _5.MsgActivateProgramResponseProtoMsg;
            };
            MsgCloseProgram: {
                typeUrl: string;
                encode(message: _5.MsgCloseProgram, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgCloseProgram;
                fromPartial(object: Partial<_5.MsgCloseProgram>): _5.MsgCloseProgram;
                fromAmino(object: _5.MsgCloseProgramAmino): _5.MsgCloseProgram;
                toAmino(message: _5.MsgCloseProgram): _5.MsgCloseProgramAmino;
                fromAminoMsg(object: _5.MsgCloseProgramAminoMsg): _5.MsgCloseProgram;
                fromProtoMsg(message: _5.MsgCloseProgramProtoMsg): _5.MsgCloseProgram;
                toProto(message: _5.MsgCloseProgram): Uint8Array;
                toProtoMsg(message: _5.MsgCloseProgram): _5.MsgCloseProgramProtoMsg;
            };
            MsgCloseProgramResponse: {
                typeUrl: string;
                encode(_: _5.MsgCloseProgramResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgCloseProgramResponse;
                fromPartial(_: Partial<_5.MsgCloseProgramResponse>): _5.MsgCloseProgramResponse;
                fromAmino(_: _5.MsgCloseProgramResponseAmino): _5.MsgCloseProgramResponse;
                toAmino(_: _5.MsgCloseProgramResponse): _5.MsgCloseProgramResponseAmino;
                fromAminoMsg(object: _5.MsgCloseProgramResponseAminoMsg): _5.MsgCloseProgramResponse;
                fromProtoMsg(message: _5.MsgCloseProgramResponseProtoMsg): _5.MsgCloseProgramResponse;
                toProto(message: _5.MsgCloseProgramResponse): Uint8Array;
                toProtoMsg(message: _5.MsgCloseProgramResponse): _5.MsgCloseProgramResponseProtoMsg;
            };
            MsgSubmitFinding: {
                typeUrl: string;
                encode(message: _5.MsgSubmitFinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgSubmitFinding;
                fromPartial(object: Partial<_5.MsgSubmitFinding>): _5.MsgSubmitFinding;
                fromAmino(object: _5.MsgSubmitFindingAmino): _5.MsgSubmitFinding;
                toAmino(message: _5.MsgSubmitFinding): _5.MsgSubmitFindingAmino;
                fromAminoMsg(object: _5.MsgSubmitFindingAminoMsg): _5.MsgSubmitFinding;
                fromProtoMsg(message: _5.MsgSubmitFindingProtoMsg): _5.MsgSubmitFinding;
                toProto(message: _5.MsgSubmitFinding): Uint8Array;
                toProtoMsg(message: _5.MsgSubmitFinding): _5.MsgSubmitFindingProtoMsg;
            };
            MsgSubmitFindingResponse: {
                typeUrl: string;
                encode(_: _5.MsgSubmitFindingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgSubmitFindingResponse;
                fromPartial(_: Partial<_5.MsgSubmitFindingResponse>): _5.MsgSubmitFindingResponse;
                fromAmino(_: _5.MsgSubmitFindingResponseAmino): _5.MsgSubmitFindingResponse;
                toAmino(_: _5.MsgSubmitFindingResponse): _5.MsgSubmitFindingResponseAmino;
                fromAminoMsg(object: _5.MsgSubmitFindingResponseAminoMsg): _5.MsgSubmitFindingResponse;
                fromProtoMsg(message: _5.MsgSubmitFindingResponseProtoMsg): _5.MsgSubmitFindingResponse;
                toProto(message: _5.MsgSubmitFindingResponse): Uint8Array;
                toProtoMsg(message: _5.MsgSubmitFindingResponse): _5.MsgSubmitFindingResponseProtoMsg;
            };
            MsgEditFinding: {
                typeUrl: string;
                encode(message: _5.MsgEditFinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgEditFinding;
                fromPartial(object: Partial<_5.MsgEditFinding>): _5.MsgEditFinding;
                fromAmino(object: _5.MsgEditFindingAmino): _5.MsgEditFinding;
                toAmino(message: _5.MsgEditFinding): _5.MsgEditFindingAmino;
                fromAminoMsg(object: _5.MsgEditFindingAminoMsg): _5.MsgEditFinding;
                fromProtoMsg(message: _5.MsgEditFindingProtoMsg): _5.MsgEditFinding;
                toProto(message: _5.MsgEditFinding): Uint8Array;
                toProtoMsg(message: _5.MsgEditFinding): _5.MsgEditFindingProtoMsg;
            };
            MsgEditFindingResponse: {
                typeUrl: string;
                encode(_: _5.MsgEditFindingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgEditFindingResponse;
                fromPartial(_: Partial<_5.MsgEditFindingResponse>): _5.MsgEditFindingResponse;
                fromAmino(_: _5.MsgEditFindingResponseAmino): _5.MsgEditFindingResponse;
                toAmino(_: _5.MsgEditFindingResponse): _5.MsgEditFindingResponseAmino;
                fromAminoMsg(object: _5.MsgEditFindingResponseAminoMsg): _5.MsgEditFindingResponse;
                fromProtoMsg(message: _5.MsgEditFindingResponseProtoMsg): _5.MsgEditFindingResponse;
                toProto(message: _5.MsgEditFindingResponse): Uint8Array;
                toProtoMsg(message: _5.MsgEditFindingResponse): _5.MsgEditFindingResponseProtoMsg;
            };
            MsgConfirmFinding: {
                typeUrl: string;
                encode(message: _5.MsgConfirmFinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgConfirmFinding;
                fromPartial(object: Partial<_5.MsgConfirmFinding>): _5.MsgConfirmFinding;
                fromAmino(object: _5.MsgConfirmFindingAmino): _5.MsgConfirmFinding;
                toAmino(message: _5.MsgConfirmFinding): _5.MsgConfirmFindingAmino;
                fromAminoMsg(object: _5.MsgConfirmFindingAminoMsg): _5.MsgConfirmFinding;
                fromProtoMsg(message: _5.MsgConfirmFindingProtoMsg): _5.MsgConfirmFinding;
                toProto(message: _5.MsgConfirmFinding): Uint8Array;
                toProtoMsg(message: _5.MsgConfirmFinding): _5.MsgConfirmFindingProtoMsg;
            };
            MsgConfirmFindingResponse: {
                typeUrl: string;
                encode(_: _5.MsgConfirmFindingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgConfirmFindingResponse;
                fromPartial(_: Partial<_5.MsgConfirmFindingResponse>): _5.MsgConfirmFindingResponse;
                fromAmino(_: _5.MsgConfirmFindingResponseAmino): _5.MsgConfirmFindingResponse;
                toAmino(_: _5.MsgConfirmFindingResponse): _5.MsgConfirmFindingResponseAmino;
                fromAminoMsg(object: _5.MsgConfirmFindingResponseAminoMsg): _5.MsgConfirmFindingResponse;
                fromProtoMsg(message: _5.MsgConfirmFindingResponseProtoMsg): _5.MsgConfirmFindingResponse;
                toProto(message: _5.MsgConfirmFindingResponse): Uint8Array;
                toProtoMsg(message: _5.MsgConfirmFindingResponse): _5.MsgConfirmFindingResponseProtoMsg;
            };
            MsgActivateFinding: {
                typeUrl: string;
                encode(message: _5.MsgActivateFinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgActivateFinding;
                fromPartial(object: Partial<_5.MsgActivateFinding>): _5.MsgActivateFinding;
                fromAmino(object: _5.MsgActivateFindingAmino): _5.MsgActivateFinding;
                toAmino(message: _5.MsgActivateFinding): _5.MsgActivateFindingAmino;
                fromAminoMsg(object: _5.MsgActivateFindingAminoMsg): _5.MsgActivateFinding;
                fromProtoMsg(message: _5.MsgActivateFindingProtoMsg): _5.MsgActivateFinding;
                toProto(message: _5.MsgActivateFinding): Uint8Array;
                toProtoMsg(message: _5.MsgActivateFinding): _5.MsgActivateFindingProtoMsg;
            };
            MsgActivateFindingResponse: {
                typeUrl: string;
                encode(_: _5.MsgActivateFindingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgActivateFindingResponse;
                fromPartial(_: Partial<_5.MsgActivateFindingResponse>): _5.MsgActivateFindingResponse;
                fromAmino(_: _5.MsgActivateFindingResponseAmino): _5.MsgActivateFindingResponse;
                toAmino(_: _5.MsgActivateFindingResponse): _5.MsgActivateFindingResponseAmino;
                fromAminoMsg(object: _5.MsgActivateFindingResponseAminoMsg): _5.MsgActivateFindingResponse;
                fromProtoMsg(message: _5.MsgActivateFindingResponseProtoMsg): _5.MsgActivateFindingResponse;
                toProto(message: _5.MsgActivateFindingResponse): Uint8Array;
                toProtoMsg(message: _5.MsgActivateFindingResponse): _5.MsgActivateFindingResponseProtoMsg;
            };
            MsgConfirmFindingPaid: {
                typeUrl: string;
                encode(message: _5.MsgConfirmFindingPaid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgConfirmFindingPaid;
                fromPartial(object: Partial<_5.MsgConfirmFindingPaid>): _5.MsgConfirmFindingPaid;
                fromAmino(object: _5.MsgConfirmFindingPaidAmino): _5.MsgConfirmFindingPaid;
                toAmino(message: _5.MsgConfirmFindingPaid): _5.MsgConfirmFindingPaidAmino;
                fromAminoMsg(object: _5.MsgConfirmFindingPaidAminoMsg): _5.MsgConfirmFindingPaid;
                fromProtoMsg(message: _5.MsgConfirmFindingPaidProtoMsg): _5.MsgConfirmFindingPaid;
                toProto(message: _5.MsgConfirmFindingPaid): Uint8Array;
                toProtoMsg(message: _5.MsgConfirmFindingPaid): _5.MsgConfirmFindingPaidProtoMsg;
            };
            MsgConfirmFindingPaidResponse: {
                typeUrl: string;
                encode(_: _5.MsgConfirmFindingPaidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgConfirmFindingPaidResponse;
                fromPartial(_: Partial<_5.MsgConfirmFindingPaidResponse>): _5.MsgConfirmFindingPaidResponse;
                fromAmino(_: _5.MsgConfirmFindingPaidResponseAmino): _5.MsgConfirmFindingPaidResponse;
                toAmino(_: _5.MsgConfirmFindingPaidResponse): _5.MsgConfirmFindingPaidResponseAmino;
                fromAminoMsg(object: _5.MsgConfirmFindingPaidResponseAminoMsg): _5.MsgConfirmFindingPaidResponse;
                fromProtoMsg(message: _5.MsgConfirmFindingPaidResponseProtoMsg): _5.MsgConfirmFindingPaidResponse;
                toProto(message: _5.MsgConfirmFindingPaidResponse): Uint8Array;
                toProtoMsg(message: _5.MsgConfirmFindingPaidResponse): _5.MsgConfirmFindingPaidResponseProtoMsg;
            };
            MsgCloseFinding: {
                typeUrl: string;
                encode(message: _5.MsgCloseFinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgCloseFinding;
                fromPartial(object: Partial<_5.MsgCloseFinding>): _5.MsgCloseFinding;
                fromAmino(object: _5.MsgCloseFindingAmino): _5.MsgCloseFinding;
                toAmino(message: _5.MsgCloseFinding): _5.MsgCloseFindingAmino;
                fromAminoMsg(object: _5.MsgCloseFindingAminoMsg): _5.MsgCloseFinding;
                fromProtoMsg(message: _5.MsgCloseFindingProtoMsg): _5.MsgCloseFinding;
                toProto(message: _5.MsgCloseFinding): Uint8Array;
                toProtoMsg(message: _5.MsgCloseFinding): _5.MsgCloseFindingProtoMsg;
            };
            MsgCloseFindingResponse: {
                typeUrl: string;
                encode(_: _5.MsgCloseFindingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgCloseFindingResponse;
                fromPartial(_: Partial<_5.MsgCloseFindingResponse>): _5.MsgCloseFindingResponse;
                fromAmino(_: _5.MsgCloseFindingResponseAmino): _5.MsgCloseFindingResponse;
                toAmino(_: _5.MsgCloseFindingResponse): _5.MsgCloseFindingResponseAmino;
                fromAminoMsg(object: _5.MsgCloseFindingResponseAminoMsg): _5.MsgCloseFindingResponse;
                fromProtoMsg(message: _5.MsgCloseFindingResponseProtoMsg): _5.MsgCloseFindingResponse;
                toProto(message: _5.MsgCloseFindingResponse): Uint8Array;
                toProtoMsg(message: _5.MsgCloseFindingResponse): _5.MsgCloseFindingResponseProtoMsg;
            };
            MsgPublishFinding: {
                typeUrl: string;
                encode(message: _5.MsgPublishFinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgPublishFinding;
                fromPartial(object: Partial<_5.MsgPublishFinding>): _5.MsgPublishFinding;
                fromAmino(object: _5.MsgPublishFindingAmino): _5.MsgPublishFinding;
                toAmino(message: _5.MsgPublishFinding): _5.MsgPublishFindingAmino;
                fromAminoMsg(object: _5.MsgPublishFindingAminoMsg): _5.MsgPublishFinding;
                fromProtoMsg(message: _5.MsgPublishFindingProtoMsg): _5.MsgPublishFinding;
                toProto(message: _5.MsgPublishFinding): Uint8Array;
                toProtoMsg(message: _5.MsgPublishFinding): _5.MsgPublishFindingProtoMsg;
            };
            MsgPublishFindingResponse: {
                typeUrl: string;
                encode(_: _5.MsgPublishFindingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgPublishFindingResponse;
                fromPartial(_: Partial<_5.MsgPublishFindingResponse>): _5.MsgPublishFindingResponse;
                fromAmino(_: _5.MsgPublishFindingResponseAmino): _5.MsgPublishFindingResponse;
                toAmino(_: _5.MsgPublishFindingResponse): _5.MsgPublishFindingResponseAmino;
                fromAminoMsg(object: _5.MsgPublishFindingResponseAminoMsg): _5.MsgPublishFindingResponse;
                fromProtoMsg(message: _5.MsgPublishFindingResponseProtoMsg): _5.MsgPublishFindingResponse;
                toProto(message: _5.MsgPublishFindingResponse): Uint8Array;
                toProtoMsg(message: _5.MsgPublishFindingResponse): _5.MsgPublishFindingResponseProtoMsg;
            };
            QueryHostsRequest: {
                typeUrl: string;
                encode(_: _4.QueryHostsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.QueryHostsRequest;
                fromPartial(_: Partial<_4.QueryHostsRequest>): _4.QueryHostsRequest;
                fromAmino(_: _4.QueryHostsRequestAmino): _4.QueryHostsRequest;
                toAmino(_: _4.QueryHostsRequest): _4.QueryHostsRequestAmino;
                fromAminoMsg(object: _4.QueryHostsRequestAminoMsg): _4.QueryHostsRequest;
                fromProtoMsg(message: _4.QueryHostsRequestProtoMsg): _4.QueryHostsRequest;
                toProto(message: _4.QueryHostsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryHostsRequest): _4.QueryHostsRequestProtoMsg;
            };
            QueryHostsResponse: {
                typeUrl: string;
                encode(_: _4.QueryHostsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.QueryHostsResponse;
                fromPartial(_: Partial<_4.QueryHostsResponse>): _4.QueryHostsResponse;
                fromAmino(_: _4.QueryHostsResponseAmino): _4.QueryHostsResponse;
                toAmino(_: _4.QueryHostsResponse): _4.QueryHostsResponseAmino;
                fromAminoMsg(object: _4.QueryHostsResponseAminoMsg): _4.QueryHostsResponse;
                fromProtoMsg(message: _4.QueryHostsResponseProtoMsg): _4.QueryHostsResponse;
                toProto(message: _4.QueryHostsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryHostsResponse): _4.QueryHostsResponseProtoMsg;
            };
            QueryHostRequest: {
                typeUrl: string;
                encode(message: _4.QueryHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryHostRequest;
                fromPartial(object: Partial<_4.QueryHostRequest>): _4.QueryHostRequest;
                fromAmino(object: _4.QueryHostRequestAmino): _4.QueryHostRequest;
                toAmino(message: _4.QueryHostRequest): _4.QueryHostRequestAmino;
                fromAminoMsg(object: _4.QueryHostRequestAminoMsg): _4.QueryHostRequest;
                fromProtoMsg(message: _4.QueryHostRequestProtoMsg): _4.QueryHostRequest;
                toProto(message: _4.QueryHostRequest): Uint8Array;
                toProtoMsg(message: _4.QueryHostRequest): _4.QueryHostRequestProtoMsg;
            };
            QueryHostResponse: {
                typeUrl: string;
                encode(_: _4.QueryHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.QueryHostResponse;
                fromPartial(_: Partial<_4.QueryHostResponse>): _4.QueryHostResponse;
                fromAmino(_: _4.QueryHostResponseAmino): _4.QueryHostResponse;
                toAmino(_: _4.QueryHostResponse): _4.QueryHostResponseAmino;
                fromAminoMsg(object: _4.QueryHostResponseAminoMsg): _4.QueryHostResponse;
                fromProtoMsg(message: _4.QueryHostResponseProtoMsg): _4.QueryHostResponse;
                toProto(message: _4.QueryHostResponse): Uint8Array;
                toProtoMsg(message: _4.QueryHostResponse): _4.QueryHostResponseProtoMsg;
            };
            QueryProgramsRequest: {
                typeUrl: string;
                encode(message: _4.QueryProgramsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryProgramsRequest;
                fromPartial(object: Partial<_4.QueryProgramsRequest>): _4.QueryProgramsRequest;
                fromAmino(object: _4.QueryProgramsRequestAmino): _4.QueryProgramsRequest;
                toAmino(message: _4.QueryProgramsRequest): _4.QueryProgramsRequestAmino;
                fromAminoMsg(object: _4.QueryProgramsRequestAminoMsg): _4.QueryProgramsRequest;
                fromProtoMsg(message: _4.QueryProgramsRequestProtoMsg): _4.QueryProgramsRequest;
                toProto(message: _4.QueryProgramsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryProgramsRequest): _4.QueryProgramsRequestProtoMsg;
            };
            QueryProgramsResponse: {
                typeUrl: string;
                encode(message: _4.QueryProgramsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryProgramsResponse;
                fromPartial(object: Partial<_4.QueryProgramsResponse>): _4.QueryProgramsResponse;
                fromAmino(object: _4.QueryProgramsResponseAmino): _4.QueryProgramsResponse;
                toAmino(message: _4.QueryProgramsResponse): _4.QueryProgramsResponseAmino;
                fromAminoMsg(object: _4.QueryProgramsResponseAminoMsg): _4.QueryProgramsResponse;
                fromProtoMsg(message: _4.QueryProgramsResponseProtoMsg): _4.QueryProgramsResponse;
                toProto(message: _4.QueryProgramsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryProgramsResponse): _4.QueryProgramsResponseProtoMsg;
            };
            QueryProgramRequest: {
                typeUrl: string;
                encode(message: _4.QueryProgramRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryProgramRequest;
                fromPartial(object: Partial<_4.QueryProgramRequest>): _4.QueryProgramRequest;
                fromAmino(object: _4.QueryProgramRequestAmino): _4.QueryProgramRequest;
                toAmino(message: _4.QueryProgramRequest): _4.QueryProgramRequestAmino;
                fromAminoMsg(object: _4.QueryProgramRequestAminoMsg): _4.QueryProgramRequest;
                fromProtoMsg(message: _4.QueryProgramRequestProtoMsg): _4.QueryProgramRequest;
                toProto(message: _4.QueryProgramRequest): Uint8Array;
                toProtoMsg(message: _4.QueryProgramRequest): _4.QueryProgramRequestProtoMsg;
            };
            QueryProgramResponse: {
                typeUrl: string;
                encode(message: _4.QueryProgramResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryProgramResponse;
                fromPartial(object: Partial<_4.QueryProgramResponse>): _4.QueryProgramResponse;
                fromAmino(object: _4.QueryProgramResponseAmino): _4.QueryProgramResponse;
                toAmino(message: _4.QueryProgramResponse): _4.QueryProgramResponseAmino;
                fromAminoMsg(object: _4.QueryProgramResponseAminoMsg): _4.QueryProgramResponse;
                fromProtoMsg(message: _4.QueryProgramResponseProtoMsg): _4.QueryProgramResponse;
                toProto(message: _4.QueryProgramResponse): Uint8Array;
                toProtoMsg(message: _4.QueryProgramResponse): _4.QueryProgramResponseProtoMsg;
            };
            QueryFindingsRequest: {
                typeUrl: string;
                encode(message: _4.QueryFindingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryFindingsRequest;
                fromPartial(object: Partial<_4.QueryFindingsRequest>): _4.QueryFindingsRequest;
                fromAmino(object: _4.QueryFindingsRequestAmino): _4.QueryFindingsRequest;
                toAmino(message: _4.QueryFindingsRequest): _4.QueryFindingsRequestAmino;
                fromAminoMsg(object: _4.QueryFindingsRequestAminoMsg): _4.QueryFindingsRequest;
                fromProtoMsg(message: _4.QueryFindingsRequestProtoMsg): _4.QueryFindingsRequest;
                toProto(message: _4.QueryFindingsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryFindingsRequest): _4.QueryFindingsRequestProtoMsg;
            };
            QueryFindingsResponse: {
                typeUrl: string;
                encode(message: _4.QueryFindingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryFindingsResponse;
                fromPartial(object: Partial<_4.QueryFindingsResponse>): _4.QueryFindingsResponse;
                fromAmino(object: _4.QueryFindingsResponseAmino): _4.QueryFindingsResponse;
                toAmino(message: _4.QueryFindingsResponse): _4.QueryFindingsResponseAmino;
                fromAminoMsg(object: _4.QueryFindingsResponseAminoMsg): _4.QueryFindingsResponse;
                fromProtoMsg(message: _4.QueryFindingsResponseProtoMsg): _4.QueryFindingsResponse;
                toProto(message: _4.QueryFindingsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryFindingsResponse): _4.QueryFindingsResponseProtoMsg;
            };
            QueryFindingRequest: {
                typeUrl: string;
                encode(message: _4.QueryFindingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryFindingRequest;
                fromPartial(object: Partial<_4.QueryFindingRequest>): _4.QueryFindingRequest;
                fromAmino(object: _4.QueryFindingRequestAmino): _4.QueryFindingRequest;
                toAmino(message: _4.QueryFindingRequest): _4.QueryFindingRequestAmino;
                fromAminoMsg(object: _4.QueryFindingRequestAminoMsg): _4.QueryFindingRequest;
                fromProtoMsg(message: _4.QueryFindingRequestProtoMsg): _4.QueryFindingRequest;
                toProto(message: _4.QueryFindingRequest): Uint8Array;
                toProtoMsg(message: _4.QueryFindingRequest): _4.QueryFindingRequestProtoMsg;
            };
            QueryFindingResponse: {
                typeUrl: string;
                encode(message: _4.QueryFindingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryFindingResponse;
                fromPartial(object: Partial<_4.QueryFindingResponse>): _4.QueryFindingResponse;
                fromAmino(object: _4.QueryFindingResponseAmino): _4.QueryFindingResponse;
                toAmino(message: _4.QueryFindingResponse): _4.QueryFindingResponseAmino;
                fromAminoMsg(object: _4.QueryFindingResponseAminoMsg): _4.QueryFindingResponse;
                fromProtoMsg(message: _4.QueryFindingResponseProtoMsg): _4.QueryFindingResponse;
                toProto(message: _4.QueryFindingResponse): Uint8Array;
                toProtoMsg(message: _4.QueryFindingResponse): _4.QueryFindingResponseProtoMsg;
            };
            QueryFindingFingerprintRequest: {
                typeUrl: string;
                encode(message: _4.QueryFindingFingerprintRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryFindingFingerprintRequest;
                fromPartial(object: Partial<_4.QueryFindingFingerprintRequest>): _4.QueryFindingFingerprintRequest;
                fromAmino(object: _4.QueryFindingFingerprintRequestAmino): _4.QueryFindingFingerprintRequest;
                toAmino(message: _4.QueryFindingFingerprintRequest): _4.QueryFindingFingerprintRequestAmino;
                fromAminoMsg(object: _4.QueryFindingFingerprintRequestAminoMsg): _4.QueryFindingFingerprintRequest;
                fromProtoMsg(message: _4.QueryFindingFingerprintRequestProtoMsg): _4.QueryFindingFingerprintRequest;
                toProto(message: _4.QueryFindingFingerprintRequest): Uint8Array;
                toProtoMsg(message: _4.QueryFindingFingerprintRequest): _4.QueryFindingFingerprintRequestProtoMsg;
            };
            QueryFindingFingerprintResponse: {
                typeUrl: string;
                encode(message: _4.QueryFindingFingerprintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryFindingFingerprintResponse;
                fromPartial(object: Partial<_4.QueryFindingFingerprintResponse>): _4.QueryFindingFingerprintResponse;
                fromAmino(object: _4.QueryFindingFingerprintResponseAmino): _4.QueryFindingFingerprintResponse;
                toAmino(message: _4.QueryFindingFingerprintResponse): _4.QueryFindingFingerprintResponseAmino;
                fromAminoMsg(object: _4.QueryFindingFingerprintResponseAminoMsg): _4.QueryFindingFingerprintResponse;
                fromProtoMsg(message: _4.QueryFindingFingerprintResponseProtoMsg): _4.QueryFindingFingerprintResponse;
                toProto(message: _4.QueryFindingFingerprintResponse): Uint8Array;
                toProtoMsg(message: _4.QueryFindingFingerprintResponse): _4.QueryFindingFingerprintResponseProtoMsg;
            };
            QueryProgramFingerprintRequest: {
                typeUrl: string;
                encode(message: _4.QueryProgramFingerprintRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryProgramFingerprintRequest;
                fromPartial(object: Partial<_4.QueryProgramFingerprintRequest>): _4.QueryProgramFingerprintRequest;
                fromAmino(object: _4.QueryProgramFingerprintRequestAmino): _4.QueryProgramFingerprintRequest;
                toAmino(message: _4.QueryProgramFingerprintRequest): _4.QueryProgramFingerprintRequestAmino;
                fromAminoMsg(object: _4.QueryProgramFingerprintRequestAminoMsg): _4.QueryProgramFingerprintRequest;
                fromProtoMsg(message: _4.QueryProgramFingerprintRequestProtoMsg): _4.QueryProgramFingerprintRequest;
                toProto(message: _4.QueryProgramFingerprintRequest): Uint8Array;
                toProtoMsg(message: _4.QueryProgramFingerprintRequest): _4.QueryProgramFingerprintRequestProtoMsg;
            };
            QueryProgramFingerprintResponse: {
                typeUrl: string;
                encode(message: _4.QueryProgramFingerprintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryProgramFingerprintResponse;
                fromPartial(object: Partial<_4.QueryProgramFingerprintResponse>): _4.QueryProgramFingerprintResponse;
                fromAmino(object: _4.QueryProgramFingerprintResponseAmino): _4.QueryProgramFingerprintResponse;
                toAmino(message: _4.QueryProgramFingerprintResponse): _4.QueryProgramFingerprintResponseAmino;
                fromAminoMsg(object: _4.QueryProgramFingerprintResponseAminoMsg): _4.QueryProgramFingerprintResponse;
                fromProtoMsg(message: _4.QueryProgramFingerprintResponseProtoMsg): _4.QueryProgramFingerprintResponse;
                toProto(message: _4.QueryProgramFingerprintResponse): Uint8Array;
                toProtoMsg(message: _4.QueryProgramFingerprintResponse): _4.QueryProgramFingerprintResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _3.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.GenesisState;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
                fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
                toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
                fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
                fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
                toProto(message: _3.GenesisState): Uint8Array;
                toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
            };
            programStatusFromJSON(object: any): _2.ProgramStatus;
            programStatusToJSON(object: _2.ProgramStatus): string;
            severityLevelFromJSON(object: any): _2.SeverityLevel;
            severityLevelToJSON(object: _2.SeverityLevel): string;
            findingStatusFromJSON(object: any): _2.FindingStatus;
            findingStatusToJSON(object: _2.FindingStatus): string;
            ProgramStatus: typeof _2.ProgramStatus;
            ProgramStatusSDKType: typeof _2.ProgramStatus;
            ProgramStatusAmino: typeof _2.ProgramStatus;
            SeverityLevel: typeof _2.SeverityLevel;
            SeverityLevelSDKType: typeof _2.SeverityLevel;
            SeverityLevelAmino: typeof _2.SeverityLevel;
            FindingStatus: typeof _2.FindingStatus;
            FindingStatusSDKType: typeof _2.FindingStatus;
            FindingStatusAmino: typeof _2.FindingStatus;
            Program: {
                typeUrl: string;
                encode(message: _2.Program, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Program;
                fromPartial(object: Partial<_2.Program>): _2.Program;
                fromAmino(object: _2.ProgramAmino): _2.Program;
                toAmino(message: _2.Program): _2.ProgramAmino;
                fromAminoMsg(object: _2.ProgramAminoMsg): _2.Program;
                fromProtoMsg(message: _2.ProgramProtoMsg): _2.Program;
                toProto(message: _2.Program): Uint8Array;
                toProtoMsg(message: _2.Program): _2.ProgramProtoMsg;
            };
            Finding: {
                typeUrl: string;
                encode(message: _2.Finding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Finding;
                fromPartial(object: Partial<_2.Finding>): _2.Finding;
                fromAmino(object: _2.FindingAmino): _2.Finding;
                toAmino(message: _2.Finding): _2.FindingAmino;
                fromAminoMsg(object: _2.FindingAminoMsg): _2.Finding;
                fromProtoMsg(message: _2.FindingProtoMsg): _2.Finding;
                toProto(message: _2.Finding): Uint8Array;
                toProtoMsg(message: _2.Finding): _2.FindingProtoMsg;
            };
            ProgramFingerprint: {
                typeUrl: string;
                encode(message: _2.ProgramFingerprint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.ProgramFingerprint;
                fromPartial(object: Partial<_2.ProgramFingerprint>): _2.ProgramFingerprint;
                fromAmino(object: _2.ProgramFingerprintAmino): _2.ProgramFingerprint;
                toAmino(message: _2.ProgramFingerprint): _2.ProgramFingerprintAmino;
                fromAminoMsg(object: _2.ProgramFingerprintAminoMsg): _2.ProgramFingerprint;
                fromProtoMsg(message: _2.ProgramFingerprintProtoMsg): _2.ProgramFingerprint;
                toProto(message: _2.ProgramFingerprint): Uint8Array;
                toProtoMsg(message: _2.ProgramFingerprint): _2.ProgramFingerprintProtoMsg;
            };
            FindingFingerprint: {
                typeUrl: string;
                encode(message: _2.FindingFingerprint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.FindingFingerprint;
                fromPartial(object: Partial<_2.FindingFingerprint>): _2.FindingFingerprint;
                fromAmino(object: _2.FindingFingerprintAmino): _2.FindingFingerprint;
                toAmino(message: _2.FindingFingerprint): _2.FindingFingerprintAmino;
                fromAminoMsg(object: _2.FindingFingerprintAminoMsg): _2.FindingFingerprint;
                fromProtoMsg(message: _2.FindingFingerprintProtoMsg): _2.FindingFingerprint;
                toProto(message: _2.FindingFingerprint): Uint8Array;
                toProtoMsg(message: _2.FindingFingerprint): _2.FindingFingerprintProtoMsg;
            };
        };
    }
    namespace cert {
        const v1alpha1: {
            MsgClientImpl: typeof _152.MsgClientImpl;
            QueryClientImpl: typeof _144.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                certifier(request: _8.QueryCertifierRequest): Promise<_8.QueryCertifierResponse>;
                certifiers(request?: _8.QueryCertifiersRequest): Promise<_8.QueryCertifiersResponse>;
                platform(request: _8.QueryPlatformRequest): Promise<_8.QueryPlatformResponse>;
                certificate(request: _8.QueryCertificateRequest): Promise<_8.QueryCertificateResponse>;
                certificates(request: _8.QueryCertificatesRequest): Promise<_8.QueryCertificatesResponse>;
                addrConversion(request: _8.ConversionToShentuAddrRequest): Promise<_8.ConversionToShentuAddrResponse>;
            };
            LCDQueryClient: typeof _138.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    proposeCertifier(value: _9.MsgProposeCertifier): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    issueCertificate(value: _9.MsgIssueCertificate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeCertificate(value: _9.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    certifyPlatform(value: _9.MsgCertifyPlatform): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    proposeCertifier(value: _9.MsgProposeCertifier): {
                        typeUrl: string;
                        value: _9.MsgProposeCertifier;
                    };
                    issueCertificate(value: _9.MsgIssueCertificate): {
                        typeUrl: string;
                        value: _9.MsgIssueCertificate;
                    };
                    revokeCertificate(value: _9.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: _9.MsgRevokeCertificate;
                    };
                    certifyPlatform(value: _9.MsgCertifyPlatform): {
                        typeUrl: string;
                        value: _9.MsgCertifyPlatform;
                    };
                };
                fromJSON: {
                    proposeCertifier(value: any): {
                        typeUrl: string;
                        value: _9.MsgProposeCertifier;
                    };
                    issueCertificate(value: any): {
                        typeUrl: string;
                        value: _9.MsgIssueCertificate;
                    };
                    revokeCertificate(value: any): {
                        typeUrl: string;
                        value: _9.MsgRevokeCertificate;
                    };
                    certifyPlatform(value: any): {
                        typeUrl: string;
                        value: _9.MsgCertifyPlatform;
                    };
                };
                fromPartial: {
                    proposeCertifier(value: _9.MsgProposeCertifier): {
                        typeUrl: string;
                        value: _9.MsgProposeCertifier;
                    };
                    issueCertificate(value: _9.MsgIssueCertificate): {
                        typeUrl: string;
                        value: _9.MsgIssueCertificate;
                    };
                    revokeCertificate(value: _9.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: _9.MsgRevokeCertificate;
                    };
                    certifyPlatform(value: _9.MsgCertifyPlatform): {
                        typeUrl: string;
                        value: _9.MsgCertifyPlatform;
                    };
                };
            };
            AminoConverter: {
                "/shentu.cert.v1alpha1.MsgProposeCertifier": {
                    aminoType: string;
                    toAmino: (message: _9.MsgProposeCertifier) => _9.MsgProposeCertifierAmino;
                    fromAmino: (object: _9.MsgProposeCertifierAmino) => _9.MsgProposeCertifier;
                };
                "/shentu.cert.v1alpha1.MsgIssueCertificate": {
                    aminoType: string;
                    toAmino: (message: _9.MsgIssueCertificate) => _9.MsgIssueCertificateAmino;
                    fromAmino: (object: _9.MsgIssueCertificateAmino) => _9.MsgIssueCertificate;
                };
                "/shentu.cert.v1alpha1.MsgRevokeCertificate": {
                    aminoType: string;
                    toAmino: (message: _9.MsgRevokeCertificate) => _9.MsgRevokeCertificateAmino;
                    fromAmino: (object: _9.MsgRevokeCertificateAmino) => _9.MsgRevokeCertificate;
                };
                "/shentu.cert.v1alpha1.MsgCertifyPlatform": {
                    aminoType: string;
                    toAmino: (message: _9.MsgCertifyPlatform) => _9.MsgCertifyPlatformAmino;
                    fromAmino: (object: _9.MsgCertifyPlatformAmino) => _9.MsgCertifyPlatform;
                };
            };
            MsgProposeCertifier: {
                typeUrl: string;
                encode(message: _9.MsgProposeCertifier, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgProposeCertifier;
                fromPartial(object: Partial<_9.MsgProposeCertifier>): _9.MsgProposeCertifier;
                fromAmino(object: _9.MsgProposeCertifierAmino): _9.MsgProposeCertifier;
                toAmino(message: _9.MsgProposeCertifier): _9.MsgProposeCertifierAmino;
                fromAminoMsg(object: _9.MsgProposeCertifierAminoMsg): _9.MsgProposeCertifier;
                fromProtoMsg(message: _9.MsgProposeCertifierProtoMsg): _9.MsgProposeCertifier;
                toProto(message: _9.MsgProposeCertifier): Uint8Array;
                toProtoMsg(message: _9.MsgProposeCertifier): _9.MsgProposeCertifierProtoMsg;
            };
            MsgProposeCertifierResponse: {
                typeUrl: string;
                encode(_: _9.MsgProposeCertifierResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgProposeCertifierResponse;
                fromPartial(_: Partial<_9.MsgProposeCertifierResponse>): _9.MsgProposeCertifierResponse;
                fromAmino(_: _9.MsgProposeCertifierResponseAmino): _9.MsgProposeCertifierResponse;
                toAmino(_: _9.MsgProposeCertifierResponse): _9.MsgProposeCertifierResponseAmino;
                fromAminoMsg(object: _9.MsgProposeCertifierResponseAminoMsg): _9.MsgProposeCertifierResponse;
                fromProtoMsg(message: _9.MsgProposeCertifierResponseProtoMsg): _9.MsgProposeCertifierResponse;
                toProto(message: _9.MsgProposeCertifierResponse): Uint8Array;
                toProtoMsg(message: _9.MsgProposeCertifierResponse): _9.MsgProposeCertifierResponseProtoMsg;
            };
            MsgIssueCertificate: {
                typeUrl: string;
                encode(message: _9.MsgIssueCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgIssueCertificate;
                fromPartial(object: Partial<_9.MsgIssueCertificate>): _9.MsgIssueCertificate;
                fromAmino(object: _9.MsgIssueCertificateAmino): _9.MsgIssueCertificate;
                toAmino(message: _9.MsgIssueCertificate): _9.MsgIssueCertificateAmino;
                fromAminoMsg(object: _9.MsgIssueCertificateAminoMsg): _9.MsgIssueCertificate;
                fromProtoMsg(message: _9.MsgIssueCertificateProtoMsg): _9.MsgIssueCertificate;
                toProto(message: _9.MsgIssueCertificate): Uint8Array;
                toProtoMsg(message: _9.MsgIssueCertificate): _9.MsgIssueCertificateProtoMsg;
            };
            MsgIssueCertificateResponse: {
                typeUrl: string;
                encode(_: _9.MsgIssueCertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgIssueCertificateResponse;
                fromPartial(_: Partial<_9.MsgIssueCertificateResponse>): _9.MsgIssueCertificateResponse;
                fromAmino(_: _9.MsgIssueCertificateResponseAmino): _9.MsgIssueCertificateResponse;
                toAmino(_: _9.MsgIssueCertificateResponse): _9.MsgIssueCertificateResponseAmino;
                fromAminoMsg(object: _9.MsgIssueCertificateResponseAminoMsg): _9.MsgIssueCertificateResponse;
                fromProtoMsg(message: _9.MsgIssueCertificateResponseProtoMsg): _9.MsgIssueCertificateResponse;
                toProto(message: _9.MsgIssueCertificateResponse): Uint8Array;
                toProtoMsg(message: _9.MsgIssueCertificateResponse): _9.MsgIssueCertificateResponseProtoMsg;
            };
            MsgRevokeCertificate: {
                typeUrl: string;
                encode(message: _9.MsgRevokeCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgRevokeCertificate;
                fromPartial(object: Partial<_9.MsgRevokeCertificate>): _9.MsgRevokeCertificate;
                fromAmino(object: _9.MsgRevokeCertificateAmino): _9.MsgRevokeCertificate;
                toAmino(message: _9.MsgRevokeCertificate): _9.MsgRevokeCertificateAmino;
                fromAminoMsg(object: _9.MsgRevokeCertificateAminoMsg): _9.MsgRevokeCertificate;
                fromProtoMsg(message: _9.MsgRevokeCertificateProtoMsg): _9.MsgRevokeCertificate;
                toProto(message: _9.MsgRevokeCertificate): Uint8Array;
                toProtoMsg(message: _9.MsgRevokeCertificate): _9.MsgRevokeCertificateProtoMsg;
            };
            MsgRevokeCertificateResponse: {
                typeUrl: string;
                encode(_: _9.MsgRevokeCertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgRevokeCertificateResponse;
                fromPartial(_: Partial<_9.MsgRevokeCertificateResponse>): _9.MsgRevokeCertificateResponse;
                fromAmino(_: _9.MsgRevokeCertificateResponseAmino): _9.MsgRevokeCertificateResponse;
                toAmino(_: _9.MsgRevokeCertificateResponse): _9.MsgRevokeCertificateResponseAmino;
                fromAminoMsg(object: _9.MsgRevokeCertificateResponseAminoMsg): _9.MsgRevokeCertificateResponse;
                fromProtoMsg(message: _9.MsgRevokeCertificateResponseProtoMsg): _9.MsgRevokeCertificateResponse;
                toProto(message: _9.MsgRevokeCertificateResponse): Uint8Array;
                toProtoMsg(message: _9.MsgRevokeCertificateResponse): _9.MsgRevokeCertificateResponseProtoMsg;
            };
            MsgCertifyPlatform: {
                typeUrl: string;
                encode(message: _9.MsgCertifyPlatform, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgCertifyPlatform;
                fromPartial(object: Partial<_9.MsgCertifyPlatform>): _9.MsgCertifyPlatform;
                fromAmino(object: _9.MsgCertifyPlatformAmino): _9.MsgCertifyPlatform;
                toAmino(message: _9.MsgCertifyPlatform): _9.MsgCertifyPlatformAmino;
                fromAminoMsg(object: _9.MsgCertifyPlatformAminoMsg): _9.MsgCertifyPlatform;
                fromProtoMsg(message: _9.MsgCertifyPlatformProtoMsg): _9.MsgCertifyPlatform;
                toProto(message: _9.MsgCertifyPlatform): Uint8Array;
                toProtoMsg(message: _9.MsgCertifyPlatform): _9.MsgCertifyPlatformProtoMsg;
            };
            MsgCertifyPlatformResponse: {
                typeUrl: string;
                encode(_: _9.MsgCertifyPlatformResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgCertifyPlatformResponse;
                fromPartial(_: Partial<_9.MsgCertifyPlatformResponse>): _9.MsgCertifyPlatformResponse;
                fromAmino(_: _9.MsgCertifyPlatformResponseAmino): _9.MsgCertifyPlatformResponse;
                toAmino(_: _9.MsgCertifyPlatformResponse): _9.MsgCertifyPlatformResponseAmino;
                fromAminoMsg(object: _9.MsgCertifyPlatformResponseAminoMsg): _9.MsgCertifyPlatformResponse;
                fromProtoMsg(message: _9.MsgCertifyPlatformResponseProtoMsg): _9.MsgCertifyPlatformResponse;
                toProto(message: _9.MsgCertifyPlatformResponse): Uint8Array;
                toProtoMsg(message: _9.MsgCertifyPlatformResponse): _9.MsgCertifyPlatformResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("../cosmos/gov/v1beta1/gov").TextProposal | _6.Compilation | _6.Auditing | _6.Proof | _6.OracleOperator | _6.ShieldPoolCreator | _6.Identity | _6.General | _6.BountyAdmin;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => any;
            QueryCertifierRequest: {
                typeUrl: string;
                encode(message: _8.QueryCertifierRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryCertifierRequest;
                fromPartial(object: Partial<_8.QueryCertifierRequest>): _8.QueryCertifierRequest;
                fromAmino(object: _8.QueryCertifierRequestAmino): _8.QueryCertifierRequest;
                toAmino(message: _8.QueryCertifierRequest): _8.QueryCertifierRequestAmino;
                fromAminoMsg(object: _8.QueryCertifierRequestAminoMsg): _8.QueryCertifierRequest;
                fromProtoMsg(message: _8.QueryCertifierRequestProtoMsg): _8.QueryCertifierRequest;
                toProto(message: _8.QueryCertifierRequest): Uint8Array;
                toProtoMsg(message: _8.QueryCertifierRequest): _8.QueryCertifierRequestProtoMsg;
            };
            QueryCertifierResponse: {
                typeUrl: string;
                encode(message: _8.QueryCertifierResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryCertifierResponse;
                fromPartial(object: Partial<_8.QueryCertifierResponse>): _8.QueryCertifierResponse;
                fromAmino(object: _8.QueryCertifierResponseAmino): _8.QueryCertifierResponse;
                toAmino(message: _8.QueryCertifierResponse): _8.QueryCertifierResponseAmino;
                fromAminoMsg(object: _8.QueryCertifierResponseAminoMsg): _8.QueryCertifierResponse;
                fromProtoMsg(message: _8.QueryCertifierResponseProtoMsg): _8.QueryCertifierResponse;
                toProto(message: _8.QueryCertifierResponse): Uint8Array;
                toProtoMsg(message: _8.QueryCertifierResponse): _8.QueryCertifierResponseProtoMsg;
            };
            QueryCertifiersRequest: {
                typeUrl: string;
                encode(_: _8.QueryCertifiersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryCertifiersRequest;
                fromPartial(_: Partial<_8.QueryCertifiersRequest>): _8.QueryCertifiersRequest;
                fromAmino(_: _8.QueryCertifiersRequestAmino): _8.QueryCertifiersRequest;
                toAmino(_: _8.QueryCertifiersRequest): _8.QueryCertifiersRequestAmino;
                fromAminoMsg(object: _8.QueryCertifiersRequestAminoMsg): _8.QueryCertifiersRequest;
                fromProtoMsg(message: _8.QueryCertifiersRequestProtoMsg): _8.QueryCertifiersRequest;
                toProto(message: _8.QueryCertifiersRequest): Uint8Array;
                toProtoMsg(message: _8.QueryCertifiersRequest): _8.QueryCertifiersRequestProtoMsg;
            };
            QueryCertifiersResponse: {
                typeUrl: string;
                encode(message: _8.QueryCertifiersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryCertifiersResponse;
                fromPartial(object: Partial<_8.QueryCertifiersResponse>): _8.QueryCertifiersResponse;
                fromAmino(object: _8.QueryCertifiersResponseAmino): _8.QueryCertifiersResponse;
                toAmino(message: _8.QueryCertifiersResponse): _8.QueryCertifiersResponseAmino;
                fromAminoMsg(object: _8.QueryCertifiersResponseAminoMsg): _8.QueryCertifiersResponse;
                fromProtoMsg(message: _8.QueryCertifiersResponseProtoMsg): _8.QueryCertifiersResponse;
                toProto(message: _8.QueryCertifiersResponse): Uint8Array;
                toProtoMsg(message: _8.QueryCertifiersResponse): _8.QueryCertifiersResponseProtoMsg;
            };
            QueryPlatformRequest: {
                typeUrl: string;
                encode(message: _8.QueryPlatformRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryPlatformRequest;
                fromPartial(object: Partial<_8.QueryPlatformRequest>): _8.QueryPlatformRequest;
                fromAmino(object: _8.QueryPlatformRequestAmino): _8.QueryPlatformRequest;
                toAmino(message: _8.QueryPlatformRequest): _8.QueryPlatformRequestAmino;
                fromAminoMsg(object: _8.QueryPlatformRequestAminoMsg): _8.QueryPlatformRequest;
                fromProtoMsg(message: _8.QueryPlatformRequestProtoMsg): _8.QueryPlatformRequest;
                toProto(message: _8.QueryPlatformRequest): Uint8Array;
                toProtoMsg(message: _8.QueryPlatformRequest): _8.QueryPlatformRequestProtoMsg;
            };
            QueryPlatformResponse: {
                typeUrl: string;
                encode(message: _8.QueryPlatformResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryPlatformResponse;
                fromPartial(object: Partial<_8.QueryPlatformResponse>): _8.QueryPlatformResponse;
                fromAmino(object: _8.QueryPlatformResponseAmino): _8.QueryPlatformResponse;
                toAmino(message: _8.QueryPlatformResponse): _8.QueryPlatformResponseAmino;
                fromAminoMsg(object: _8.QueryPlatformResponseAminoMsg): _8.QueryPlatformResponse;
                fromProtoMsg(message: _8.QueryPlatformResponseProtoMsg): _8.QueryPlatformResponse;
                toProto(message: _8.QueryPlatformResponse): Uint8Array;
                toProtoMsg(message: _8.QueryPlatformResponse): _8.QueryPlatformResponseProtoMsg;
            };
            QueryCertificateRequest: {
                typeUrl: string;
                encode(message: _8.QueryCertificateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryCertificateRequest;
                fromPartial(object: Partial<_8.QueryCertificateRequest>): _8.QueryCertificateRequest;
                fromAmino(object: _8.QueryCertificateRequestAmino): _8.QueryCertificateRequest;
                toAmino(message: _8.QueryCertificateRequest): _8.QueryCertificateRequestAmino;
                fromAminoMsg(object: _8.QueryCertificateRequestAminoMsg): _8.QueryCertificateRequest;
                fromProtoMsg(message: _8.QueryCertificateRequestProtoMsg): _8.QueryCertificateRequest;
                toProto(message: _8.QueryCertificateRequest): Uint8Array;
                toProtoMsg(message: _8.QueryCertificateRequest): _8.QueryCertificateRequestProtoMsg;
            };
            QueryCertificateResponse: {
                typeUrl: string;
                encode(message: _8.QueryCertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryCertificateResponse;
                fromPartial(object: Partial<_8.QueryCertificateResponse>): _8.QueryCertificateResponse;
                fromAmino(object: _8.QueryCertificateResponseAmino): _8.QueryCertificateResponse;
                toAmino(message: _8.QueryCertificateResponse): _8.QueryCertificateResponseAmino;
                fromAminoMsg(object: _8.QueryCertificateResponseAminoMsg): _8.QueryCertificateResponse;
                fromProtoMsg(message: _8.QueryCertificateResponseProtoMsg): _8.QueryCertificateResponse;
                toProto(message: _8.QueryCertificateResponse): Uint8Array;
                toProtoMsg(message: _8.QueryCertificateResponse): _8.QueryCertificateResponseProtoMsg;
            };
            QueryCertificatesRequest: {
                typeUrl: string;
                encode(message: _8.QueryCertificatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryCertificatesRequest;
                fromPartial(object: Partial<_8.QueryCertificatesRequest>): _8.QueryCertificatesRequest;
                fromAmino(object: _8.QueryCertificatesRequestAmino): _8.QueryCertificatesRequest;
                toAmino(message: _8.QueryCertificatesRequest): _8.QueryCertificatesRequestAmino;
                fromAminoMsg(object: _8.QueryCertificatesRequestAminoMsg): _8.QueryCertificatesRequest;
                fromProtoMsg(message: _8.QueryCertificatesRequestProtoMsg): _8.QueryCertificatesRequest;
                toProto(message: _8.QueryCertificatesRequest): Uint8Array;
                toProtoMsg(message: _8.QueryCertificatesRequest): _8.QueryCertificatesRequestProtoMsg;
            };
            QueryCertificatesResponse: {
                typeUrl: string;
                encode(message: _8.QueryCertificatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryCertificatesResponse;
                fromPartial(object: Partial<_8.QueryCertificatesResponse>): _8.QueryCertificatesResponse;
                fromAmino(object: _8.QueryCertificatesResponseAmino): _8.QueryCertificatesResponse;
                toAmino(message: _8.QueryCertificatesResponse): _8.QueryCertificatesResponseAmino;
                fromAminoMsg(object: _8.QueryCertificatesResponseAminoMsg): _8.QueryCertificatesResponse;
                fromProtoMsg(message: _8.QueryCertificatesResponseProtoMsg): _8.QueryCertificatesResponse;
                toProto(message: _8.QueryCertificatesResponse): Uint8Array;
                toProtoMsg(message: _8.QueryCertificatesResponse): _8.QueryCertificatesResponseProtoMsg;
            };
            ConversionToShentuAddrRequest: {
                typeUrl: string;
                encode(message: _8.ConversionToShentuAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ConversionToShentuAddrRequest;
                fromPartial(object: Partial<_8.ConversionToShentuAddrRequest>): _8.ConversionToShentuAddrRequest;
                fromAmino(object: _8.ConversionToShentuAddrRequestAmino): _8.ConversionToShentuAddrRequest;
                toAmino(message: _8.ConversionToShentuAddrRequest): _8.ConversionToShentuAddrRequestAmino;
                fromAminoMsg(object: _8.ConversionToShentuAddrRequestAminoMsg): _8.ConversionToShentuAddrRequest;
                fromProtoMsg(message: _8.ConversionToShentuAddrRequestProtoMsg): _8.ConversionToShentuAddrRequest;
                toProto(message: _8.ConversionToShentuAddrRequest): Uint8Array;
                toProtoMsg(message: _8.ConversionToShentuAddrRequest): _8.ConversionToShentuAddrRequestProtoMsg;
            };
            ConversionToShentuAddrResponse: {
                typeUrl: string;
                encode(message: _8.ConversionToShentuAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ConversionToShentuAddrResponse;
                fromPartial(object: Partial<_8.ConversionToShentuAddrResponse>): _8.ConversionToShentuAddrResponse;
                fromAmino(object: _8.ConversionToShentuAddrResponseAmino): _8.ConversionToShentuAddrResponse;
                toAmino(message: _8.ConversionToShentuAddrResponse): _8.ConversionToShentuAddrResponseAmino;
                fromAminoMsg(object: _8.ConversionToShentuAddrResponseAminoMsg): _8.ConversionToShentuAddrResponse;
                fromProtoMsg(message: _8.ConversionToShentuAddrResponseProtoMsg): _8.ConversionToShentuAddrResponse;
                toProto(message: _8.ConversionToShentuAddrResponse): Uint8Array;
                toProtoMsg(message: _8.ConversionToShentuAddrResponse): _8.ConversionToShentuAddrResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _7.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GenesisState;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
                fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
                fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
                toProto(message: _7.GenesisState): Uint8Array;
                toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
            };
            certificateTypeFromJSON(object: any): _6.CertificateType;
            certificateTypeToJSON(object: _6.CertificateType): string;
            CertificateType: typeof _6.CertificateType;
            CertificateTypeSDKType: typeof _6.CertificateType;
            CertificateTypeAmino: typeof _6.CertificateType;
            Certifier: {
                typeUrl: string;
                encode(message: _6.Certifier, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Certifier;
                fromPartial(object: Partial<_6.Certifier>): _6.Certifier;
                fromAmino(object: _6.CertifierAmino): _6.Certifier;
                toAmino(message: _6.Certifier): _6.CertifierAmino;
                fromAminoMsg(object: _6.CertifierAminoMsg): _6.Certifier;
                fromProtoMsg(message: _6.CertifierProtoMsg): _6.Certifier;
                toProto(message: _6.Certifier): Uint8Array;
                toProtoMsg(message: _6.Certifier): _6.CertifierProtoMsg;
            };
            CompilationContent: {
                typeUrl: string;
                encode(message: _6.CompilationContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.CompilationContent;
                fromPartial(object: Partial<_6.CompilationContent>): _6.CompilationContent;
                fromAmino(object: _6.CompilationContentAmino): _6.CompilationContent;
                toAmino(message: _6.CompilationContent): _6.CompilationContentAmino;
                fromAminoMsg(object: _6.CompilationContentAminoMsg): _6.CompilationContent;
                fromProtoMsg(message: _6.CompilationContentProtoMsg): _6.CompilationContent;
                toProto(message: _6.CompilationContent): Uint8Array;
                toProtoMsg(message: _6.CompilationContent): _6.CompilationContentProtoMsg;
            };
            Certificate: {
                typeUrl: string;
                encode(message: _6.Certificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Certificate;
                fromPartial(object: Partial<_6.Certificate>): _6.Certificate;
                fromAmino(object: _6.CertificateAmino): _6.Certificate;
                toAmino(message: _6.Certificate): _6.CertificateAmino;
                fromAminoMsg(object: _6.CertificateAminoMsg): _6.Certificate;
                fromProtoMsg(message: _6.CertificateProtoMsg): _6.Certificate;
                toProto(message: _6.Certificate): Uint8Array;
                toProtoMsg(message: _6.Certificate): _6.CertificateProtoMsg;
            };
            Library: {
                typeUrl: string;
                encode(message: _6.Library, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Library;
                fromPartial(object: Partial<_6.Library>): _6.Library;
                fromAmino(object: _6.LibraryAmino): _6.Library;
                toAmino(message: _6.Library): _6.LibraryAmino;
                fromAminoMsg(object: _6.LibraryAminoMsg): _6.Library;
                fromProtoMsg(message: _6.LibraryProtoMsg): _6.Library;
                toProto(message: _6.Library): Uint8Array;
                toProtoMsg(message: _6.Library): _6.LibraryProtoMsg;
            };
            Compilation: {
                typeUrl: string;
                encode(message: _6.Compilation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Compilation;
                fromPartial(object: Partial<_6.Compilation>): _6.Compilation;
                fromAmino(object: _6.CompilationAmino): _6.Compilation;
                toAmino(message: _6.Compilation): _6.CompilationAmino;
                fromAminoMsg(object: _6.CompilationAminoMsg): _6.Compilation;
                fromProtoMsg(message: _6.CompilationProtoMsg): _6.Compilation;
                toProto(message: _6.Compilation): Uint8Array;
                toProtoMsg(message: _6.Compilation): _6.CompilationProtoMsg;
            };
            Auditing: {
                typeUrl: string;
                encode(message: _6.Auditing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Auditing;
                fromPartial(object: Partial<_6.Auditing>): _6.Auditing;
                fromAmino(object: _6.AuditingAmino): _6.Auditing;
                toAmino(message: _6.Auditing): _6.AuditingAmino;
                fromAminoMsg(object: _6.AuditingAminoMsg): _6.Auditing;
                fromProtoMsg(message: _6.AuditingProtoMsg): _6.Auditing;
                toProto(message: _6.Auditing): Uint8Array;
                toProtoMsg(message: _6.Auditing): _6.AuditingProtoMsg;
            };
            Proof: {
                typeUrl: string;
                encode(message: _6.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Proof;
                fromPartial(object: Partial<_6.Proof>): _6.Proof;
                fromAmino(object: _6.ProofAmino): _6.Proof;
                toAmino(message: _6.Proof): _6.ProofAmino;
                fromAminoMsg(object: _6.ProofAminoMsg): _6.Proof;
                fromProtoMsg(message: _6.ProofProtoMsg): _6.Proof;
                toProto(message: _6.Proof): Uint8Array;
                toProtoMsg(message: _6.Proof): _6.ProofProtoMsg;
            };
            OracleOperator: {
                typeUrl: string;
                encode(message: _6.OracleOperator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.OracleOperator;
                fromPartial(object: Partial<_6.OracleOperator>): _6.OracleOperator;
                fromAmino(object: _6.OracleOperatorAmino): _6.OracleOperator;
                toAmino(message: _6.OracleOperator): _6.OracleOperatorAmino;
                fromAminoMsg(object: _6.OracleOperatorAminoMsg): _6.OracleOperator;
                fromProtoMsg(message: _6.OracleOperatorProtoMsg): _6.OracleOperator;
                toProto(message: _6.OracleOperator): Uint8Array;
                toProtoMsg(message: _6.OracleOperator): _6.OracleOperatorProtoMsg;
            };
            ShieldPoolCreator: {
                typeUrl: string;
                encode(message: _6.ShieldPoolCreator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.ShieldPoolCreator;
                fromPartial(object: Partial<_6.ShieldPoolCreator>): _6.ShieldPoolCreator;
                fromAmino(object: _6.ShieldPoolCreatorAmino): _6.ShieldPoolCreator;
                toAmino(message: _6.ShieldPoolCreator): _6.ShieldPoolCreatorAmino;
                fromAminoMsg(object: _6.ShieldPoolCreatorAminoMsg): _6.ShieldPoolCreator;
                fromProtoMsg(message: _6.ShieldPoolCreatorProtoMsg): _6.ShieldPoolCreator;
                toProto(message: _6.ShieldPoolCreator): Uint8Array;
                toProtoMsg(message: _6.ShieldPoolCreator): _6.ShieldPoolCreatorProtoMsg;
            };
            Identity: {
                typeUrl: string;
                encode(message: _6.Identity, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Identity;
                fromPartial(object: Partial<_6.Identity>): _6.Identity;
                fromAmino(object: _6.IdentityAmino): _6.Identity;
                toAmino(message: _6.Identity): _6.IdentityAmino;
                fromAminoMsg(object: _6.IdentityAminoMsg): _6.Identity;
                fromProtoMsg(message: _6.IdentityProtoMsg): _6.Identity;
                toProto(message: _6.Identity): Uint8Array;
                toProtoMsg(message: _6.Identity): _6.IdentityProtoMsg;
            };
            General: {
                typeUrl: string;
                encode(message: _6.General, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.General;
                fromPartial(object: Partial<_6.General>): _6.General;
                fromAmino(object: _6.GeneralAmino): _6.General;
                toAmino(message: _6.General): _6.GeneralAmino;
                fromAminoMsg(object: _6.GeneralAminoMsg): _6.General;
                fromProtoMsg(message: _6.GeneralProtoMsg): _6.General;
                toProto(message: _6.General): Uint8Array;
                toProtoMsg(message: _6.General): _6.GeneralProtoMsg;
            };
            BountyAdmin: {
                typeUrl: string;
                encode(message: _6.BountyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.BountyAdmin;
                fromPartial(object: Partial<_6.BountyAdmin>): _6.BountyAdmin;
                fromAmino(object: _6.BountyAdminAmino): _6.BountyAdmin;
                toAmino(message: _6.BountyAdmin): _6.BountyAdminAmino;
                fromAminoMsg(object: _6.BountyAdminAminoMsg): _6.BountyAdmin;
                fromProtoMsg(message: _6.BountyAdminProtoMsg): _6.BountyAdmin;
                toProto(message: _6.BountyAdmin): Uint8Array;
                toProtoMsg(message: _6.BountyAdmin): _6.BountyAdminProtoMsg;
            };
            Platform: {
                typeUrl: string;
                encode(message: _6.Platform, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Platform;
                fromPartial(object: Partial<_6.Platform>): _6.Platform;
                fromAmino(object: _6.PlatformAmino): _6.Platform;
                toAmino(message: _6.Platform): _6.PlatformAmino;
                fromAminoMsg(object: _6.PlatformAminoMsg): _6.Platform;
                fromProtoMsg(message: _6.PlatformProtoMsg): _6.Platform;
                toProto(message: _6.Platform): Uint8Array;
                toProtoMsg(message: _6.Platform): _6.PlatformProtoMsg;
            };
            CertifierUpdateProposal: {
                typeUrl: string;
                encode(message: _6.CertifierUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.CertifierUpdateProposal;
                fromPartial(object: Partial<_6.CertifierUpdateProposal>): _6.CertifierUpdateProposal;
                fromAmino(object: _6.CertifierUpdateProposalAmino): _6.CertifierUpdateProposal;
                toAmino(message: _6.CertifierUpdateProposal): _6.CertifierUpdateProposalAmino;
                fromAminoMsg(object: _6.CertifierUpdateProposalAminoMsg): _6.CertifierUpdateProposal;
                fromProtoMsg(message: _6.CertifierUpdateProposalProtoMsg): _6.CertifierUpdateProposal;
                toProto(message: _6.CertifierUpdateProposal): Uint8Array;
                toProtoMsg(message: _6.CertifierUpdateProposal): _6.CertifierUpdateProposalProtoMsg;
            };
            KVPair: {
                typeUrl: string;
                encode(message: _6.KVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.KVPair;
                fromPartial(object: Partial<_6.KVPair>): _6.KVPair;
                fromAmino(object: _6.KVPairAmino): _6.KVPair;
                toAmino(message: _6.KVPair): _6.KVPairAmino;
                fromAminoMsg(object: _6.KVPairAminoMsg): _6.KVPair;
                fromProtoMsg(message: _6.KVPairProtoMsg): _6.KVPair;
                toProto(message: _6.KVPair): Uint8Array;
                toProtoMsg(message: _6.KVPair): _6.KVPairProtoMsg;
            };
        };
    }
    namespace cvm {
        const v1alpha1: {
            MsgClientImpl: typeof _153.MsgClientImpl;
            QueryClientImpl: typeof _145.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                code(request: _11.QueryCodeRequest): Promise<_11.QueryCodeResponse>;
                abi(request: _11.QueryAbiRequest): Promise<_11.QueryAbiResponse>;
                storage(request: _11.QueryStorageRequest): Promise<_11.QueryStorageResponse>;
                addressMeta(request: _11.QueryAddressMetaRequest): Promise<_11.QueryAddressMetaResponse>;
                meta(request: _11.QueryMetaRequest): Promise<_11.QueryMetaResponse>;
                account(request: _11.QueryAccountRequest): Promise<acm.Account>;
                view(request: _11.QueryViewRequest): Promise<_11.QueryViewResponse>;
            };
            LCDQueryClient: typeof _139.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    call(value: _12.MsgCall): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deploy(value: _12.MsgDeploy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    call(value: _12.MsgCall): {
                        typeUrl: string;
                        value: _12.MsgCall;
                    };
                    deploy(value: _12.MsgDeploy): {
                        typeUrl: string;
                        value: _12.MsgDeploy;
                    };
                };
                fromJSON: {
                    call(value: any): {
                        typeUrl: string;
                        value: _12.MsgCall;
                    };
                    deploy(value: any): {
                        typeUrl: string;
                        value: _12.MsgDeploy;
                    };
                };
                fromPartial: {
                    call(value: _12.MsgCall): {
                        typeUrl: string;
                        value: _12.MsgCall;
                    };
                    deploy(value: _12.MsgDeploy): {
                        typeUrl: string;
                        value: _12.MsgDeploy;
                    };
                };
            };
            AminoConverter: {
                "/shentu.cvm.v1alpha1.MsgCall": {
                    aminoType: string;
                    toAmino: (message: _12.MsgCall) => _12.MsgCallAmino;
                    fromAmino: (object: _12.MsgCallAmino) => _12.MsgCall;
                };
                "/shentu.cvm.v1alpha1.MsgDeploy": {
                    aminoType: string;
                    toAmino: (message: _12.MsgDeploy) => _12.MsgDeployAmino;
                    fromAmino: (object: _12.MsgDeployAmino) => _12.MsgDeploy;
                };
            };
            MsgCall: {
                typeUrl: string;
                encode(message: _12.MsgCall, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgCall;
                fromPartial(object: Partial<_12.MsgCall>): _12.MsgCall;
                fromAmino(object: _12.MsgCallAmino): _12.MsgCall;
                toAmino(message: _12.MsgCall): _12.MsgCallAmino;
                fromAminoMsg(object: _12.MsgCallAminoMsg): _12.MsgCall;
                fromProtoMsg(message: _12.MsgCallProtoMsg): _12.MsgCall;
                toProto(message: _12.MsgCall): Uint8Array;
                toProtoMsg(message: _12.MsgCall): _12.MsgCallProtoMsg;
            };
            MsgCallResponse: {
                typeUrl: string;
                encode(message: _12.MsgCallResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgCallResponse;
                fromPartial(object: Partial<_12.MsgCallResponse>): _12.MsgCallResponse;
                fromAmino(object: _12.MsgCallResponseAmino): _12.MsgCallResponse;
                toAmino(message: _12.MsgCallResponse): _12.MsgCallResponseAmino;
                fromAminoMsg(object: _12.MsgCallResponseAminoMsg): _12.MsgCallResponse;
                fromProtoMsg(message: _12.MsgCallResponseProtoMsg): _12.MsgCallResponse;
                toProto(message: _12.MsgCallResponse): Uint8Array;
                toProtoMsg(message: _12.MsgCallResponse): _12.MsgCallResponseProtoMsg;
            };
            MsgDeploy: {
                typeUrl: string;
                encode(message: _12.MsgDeploy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgDeploy;
                fromPartial(object: Partial<_12.MsgDeploy>): _12.MsgDeploy;
                fromAmino(object: _12.MsgDeployAmino): _12.MsgDeploy;
                toAmino(message: _12.MsgDeploy): _12.MsgDeployAmino;
                fromAminoMsg(object: _12.MsgDeployAminoMsg): _12.MsgDeploy;
                fromProtoMsg(message: _12.MsgDeployProtoMsg): _12.MsgDeploy;
                toProto(message: _12.MsgDeploy): Uint8Array;
                toProtoMsg(message: _12.MsgDeploy): _12.MsgDeployProtoMsg;
            };
            MsgDeployResponse: {
                typeUrl: string;
                encode(message: _12.MsgDeployResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgDeployResponse;
                fromPartial(object: Partial<_12.MsgDeployResponse>): _12.MsgDeployResponse;
                fromAmino(object: _12.MsgDeployResponseAmino): _12.MsgDeployResponse;
                toAmino(message: _12.MsgDeployResponse): _12.MsgDeployResponseAmino;
                fromAminoMsg(object: _12.MsgDeployResponseAminoMsg): _12.MsgDeployResponse;
                fromProtoMsg(message: _12.MsgDeployResponseProtoMsg): _12.MsgDeployResponse;
                toProto(message: _12.MsgDeployResponse): Uint8Array;
                toProtoMsg(message: _12.MsgDeployResponse): _12.MsgDeployResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _11.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryCodeRequest;
                fromPartial(object: Partial<_11.QueryCodeRequest>): _11.QueryCodeRequest;
                fromAmino(object: _11.QueryCodeRequestAmino): _11.QueryCodeRequest;
                toAmino(message: _11.QueryCodeRequest): _11.QueryCodeRequestAmino;
                fromAminoMsg(object: _11.QueryCodeRequestAminoMsg): _11.QueryCodeRequest;
                fromProtoMsg(message: _11.QueryCodeRequestProtoMsg): _11.QueryCodeRequest;
                toProto(message: _11.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _11.QueryCodeRequest): _11.QueryCodeRequestProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _11.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryCodeResponse;
                fromPartial(object: Partial<_11.QueryCodeResponse>): _11.QueryCodeResponse;
                fromAmino(object: _11.QueryCodeResponseAmino): _11.QueryCodeResponse;
                toAmino(message: _11.QueryCodeResponse): _11.QueryCodeResponseAmino;
                fromAminoMsg(object: _11.QueryCodeResponseAminoMsg): _11.QueryCodeResponse;
                fromProtoMsg(message: _11.QueryCodeResponseProtoMsg): _11.QueryCodeResponse;
                toProto(message: _11.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _11.QueryCodeResponse): _11.QueryCodeResponseProtoMsg;
            };
            QueryAbiRequest: {
                typeUrl: string;
                encode(message: _11.QueryAbiRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAbiRequest;
                fromPartial(object: Partial<_11.QueryAbiRequest>): _11.QueryAbiRequest;
                fromAmino(object: _11.QueryAbiRequestAmino): _11.QueryAbiRequest;
                toAmino(message: _11.QueryAbiRequest): _11.QueryAbiRequestAmino;
                fromAminoMsg(object: _11.QueryAbiRequestAminoMsg): _11.QueryAbiRequest;
                fromProtoMsg(message: _11.QueryAbiRequestProtoMsg): _11.QueryAbiRequest;
                toProto(message: _11.QueryAbiRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAbiRequest): _11.QueryAbiRequestProtoMsg;
            };
            QueryAbiResponse: {
                typeUrl: string;
                encode(message: _11.QueryAbiResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAbiResponse;
                fromPartial(object: Partial<_11.QueryAbiResponse>): _11.QueryAbiResponse;
                fromAmino(object: _11.QueryAbiResponseAmino): _11.QueryAbiResponse;
                toAmino(message: _11.QueryAbiResponse): _11.QueryAbiResponseAmino;
                fromAminoMsg(object: _11.QueryAbiResponseAminoMsg): _11.QueryAbiResponse;
                fromProtoMsg(message: _11.QueryAbiResponseProtoMsg): _11.QueryAbiResponse;
                toProto(message: _11.QueryAbiResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAbiResponse): _11.QueryAbiResponseProtoMsg;
            };
            QueryStorageRequest: {
                typeUrl: string;
                encode(message: _11.QueryStorageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryStorageRequest;
                fromPartial(object: Partial<_11.QueryStorageRequest>): _11.QueryStorageRequest;
                fromAmino(object: _11.QueryStorageRequestAmino): _11.QueryStorageRequest;
                toAmino(message: _11.QueryStorageRequest): _11.QueryStorageRequestAmino;
                fromAminoMsg(object: _11.QueryStorageRequestAminoMsg): _11.QueryStorageRequest;
                fromProtoMsg(message: _11.QueryStorageRequestProtoMsg): _11.QueryStorageRequest;
                toProto(message: _11.QueryStorageRequest): Uint8Array;
                toProtoMsg(message: _11.QueryStorageRequest): _11.QueryStorageRequestProtoMsg;
            };
            QueryStorageResponse: {
                typeUrl: string;
                encode(message: _11.QueryStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryStorageResponse;
                fromPartial(object: Partial<_11.QueryStorageResponse>): _11.QueryStorageResponse;
                fromAmino(object: _11.QueryStorageResponseAmino): _11.QueryStorageResponse;
                toAmino(message: _11.QueryStorageResponse): _11.QueryStorageResponseAmino;
                fromAminoMsg(object: _11.QueryStorageResponseAminoMsg): _11.QueryStorageResponse;
                fromProtoMsg(message: _11.QueryStorageResponseProtoMsg): _11.QueryStorageResponse;
                toProto(message: _11.QueryStorageResponse): Uint8Array;
                toProtoMsg(message: _11.QueryStorageResponse): _11.QueryStorageResponseProtoMsg;
            };
            QueryAddressMetaRequest: {
                typeUrl: string;
                encode(message: _11.QueryAddressMetaRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAddressMetaRequest;
                fromPartial(object: Partial<_11.QueryAddressMetaRequest>): _11.QueryAddressMetaRequest;
                fromAmino(object: _11.QueryAddressMetaRequestAmino): _11.QueryAddressMetaRequest;
                toAmino(message: _11.QueryAddressMetaRequest): _11.QueryAddressMetaRequestAmino;
                fromAminoMsg(object: _11.QueryAddressMetaRequestAminoMsg): _11.QueryAddressMetaRequest;
                fromProtoMsg(message: _11.QueryAddressMetaRequestProtoMsg): _11.QueryAddressMetaRequest;
                toProto(message: _11.QueryAddressMetaRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAddressMetaRequest): _11.QueryAddressMetaRequestProtoMsg;
            };
            QueryAddressMetaResponse: {
                typeUrl: string;
                encode(message: _11.QueryAddressMetaResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAddressMetaResponse;
                fromPartial(object: Partial<_11.QueryAddressMetaResponse>): _11.QueryAddressMetaResponse;
                fromAmino(object: _11.QueryAddressMetaResponseAmino): _11.QueryAddressMetaResponse;
                toAmino(message: _11.QueryAddressMetaResponse): _11.QueryAddressMetaResponseAmino;
                fromAminoMsg(object: _11.QueryAddressMetaResponseAminoMsg): _11.QueryAddressMetaResponse;
                fromProtoMsg(message: _11.QueryAddressMetaResponseProtoMsg): _11.QueryAddressMetaResponse;
                toProto(message: _11.QueryAddressMetaResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAddressMetaResponse): _11.QueryAddressMetaResponseProtoMsg;
            };
            QueryMetaRequest: {
                typeUrl: string;
                encode(message: _11.QueryMetaRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryMetaRequest;
                fromPartial(object: Partial<_11.QueryMetaRequest>): _11.QueryMetaRequest;
                fromAmino(object: _11.QueryMetaRequestAmino): _11.QueryMetaRequest;
                toAmino(message: _11.QueryMetaRequest): _11.QueryMetaRequestAmino;
                fromAminoMsg(object: _11.QueryMetaRequestAminoMsg): _11.QueryMetaRequest;
                fromProtoMsg(message: _11.QueryMetaRequestProtoMsg): _11.QueryMetaRequest;
                toProto(message: _11.QueryMetaRequest): Uint8Array;
                toProtoMsg(message: _11.QueryMetaRequest): _11.QueryMetaRequestProtoMsg;
            };
            QueryMetaResponse: {
                typeUrl: string;
                encode(message: _11.QueryMetaResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryMetaResponse;
                fromPartial(object: Partial<_11.QueryMetaResponse>): _11.QueryMetaResponse;
                fromAmino(object: _11.QueryMetaResponseAmino): _11.QueryMetaResponse;
                toAmino(message: _11.QueryMetaResponse): _11.QueryMetaResponseAmino;
                fromAminoMsg(object: _11.QueryMetaResponseAminoMsg): _11.QueryMetaResponse;
                fromProtoMsg(message: _11.QueryMetaResponseProtoMsg): _11.QueryMetaResponse;
                toProto(message: _11.QueryMetaResponse): Uint8Array;
                toProtoMsg(message: _11.QueryMetaResponse): _11.QueryMetaResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _11.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAccountRequest;
                fromPartial(object: Partial<_11.QueryAccountRequest>): _11.QueryAccountRequest;
                fromAmino(object: _11.QueryAccountRequestAmino): _11.QueryAccountRequest;
                toAmino(message: _11.QueryAccountRequest): _11.QueryAccountRequestAmino;
                fromAminoMsg(object: _11.QueryAccountRequestAminoMsg): _11.QueryAccountRequest;
                fromProtoMsg(message: _11.QueryAccountRequestProtoMsg): _11.QueryAccountRequest;
                toProto(message: _11.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAccountRequest): _11.QueryAccountRequestProtoMsg;
            };
            CVMAccount: {
                typeUrl: string;
                encode(message: _11.CVMAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.CVMAccount;
                fromPartial(object: Partial<_11.CVMAccount>): _11.CVMAccount;
                fromAmino(object: _11.CVMAccountAmino): _11.CVMAccount;
                toAmino(message: _11.CVMAccount): _11.CVMAccountAmino;
                fromAminoMsg(object: _11.CVMAccountAminoMsg): _11.CVMAccount;
                fromProtoMsg(message: _11.CVMAccountProtoMsg): _11.CVMAccount;
                toProto(message: _11.CVMAccount): Uint8Array;
                toProtoMsg(message: _11.CVMAccount): _11.CVMAccountProtoMsg;
            };
            QueryViewRequest: {
                typeUrl: string;
                encode(message: _11.QueryViewRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryViewRequest;
                fromPartial(object: Partial<_11.QueryViewRequest>): _11.QueryViewRequest;
                fromAmino(object: _11.QueryViewRequestAmino): _11.QueryViewRequest;
                toAmino(message: _11.QueryViewRequest): _11.QueryViewRequestAmino;
                fromAminoMsg(object: _11.QueryViewRequestAminoMsg): _11.QueryViewRequest;
                fromProtoMsg(message: _11.QueryViewRequestProtoMsg): _11.QueryViewRequest;
                toProto(message: _11.QueryViewRequest): Uint8Array;
                toProtoMsg(message: _11.QueryViewRequest): _11.QueryViewRequestProtoMsg;
            };
            QueryViewResponse: {
                typeUrl: string;
                encode(message: _11.QueryViewResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryViewResponse;
                fromPartial(object: Partial<_11.QueryViewResponse>): _11.QueryViewResponse;
                fromAmino(object: _11.QueryViewResponseAmino): _11.QueryViewResponse;
                toAmino(message: _11.QueryViewResponse): _11.QueryViewResponseAmino;
                fromAminoMsg(object: _11.QueryViewResponseAminoMsg): _11.QueryViewResponse;
                fromProtoMsg(message: _11.QueryViewResponseProtoMsg): _11.QueryViewResponse;
                toProto(message: _11.QueryViewResponse): Uint8Array;
                toProtoMsg(message: _11.QueryViewResponse): _11.QueryViewResponseProtoMsg;
            };
            ReturnVars: {
                typeUrl: string;
                encode(message: _11.ReturnVars, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ReturnVars;
                fromPartial(object: Partial<_11.ReturnVars>): _11.ReturnVars;
                fromAmino(object: _11.ReturnVarsAmino): _11.ReturnVars;
                toAmino(message: _11.ReturnVars): _11.ReturnVarsAmino;
                fromAminoMsg(object: _11.ReturnVarsAminoMsg): _11.ReturnVars;
                fromProtoMsg(message: _11.ReturnVarsProtoMsg): _11.ReturnVars;
                toProto(message: _11.ReturnVars): Uint8Array;
                toProtoMsg(message: _11.ReturnVars): _11.ReturnVarsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _10.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
                fromAmino(object: _10.GenesisStateAmino): _10.GenesisState;
                toAmino(message: _10.GenesisState): _10.GenesisStateAmino;
                fromAminoMsg(object: _10.GenesisStateAminoMsg): _10.GenesisState;
                fromProtoMsg(message: _10.GenesisStateProtoMsg): _10.GenesisState;
                toProto(message: _10.GenesisState): Uint8Array;
                toProtoMsg(message: _10.GenesisState): _10.GenesisStateProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _10.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Contract;
                fromPartial(object: Partial<_10.Contract>): _10.Contract;
                fromAmino(object: _10.ContractAmino): _10.Contract;
                toAmino(message: _10.Contract): _10.ContractAmino;
                fromAminoMsg(object: _10.ContractAminoMsg): _10.Contract;
                fromProtoMsg(message: _10.ContractProtoMsg): _10.Contract;
                toProto(message: _10.Contract): Uint8Array;
                toProtoMsg(message: _10.Contract): _10.ContractProtoMsg;
            };
            CVMCode: {
                typeUrl: string;
                encode(message: _10.CVMCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.CVMCode;
                fromPartial(object: Partial<_10.CVMCode>): _10.CVMCode;
                fromAmino(object: _10.CVMCodeAmino): _10.CVMCode;
                toAmino(message: _10.CVMCode): _10.CVMCodeAmino;
                fromAminoMsg(object: _10.CVMCodeAminoMsg): _10.CVMCode;
                fromProtoMsg(message: _10.CVMCodeProtoMsg): _10.CVMCode;
                toProto(message: _10.CVMCode): Uint8Array;
                toProtoMsg(message: _10.CVMCode): _10.CVMCodeProtoMsg;
            };
            Storage: {
                typeUrl: string;
                encode(message: _10.Storage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Storage;
                fromPartial(object: Partial<_10.Storage>): _10.Storage;
                fromAmino(object: _10.StorageAmino): _10.Storage;
                toAmino(message: _10.Storage): _10.StorageAmino;
                fromAminoMsg(object: _10.StorageAminoMsg): _10.Storage;
                fromProtoMsg(message: _10.StorageProtoMsg): _10.Storage;
                toProto(message: _10.Storage): Uint8Array;
                toProtoMsg(message: _10.Storage): _10.StorageProtoMsg;
            };
            ContractMeta: {
                typeUrl: string;
                encode(message: _10.ContractMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ContractMeta;
                fromPartial(object: Partial<_10.ContractMeta>): _10.ContractMeta;
                fromAmino(object: _10.ContractMetaAmino): _10.ContractMeta;
                toAmino(message: _10.ContractMeta): _10.ContractMetaAmino;
                fromAminoMsg(object: _10.ContractMetaAminoMsg): _10.ContractMeta;
                fromProtoMsg(message: _10.ContractMetaProtoMsg): _10.ContractMeta;
                toProto(message: _10.ContractMeta): Uint8Array;
                toProtoMsg(message: _10.ContractMeta): _10.ContractMetaProtoMsg;
            };
            ContractMetas: {
                typeUrl: string;
                encode(message: _10.ContractMetas, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ContractMetas;
                fromPartial(object: Partial<_10.ContractMetas>): _10.ContractMetas;
                fromAmino(object: _10.ContractMetasAmino): _10.ContractMetas;
                toAmino(message: _10.ContractMetas): _10.ContractMetasAmino;
                fromAminoMsg(object: _10.ContractMetasAminoMsg): _10.ContractMetas;
                fromProtoMsg(message: _10.ContractMetasProtoMsg): _10.ContractMetas;
                toProto(message: _10.ContractMetas): Uint8Array;
                toProtoMsg(message: _10.ContractMetas): _10.ContractMetasProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _10.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Metadata;
                fromPartial(object: Partial<_10.Metadata>): _10.Metadata;
                fromAmino(object: _10.MetadataAmino): _10.Metadata;
                toAmino(message: _10.Metadata): _10.MetadataAmino;
                fromAminoMsg(object: _10.MetadataAminoMsg): _10.Metadata;
                fromProtoMsg(message: _10.MetadataProtoMsg): _10.Metadata;
                toProto(message: _10.Metadata): Uint8Array;
                toProtoMsg(message: _10.Metadata): _10.MetadataProtoMsg;
            };
        };
    }
    namespace gov {
        const v1alpha1: {
            QueryClientImpl: typeof _146.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: cosmos.gov.v1beta1.QueryProposalRequest): Promise<cosmos.gov.v1beta1.QueryProposalResponse>;
                proposals(request: cosmos.gov.v1beta1.QueryProposalsRequest): Promise<cosmos.gov.v1beta1.QueryProposalsResponse>;
                vote(request: cosmos.gov.v1beta1.QueryVoteRequest): Promise<cosmos.gov.v1beta1.QueryVoteResponse>;
                votes(request: cosmos.gov.v1beta1.QueryVotesRequest): Promise<cosmos.gov.v1beta1.QueryVotesResponse>;
                params(request: cosmos.gov.v1beta1.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                deposit(request: cosmos.gov.v1beta1.QueryDepositRequest): Promise<cosmos.gov.v1beta1.QueryDepositResponse>;
                deposits(request: cosmos.gov.v1beta1.QueryDepositsRequest): Promise<cosmos.gov.v1beta1.QueryDepositsResponse>;
                tallyResult(request: cosmos.gov.v1beta1.QueryTallyResultRequest): Promise<cosmos.gov.v1beta1.QueryTallyResultResponse>;
                certVoted(request: _15.QueryCertVotedRequest): Promise<_15.QueryCertVotedResponse>;
            };
            LCDQueryClient: typeof _140.LCDQueryClient;
            QueryCertVotedRequest: {
                typeUrl: string;
                encode(message: _15.QueryCertVotedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryCertVotedRequest;
                fromPartial(object: Partial<_15.QueryCertVotedRequest>): _15.QueryCertVotedRequest;
                fromAmino(object: _15.QueryCertVotedRequestAmino): _15.QueryCertVotedRequest;
                toAmino(message: _15.QueryCertVotedRequest): _15.QueryCertVotedRequestAmino;
                fromAminoMsg(object: _15.QueryCertVotedRequestAminoMsg): _15.QueryCertVotedRequest;
                fromProtoMsg(message: _15.QueryCertVotedRequestProtoMsg): _15.QueryCertVotedRequest;
                toProto(message: _15.QueryCertVotedRequest): Uint8Array;
                toProtoMsg(message: _15.QueryCertVotedRequest): _15.QueryCertVotedRequestProtoMsg;
            };
            QueryCertVotedResponse: {
                typeUrl: string;
                encode(message: _15.QueryCertVotedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryCertVotedResponse;
                fromPartial(object: Partial<_15.QueryCertVotedResponse>): _15.QueryCertVotedResponse;
                fromAmino(object: _15.QueryCertVotedResponseAmino): _15.QueryCertVotedResponse;
                toAmino(message: _15.QueryCertVotedResponse): _15.QueryCertVotedResponseAmino;
                fromAminoMsg(object: _15.QueryCertVotedResponseAminoMsg): _15.QueryCertVotedResponse;
                fromProtoMsg(message: _15.QueryCertVotedResponseProtoMsg): _15.QueryCertVotedResponse;
                toProto(message: _15.QueryCertVotedResponse): Uint8Array;
                toProtoMsg(message: _15.QueryCertVotedResponse): _15.QueryCertVotedResponseProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _15.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryParamsResponse;
                fromPartial(object: Partial<_15.QueryParamsResponse>): _15.QueryParamsResponse;
                fromAmino(object: _15.QueryParamsResponseAmino): _15.QueryParamsResponse;
                toAmino(message: _15.QueryParamsResponse): _15.QueryParamsResponseAmino;
                fromAminoMsg(object: _15.QueryParamsResponseAminoMsg): _15.QueryParamsResponse;
                fromProtoMsg(message: _15.QueryParamsResponseProtoMsg): _15.QueryParamsResponse;
                toProto(message: _15.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _15.QueryParamsResponse): _15.QueryParamsResponseProtoMsg;
            };
            CustomParams: {
                typeUrl: string;
                encode(message: _14.CustomParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.CustomParams;
                fromPartial(object: Partial<_14.CustomParams>): _14.CustomParams;
                fromAmino(object: _14.CustomParamsAmino): _14.CustomParams;
                toAmino(message: _14.CustomParams): _14.CustomParamsAmino;
                fromAminoMsg(object: _14.CustomParamsAminoMsg): _14.CustomParams;
                fromProtoMsg(message: _14.CustomParamsProtoMsg): _14.CustomParams;
                toProto(message: _14.CustomParams): Uint8Array;
                toProtoMsg(message: _14.CustomParams): _14.CustomParamsProtoMsg;
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
        };
    }
    namespace oracle {
        const v1alpha1: {
            MsgClientImpl: typeof _154.MsgClientImpl;
            QueryClientImpl: typeof _147.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                operator(request: _18.QueryOperatorRequest): Promise<_18.QueryOperatorResponse>;
                operators(request?: _18.QueryOperatorsRequest): Promise<_18.QueryOperatorsResponse>;
                withdraws(request?: _18.QueryWithdrawsRequest): Promise<_18.QueryWithdrawsResponse>;
                task(request: _18.QueryTaskRequest): Promise<_18.QueryTaskResponse>;
                txTask(request: _18.QueryTxTaskRequest): Promise<_18.QueryTxTaskResponse>;
                response(request: _18.QueryResponseRequest): Promise<_18.QueryResponseResponse>;
                txResponse(request: _18.QueryTxResponseRequest): Promise<_18.QueryTxResponseResponse>;
                params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _141.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createOperator(value: _19.MsgCreateOperator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeOperator(value: _19.MsgRemoveOperator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCollateral(value: _19.MsgAddCollateral): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    reduceCollateral(value: _19.MsgReduceCollateral): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawReward(value: _19.MsgWithdrawReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createTask(value: _19.MsgCreateTask): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    taskResponse(value: _19.MsgTaskResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteTask(value: _19.MsgDeleteTask): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createTxTask(value: _19.MsgCreateTxTask): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    txTaskResponse(value: _19.MsgTxTaskResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteTxTask(value: _19.MsgDeleteTxTask): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createOperator(value: _19.MsgCreateOperator): {
                        typeUrl: string;
                        value: _19.MsgCreateOperator;
                    };
                    removeOperator(value: _19.MsgRemoveOperator): {
                        typeUrl: string;
                        value: _19.MsgRemoveOperator;
                    };
                    addCollateral(value: _19.MsgAddCollateral): {
                        typeUrl: string;
                        value: _19.MsgAddCollateral;
                    };
                    reduceCollateral(value: _19.MsgReduceCollateral): {
                        typeUrl: string;
                        value: _19.MsgReduceCollateral;
                    };
                    withdrawReward(value: _19.MsgWithdrawReward): {
                        typeUrl: string;
                        value: _19.MsgWithdrawReward;
                    };
                    createTask(value: _19.MsgCreateTask): {
                        typeUrl: string;
                        value: _19.MsgCreateTask;
                    };
                    taskResponse(value: _19.MsgTaskResponse): {
                        typeUrl: string;
                        value: _19.MsgTaskResponse;
                    };
                    deleteTask(value: _19.MsgDeleteTask): {
                        typeUrl: string;
                        value: _19.MsgDeleteTask;
                    };
                    createTxTask(value: _19.MsgCreateTxTask): {
                        typeUrl: string;
                        value: _19.MsgCreateTxTask;
                    };
                    txTaskResponse(value: _19.MsgTxTaskResponse): {
                        typeUrl: string;
                        value: _19.MsgTxTaskResponse;
                    };
                    deleteTxTask(value: _19.MsgDeleteTxTask): {
                        typeUrl: string;
                        value: _19.MsgDeleteTxTask;
                    };
                };
                fromJSON: {
                    createOperator(value: any): {
                        typeUrl: string;
                        value: _19.MsgCreateOperator;
                    };
                    removeOperator(value: any): {
                        typeUrl: string;
                        value: _19.MsgRemoveOperator;
                    };
                    addCollateral(value: any): {
                        typeUrl: string;
                        value: _19.MsgAddCollateral;
                    };
                    reduceCollateral(value: any): {
                        typeUrl: string;
                        value: _19.MsgReduceCollateral;
                    };
                    withdrawReward(value: any): {
                        typeUrl: string;
                        value: _19.MsgWithdrawReward;
                    };
                    createTask(value: any): {
                        typeUrl: string;
                        value: _19.MsgCreateTask;
                    };
                    taskResponse(value: any): {
                        typeUrl: string;
                        value: _19.MsgTaskResponse;
                    };
                    deleteTask(value: any): {
                        typeUrl: string;
                        value: _19.MsgDeleteTask;
                    };
                    createTxTask(value: any): {
                        typeUrl: string;
                        value: _19.MsgCreateTxTask;
                    };
                    txTaskResponse(value: any): {
                        typeUrl: string;
                        value: _19.MsgTxTaskResponse;
                    };
                    deleteTxTask(value: any): {
                        typeUrl: string;
                        value: _19.MsgDeleteTxTask;
                    };
                };
                fromPartial: {
                    createOperator(value: _19.MsgCreateOperator): {
                        typeUrl: string;
                        value: _19.MsgCreateOperator;
                    };
                    removeOperator(value: _19.MsgRemoveOperator): {
                        typeUrl: string;
                        value: _19.MsgRemoveOperator;
                    };
                    addCollateral(value: _19.MsgAddCollateral): {
                        typeUrl: string;
                        value: _19.MsgAddCollateral;
                    };
                    reduceCollateral(value: _19.MsgReduceCollateral): {
                        typeUrl: string;
                        value: _19.MsgReduceCollateral;
                    };
                    withdrawReward(value: _19.MsgWithdrawReward): {
                        typeUrl: string;
                        value: _19.MsgWithdrawReward;
                    };
                    createTask(value: _19.MsgCreateTask): {
                        typeUrl: string;
                        value: _19.MsgCreateTask;
                    };
                    taskResponse(value: _19.MsgTaskResponse): {
                        typeUrl: string;
                        value: _19.MsgTaskResponse;
                    };
                    deleteTask(value: _19.MsgDeleteTask): {
                        typeUrl: string;
                        value: _19.MsgDeleteTask;
                    };
                    createTxTask(value: _19.MsgCreateTxTask): {
                        typeUrl: string;
                        value: _19.MsgCreateTxTask;
                    };
                    txTaskResponse(value: _19.MsgTxTaskResponse): {
                        typeUrl: string;
                        value: _19.MsgTxTaskResponse;
                    };
                    deleteTxTask(value: _19.MsgDeleteTxTask): {
                        typeUrl: string;
                        value: _19.MsgDeleteTxTask;
                    };
                };
            };
            AminoConverter: {
                "/shentu.oracle.v1alpha1.MsgCreateOperator": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCreateOperator) => _19.MsgCreateOperatorAmino;
                    fromAmino: (object: _19.MsgCreateOperatorAmino) => _19.MsgCreateOperator;
                };
                "/shentu.oracle.v1alpha1.MsgRemoveOperator": {
                    aminoType: string;
                    toAmino: (message: _19.MsgRemoveOperator) => _19.MsgRemoveOperatorAmino;
                    fromAmino: (object: _19.MsgRemoveOperatorAmino) => _19.MsgRemoveOperator;
                };
                "/shentu.oracle.v1alpha1.MsgAddCollateral": {
                    aminoType: string;
                    toAmino: (message: _19.MsgAddCollateral) => _19.MsgAddCollateralAmino;
                    fromAmino: (object: _19.MsgAddCollateralAmino) => _19.MsgAddCollateral;
                };
                "/shentu.oracle.v1alpha1.MsgReduceCollateral": {
                    aminoType: string;
                    toAmino: (message: _19.MsgReduceCollateral) => _19.MsgReduceCollateralAmino;
                    fromAmino: (object: _19.MsgReduceCollateralAmino) => _19.MsgReduceCollateral;
                };
                "/shentu.oracle.v1alpha1.MsgWithdrawReward": {
                    aminoType: string;
                    toAmino: (message: _19.MsgWithdrawReward) => _19.MsgWithdrawRewardAmino;
                    fromAmino: (object: _19.MsgWithdrawRewardAmino) => _19.MsgWithdrawReward;
                };
                "/shentu.oracle.v1alpha1.MsgCreateTask": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCreateTask) => _19.MsgCreateTaskAmino;
                    fromAmino: (object: _19.MsgCreateTaskAmino) => _19.MsgCreateTask;
                };
                "/shentu.oracle.v1alpha1.MsgTaskResponse": {
                    aminoType: string;
                    toAmino: (message: _19.MsgTaskResponse) => _19.MsgTaskResponseAmino;
                    fromAmino: (object: _19.MsgTaskResponseAmino) => _19.MsgTaskResponse;
                };
                "/shentu.oracle.v1alpha1.MsgDeleteTask": {
                    aminoType: string;
                    toAmino: (message: _19.MsgDeleteTask) => _19.MsgDeleteTaskAmino;
                    fromAmino: (object: _19.MsgDeleteTaskAmino) => _19.MsgDeleteTask;
                };
                "/shentu.oracle.v1alpha1.MsgCreateTxTask": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCreateTxTask) => _19.MsgCreateTxTaskAmino;
                    fromAmino: (object: _19.MsgCreateTxTaskAmino) => _19.MsgCreateTxTask;
                };
                "/shentu.oracle.v1alpha1.MsgTxTaskResponse": {
                    aminoType: string;
                    toAmino: (message: _19.MsgTxTaskResponse) => _19.MsgTxTaskResponseAmino;
                    fromAmino: (object: _19.MsgTxTaskResponseAmino) => _19.MsgTxTaskResponse;
                };
                "/shentu.oracle.v1alpha1.MsgDeleteTxTask": {
                    aminoType: string;
                    toAmino: (message: _19.MsgDeleteTxTask) => _19.MsgDeleteTxTaskAmino;
                    fromAmino: (object: _19.MsgDeleteTxTaskAmino) => _19.MsgDeleteTxTask;
                };
            };
            MsgCreateOperator: {
                typeUrl: string;
                encode(message: _19.MsgCreateOperator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCreateOperator;
                fromPartial(object: Partial<_19.MsgCreateOperator>): _19.MsgCreateOperator;
                fromAmino(object: _19.MsgCreateOperatorAmino): _19.MsgCreateOperator;
                toAmino(message: _19.MsgCreateOperator): _19.MsgCreateOperatorAmino;
                fromAminoMsg(object: _19.MsgCreateOperatorAminoMsg): _19.MsgCreateOperator;
                fromProtoMsg(message: _19.MsgCreateOperatorProtoMsg): _19.MsgCreateOperator;
                toProto(message: _19.MsgCreateOperator): Uint8Array;
                toProtoMsg(message: _19.MsgCreateOperator): _19.MsgCreateOperatorProtoMsg;
            };
            MsgCreateOperatorResponse: {
                typeUrl: string;
                encode(_: _19.MsgCreateOperatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgCreateOperatorResponse;
                fromPartial(_: Partial<_19.MsgCreateOperatorResponse>): _19.MsgCreateOperatorResponse;
                fromAmino(_: _19.MsgCreateOperatorResponseAmino): _19.MsgCreateOperatorResponse;
                toAmino(_: _19.MsgCreateOperatorResponse): _19.MsgCreateOperatorResponseAmino;
                fromAminoMsg(object: _19.MsgCreateOperatorResponseAminoMsg): _19.MsgCreateOperatorResponse;
                fromProtoMsg(message: _19.MsgCreateOperatorResponseProtoMsg): _19.MsgCreateOperatorResponse;
                toProto(message: _19.MsgCreateOperatorResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCreateOperatorResponse): _19.MsgCreateOperatorResponseProtoMsg;
            };
            MsgRemoveOperator: {
                typeUrl: string;
                encode(message: _19.MsgRemoveOperator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgRemoveOperator;
                fromPartial(object: Partial<_19.MsgRemoveOperator>): _19.MsgRemoveOperator;
                fromAmino(object: _19.MsgRemoveOperatorAmino): _19.MsgRemoveOperator;
                toAmino(message: _19.MsgRemoveOperator): _19.MsgRemoveOperatorAmino;
                fromAminoMsg(object: _19.MsgRemoveOperatorAminoMsg): _19.MsgRemoveOperator;
                fromProtoMsg(message: _19.MsgRemoveOperatorProtoMsg): _19.MsgRemoveOperator;
                toProto(message: _19.MsgRemoveOperator): Uint8Array;
                toProtoMsg(message: _19.MsgRemoveOperator): _19.MsgRemoveOperatorProtoMsg;
            };
            MsgRemoveOperatorResponse: {
                typeUrl: string;
                encode(_: _19.MsgRemoveOperatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgRemoveOperatorResponse;
                fromPartial(_: Partial<_19.MsgRemoveOperatorResponse>): _19.MsgRemoveOperatorResponse;
                fromAmino(_: _19.MsgRemoveOperatorResponseAmino): _19.MsgRemoveOperatorResponse;
                toAmino(_: _19.MsgRemoveOperatorResponse): _19.MsgRemoveOperatorResponseAmino;
                fromAminoMsg(object: _19.MsgRemoveOperatorResponseAminoMsg): _19.MsgRemoveOperatorResponse;
                fromProtoMsg(message: _19.MsgRemoveOperatorResponseProtoMsg): _19.MsgRemoveOperatorResponse;
                toProto(message: _19.MsgRemoveOperatorResponse): Uint8Array;
                toProtoMsg(message: _19.MsgRemoveOperatorResponse): _19.MsgRemoveOperatorResponseProtoMsg;
            };
            MsgAddCollateral: {
                typeUrl: string;
                encode(message: _19.MsgAddCollateral, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgAddCollateral;
                fromPartial(object: Partial<_19.MsgAddCollateral>): _19.MsgAddCollateral;
                fromAmino(object: _19.MsgAddCollateralAmino): _19.MsgAddCollateral;
                toAmino(message: _19.MsgAddCollateral): _19.MsgAddCollateralAmino;
                fromAminoMsg(object: _19.MsgAddCollateralAminoMsg): _19.MsgAddCollateral;
                fromProtoMsg(message: _19.MsgAddCollateralProtoMsg): _19.MsgAddCollateral;
                toProto(message: _19.MsgAddCollateral): Uint8Array;
                toProtoMsg(message: _19.MsgAddCollateral): _19.MsgAddCollateralProtoMsg;
            };
            MsgAddCollateralResponse: {
                typeUrl: string;
                encode(_: _19.MsgAddCollateralResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgAddCollateralResponse;
                fromPartial(_: Partial<_19.MsgAddCollateralResponse>): _19.MsgAddCollateralResponse;
                fromAmino(_: _19.MsgAddCollateralResponseAmino): _19.MsgAddCollateralResponse;
                toAmino(_: _19.MsgAddCollateralResponse): _19.MsgAddCollateralResponseAmino;
                fromAminoMsg(object: _19.MsgAddCollateralResponseAminoMsg): _19.MsgAddCollateralResponse;
                fromProtoMsg(message: _19.MsgAddCollateralResponseProtoMsg): _19.MsgAddCollateralResponse;
                toProto(message: _19.MsgAddCollateralResponse): Uint8Array;
                toProtoMsg(message: _19.MsgAddCollateralResponse): _19.MsgAddCollateralResponseProtoMsg;
            };
            MsgReduceCollateral: {
                typeUrl: string;
                encode(message: _19.MsgReduceCollateral, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgReduceCollateral;
                fromPartial(object: Partial<_19.MsgReduceCollateral>): _19.MsgReduceCollateral;
                fromAmino(object: _19.MsgReduceCollateralAmino): _19.MsgReduceCollateral;
                toAmino(message: _19.MsgReduceCollateral): _19.MsgReduceCollateralAmino;
                fromAminoMsg(object: _19.MsgReduceCollateralAminoMsg): _19.MsgReduceCollateral;
                fromProtoMsg(message: _19.MsgReduceCollateralProtoMsg): _19.MsgReduceCollateral;
                toProto(message: _19.MsgReduceCollateral): Uint8Array;
                toProtoMsg(message: _19.MsgReduceCollateral): _19.MsgReduceCollateralProtoMsg;
            };
            MsgReduceCollateralResponse: {
                typeUrl: string;
                encode(_: _19.MsgReduceCollateralResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgReduceCollateralResponse;
                fromPartial(_: Partial<_19.MsgReduceCollateralResponse>): _19.MsgReduceCollateralResponse;
                fromAmino(_: _19.MsgReduceCollateralResponseAmino): _19.MsgReduceCollateralResponse;
                toAmino(_: _19.MsgReduceCollateralResponse): _19.MsgReduceCollateralResponseAmino;
                fromAminoMsg(object: _19.MsgReduceCollateralResponseAminoMsg): _19.MsgReduceCollateralResponse;
                fromProtoMsg(message: _19.MsgReduceCollateralResponseProtoMsg): _19.MsgReduceCollateralResponse;
                toProto(message: _19.MsgReduceCollateralResponse): Uint8Array;
                toProtoMsg(message: _19.MsgReduceCollateralResponse): _19.MsgReduceCollateralResponseProtoMsg;
            };
            MsgWithdrawReward: {
                typeUrl: string;
                encode(message: _19.MsgWithdrawReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgWithdrawReward;
                fromPartial(object: Partial<_19.MsgWithdrawReward>): _19.MsgWithdrawReward;
                fromAmino(object: _19.MsgWithdrawRewardAmino): _19.MsgWithdrawReward;
                toAmino(message: _19.MsgWithdrawReward): _19.MsgWithdrawRewardAmino;
                fromAminoMsg(object: _19.MsgWithdrawRewardAminoMsg): _19.MsgWithdrawReward;
                fromProtoMsg(message: _19.MsgWithdrawRewardProtoMsg): _19.MsgWithdrawReward;
                toProto(message: _19.MsgWithdrawReward): Uint8Array;
                toProtoMsg(message: _19.MsgWithdrawReward): _19.MsgWithdrawRewardProtoMsg;
            };
            MsgWithdrawRewardResponse: {
                typeUrl: string;
                encode(_: _19.MsgWithdrawRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgWithdrawRewardResponse;
                fromPartial(_: Partial<_19.MsgWithdrawRewardResponse>): _19.MsgWithdrawRewardResponse;
                fromAmino(_: _19.MsgWithdrawRewardResponseAmino): _19.MsgWithdrawRewardResponse;
                toAmino(_: _19.MsgWithdrawRewardResponse): _19.MsgWithdrawRewardResponseAmino;
                fromAminoMsg(object: _19.MsgWithdrawRewardResponseAminoMsg): _19.MsgWithdrawRewardResponse;
                fromProtoMsg(message: _19.MsgWithdrawRewardResponseProtoMsg): _19.MsgWithdrawRewardResponse;
                toProto(message: _19.MsgWithdrawRewardResponse): Uint8Array;
                toProtoMsg(message: _19.MsgWithdrawRewardResponse): _19.MsgWithdrawRewardResponseProtoMsg;
            };
            MsgCreateTask: {
                typeUrl: string;
                encode(message: _19.MsgCreateTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCreateTask;
                fromPartial(object: Partial<_19.MsgCreateTask>): _19.MsgCreateTask;
                fromAmino(object: _19.MsgCreateTaskAmino): _19.MsgCreateTask;
                toAmino(message: _19.MsgCreateTask): _19.MsgCreateTaskAmino;
                fromAminoMsg(object: _19.MsgCreateTaskAminoMsg): _19.MsgCreateTask;
                fromProtoMsg(message: _19.MsgCreateTaskProtoMsg): _19.MsgCreateTask;
                toProto(message: _19.MsgCreateTask): Uint8Array;
                toProtoMsg(message: _19.MsgCreateTask): _19.MsgCreateTaskProtoMsg;
            };
            MsgCreateTaskResponse: {
                typeUrl: string;
                encode(_: _19.MsgCreateTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgCreateTaskResponse;
                fromPartial(_: Partial<_19.MsgCreateTaskResponse>): _19.MsgCreateTaskResponse;
                fromAmino(_: _19.MsgCreateTaskResponseAmino): _19.MsgCreateTaskResponse;
                toAmino(_: _19.MsgCreateTaskResponse): _19.MsgCreateTaskResponseAmino;
                fromAminoMsg(object: _19.MsgCreateTaskResponseAminoMsg): _19.MsgCreateTaskResponse;
                fromProtoMsg(message: _19.MsgCreateTaskResponseProtoMsg): _19.MsgCreateTaskResponse;
                toProto(message: _19.MsgCreateTaskResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCreateTaskResponse): _19.MsgCreateTaskResponseProtoMsg;
            };
            MsgTaskResponse: {
                typeUrl: string;
                encode(message: _19.MsgTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgTaskResponse;
                fromPartial(object: Partial<_19.MsgTaskResponse>): _19.MsgTaskResponse;
                fromAmino(object: _19.MsgTaskResponseAmino): _19.MsgTaskResponse;
                toAmino(message: _19.MsgTaskResponse): _19.MsgTaskResponseAmino;
                fromAminoMsg(object: _19.MsgTaskResponseAminoMsg): _19.MsgTaskResponse;
                fromProtoMsg(message: _19.MsgTaskResponseProtoMsg): _19.MsgTaskResponse;
                toProto(message: _19.MsgTaskResponse): Uint8Array;
                toProtoMsg(message: _19.MsgTaskResponse): _19.MsgTaskResponseProtoMsg;
            };
            MsgTaskResponseResponse: {
                typeUrl: string;
                encode(_: _19.MsgTaskResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgTaskResponseResponse;
                fromPartial(_: Partial<_19.MsgTaskResponseResponse>): _19.MsgTaskResponseResponse;
                fromAmino(_: _19.MsgTaskResponseResponseAmino): _19.MsgTaskResponseResponse;
                toAmino(_: _19.MsgTaskResponseResponse): _19.MsgTaskResponseResponseAmino;
                fromAminoMsg(object: _19.MsgTaskResponseResponseAminoMsg): _19.MsgTaskResponseResponse;
                fromProtoMsg(message: _19.MsgTaskResponseResponseProtoMsg): _19.MsgTaskResponseResponse;
                toProto(message: _19.MsgTaskResponseResponse): Uint8Array;
                toProtoMsg(message: _19.MsgTaskResponseResponse): _19.MsgTaskResponseResponseProtoMsg;
            };
            MsgDeleteTask: {
                typeUrl: string;
                encode(message: _19.MsgDeleteTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgDeleteTask;
                fromPartial(object: Partial<_19.MsgDeleteTask>): _19.MsgDeleteTask;
                fromAmino(object: _19.MsgDeleteTaskAmino): _19.MsgDeleteTask;
                toAmino(message: _19.MsgDeleteTask): _19.MsgDeleteTaskAmino;
                fromAminoMsg(object: _19.MsgDeleteTaskAminoMsg): _19.MsgDeleteTask;
                fromProtoMsg(message: _19.MsgDeleteTaskProtoMsg): _19.MsgDeleteTask;
                toProto(message: _19.MsgDeleteTask): Uint8Array;
                toProtoMsg(message: _19.MsgDeleteTask): _19.MsgDeleteTaskProtoMsg;
            };
            MsgDeleteTaskResponse: {
                typeUrl: string;
                encode(_: _19.MsgDeleteTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgDeleteTaskResponse;
                fromPartial(_: Partial<_19.MsgDeleteTaskResponse>): _19.MsgDeleteTaskResponse;
                fromAmino(_: _19.MsgDeleteTaskResponseAmino): _19.MsgDeleteTaskResponse;
                toAmino(_: _19.MsgDeleteTaskResponse): _19.MsgDeleteTaskResponseAmino;
                fromAminoMsg(object: _19.MsgDeleteTaskResponseAminoMsg): _19.MsgDeleteTaskResponse;
                fromProtoMsg(message: _19.MsgDeleteTaskResponseProtoMsg): _19.MsgDeleteTaskResponse;
                toProto(message: _19.MsgDeleteTaskResponse): Uint8Array;
                toProtoMsg(message: _19.MsgDeleteTaskResponse): _19.MsgDeleteTaskResponseProtoMsg;
            };
            MsgCreateTxTask: {
                typeUrl: string;
                encode(message: _19.MsgCreateTxTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCreateTxTask;
                fromPartial(object: Partial<_19.MsgCreateTxTask>): _19.MsgCreateTxTask;
                fromAmino(object: _19.MsgCreateTxTaskAmino): _19.MsgCreateTxTask;
                toAmino(message: _19.MsgCreateTxTask): _19.MsgCreateTxTaskAmino;
                fromAminoMsg(object: _19.MsgCreateTxTaskAminoMsg): _19.MsgCreateTxTask;
                fromProtoMsg(message: _19.MsgCreateTxTaskProtoMsg): _19.MsgCreateTxTask;
                toProto(message: _19.MsgCreateTxTask): Uint8Array;
                toProtoMsg(message: _19.MsgCreateTxTask): _19.MsgCreateTxTaskProtoMsg;
            };
            MsgCreateTxTaskResponse: {
                typeUrl: string;
                encode(message: _19.MsgCreateTxTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCreateTxTaskResponse;
                fromPartial(object: Partial<_19.MsgCreateTxTaskResponse>): _19.MsgCreateTxTaskResponse;
                fromAmino(object: _19.MsgCreateTxTaskResponseAmino): _19.MsgCreateTxTaskResponse;
                toAmino(message: _19.MsgCreateTxTaskResponse): _19.MsgCreateTxTaskResponseAmino;
                fromAminoMsg(object: _19.MsgCreateTxTaskResponseAminoMsg): _19.MsgCreateTxTaskResponse;
                fromProtoMsg(message: _19.MsgCreateTxTaskResponseProtoMsg): _19.MsgCreateTxTaskResponse;
                toProto(message: _19.MsgCreateTxTaskResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCreateTxTaskResponse): _19.MsgCreateTxTaskResponseProtoMsg;
            };
            MsgTxTaskResponse: {
                typeUrl: string;
                encode(message: _19.MsgTxTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgTxTaskResponse;
                fromPartial(object: Partial<_19.MsgTxTaskResponse>): _19.MsgTxTaskResponse;
                fromAmino(object: _19.MsgTxTaskResponseAmino): _19.MsgTxTaskResponse;
                toAmino(message: _19.MsgTxTaskResponse): _19.MsgTxTaskResponseAmino;
                fromAminoMsg(object: _19.MsgTxTaskResponseAminoMsg): _19.MsgTxTaskResponse;
                fromProtoMsg(message: _19.MsgTxTaskResponseProtoMsg): _19.MsgTxTaskResponse;
                toProto(message: _19.MsgTxTaskResponse): Uint8Array;
                toProtoMsg(message: _19.MsgTxTaskResponse): _19.MsgTxTaskResponseProtoMsg;
            };
            MsgTxTaskResponseResponse: {
                typeUrl: string;
                encode(_: _19.MsgTxTaskResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgTxTaskResponseResponse;
                fromPartial(_: Partial<_19.MsgTxTaskResponseResponse>): _19.MsgTxTaskResponseResponse;
                fromAmino(_: _19.MsgTxTaskResponseResponseAmino): _19.MsgTxTaskResponseResponse;
                toAmino(_: _19.MsgTxTaskResponseResponse): _19.MsgTxTaskResponseResponseAmino;
                fromAminoMsg(object: _19.MsgTxTaskResponseResponseAminoMsg): _19.MsgTxTaskResponseResponse;
                fromProtoMsg(message: _19.MsgTxTaskResponseResponseProtoMsg): _19.MsgTxTaskResponseResponse;
                toProto(message: _19.MsgTxTaskResponseResponse): Uint8Array;
                toProtoMsg(message: _19.MsgTxTaskResponseResponse): _19.MsgTxTaskResponseResponseProtoMsg;
            };
            MsgDeleteTxTask: {
                typeUrl: string;
                encode(message: _19.MsgDeleteTxTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgDeleteTxTask;
                fromPartial(object: Partial<_19.MsgDeleteTxTask>): _19.MsgDeleteTxTask;
                fromAmino(object: _19.MsgDeleteTxTaskAmino): _19.MsgDeleteTxTask;
                toAmino(message: _19.MsgDeleteTxTask): _19.MsgDeleteTxTaskAmino;
                fromAminoMsg(object: _19.MsgDeleteTxTaskAminoMsg): _19.MsgDeleteTxTask;
                fromProtoMsg(message: _19.MsgDeleteTxTaskProtoMsg): _19.MsgDeleteTxTask;
                toProto(message: _19.MsgDeleteTxTask): Uint8Array;
                toProtoMsg(message: _19.MsgDeleteTxTask): _19.MsgDeleteTxTaskProtoMsg;
            };
            MsgDeleteTxTaskResponse: {
                typeUrl: string;
                encode(_: _19.MsgDeleteTxTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgDeleteTxTaskResponse;
                fromPartial(_: Partial<_19.MsgDeleteTxTaskResponse>): _19.MsgDeleteTxTaskResponse;
                fromAmino(_: _19.MsgDeleteTxTaskResponseAmino): _19.MsgDeleteTxTaskResponse;
                toAmino(_: _19.MsgDeleteTxTaskResponse): _19.MsgDeleteTxTaskResponseAmino;
                fromAminoMsg(object: _19.MsgDeleteTxTaskResponseAminoMsg): _19.MsgDeleteTxTaskResponse;
                fromProtoMsg(message: _19.MsgDeleteTxTaskResponseProtoMsg): _19.MsgDeleteTxTaskResponse;
                toProto(message: _19.MsgDeleteTxTaskResponse): Uint8Array;
                toProtoMsg(message: _19.MsgDeleteTxTaskResponse): _19.MsgDeleteTxTaskResponseProtoMsg;
            };
            QueryOperatorRequest: {
                typeUrl: string;
                encode(message: _18.QueryOperatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryOperatorRequest;
                fromPartial(object: Partial<_18.QueryOperatorRequest>): _18.QueryOperatorRequest;
                fromAmino(object: _18.QueryOperatorRequestAmino): _18.QueryOperatorRequest;
                toAmino(message: _18.QueryOperatorRequest): _18.QueryOperatorRequestAmino;
                fromAminoMsg(object: _18.QueryOperatorRequestAminoMsg): _18.QueryOperatorRequest;
                fromProtoMsg(message: _18.QueryOperatorRequestProtoMsg): _18.QueryOperatorRequest;
                toProto(message: _18.QueryOperatorRequest): Uint8Array;
                toProtoMsg(message: _18.QueryOperatorRequest): _18.QueryOperatorRequestProtoMsg;
            };
            QueryOperatorResponse: {
                typeUrl: string;
                encode(message: _18.QueryOperatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryOperatorResponse;
                fromPartial(object: Partial<_18.QueryOperatorResponse>): _18.QueryOperatorResponse;
                fromAmino(object: _18.QueryOperatorResponseAmino): _18.QueryOperatorResponse;
                toAmino(message: _18.QueryOperatorResponse): _18.QueryOperatorResponseAmino;
                fromAminoMsg(object: _18.QueryOperatorResponseAminoMsg): _18.QueryOperatorResponse;
                fromProtoMsg(message: _18.QueryOperatorResponseProtoMsg): _18.QueryOperatorResponse;
                toProto(message: _18.QueryOperatorResponse): Uint8Array;
                toProtoMsg(message: _18.QueryOperatorResponse): _18.QueryOperatorResponseProtoMsg;
            };
            QueryOperatorsRequest: {
                typeUrl: string;
                encode(_: _18.QueryOperatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.QueryOperatorsRequest;
                fromPartial(_: Partial<_18.QueryOperatorsRequest>): _18.QueryOperatorsRequest;
                fromAmino(_: _18.QueryOperatorsRequestAmino): _18.QueryOperatorsRequest;
                toAmino(_: _18.QueryOperatorsRequest): _18.QueryOperatorsRequestAmino;
                fromAminoMsg(object: _18.QueryOperatorsRequestAminoMsg): _18.QueryOperatorsRequest;
                fromProtoMsg(message: _18.QueryOperatorsRequestProtoMsg): _18.QueryOperatorsRequest;
                toProto(message: _18.QueryOperatorsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryOperatorsRequest): _18.QueryOperatorsRequestProtoMsg;
            };
            QueryOperatorsResponse: {
                typeUrl: string;
                encode(message: _18.QueryOperatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryOperatorsResponse;
                fromPartial(object: Partial<_18.QueryOperatorsResponse>): _18.QueryOperatorsResponse;
                fromAmino(object: _18.QueryOperatorsResponseAmino): _18.QueryOperatorsResponse;
                toAmino(message: _18.QueryOperatorsResponse): _18.QueryOperatorsResponseAmino;
                fromAminoMsg(object: _18.QueryOperatorsResponseAminoMsg): _18.QueryOperatorsResponse;
                fromProtoMsg(message: _18.QueryOperatorsResponseProtoMsg): _18.QueryOperatorsResponse;
                toProto(message: _18.QueryOperatorsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryOperatorsResponse): _18.QueryOperatorsResponseProtoMsg;
            };
            QueryWithdrawsRequest: {
                typeUrl: string;
                encode(_: _18.QueryWithdrawsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.QueryWithdrawsRequest;
                fromPartial(_: Partial<_18.QueryWithdrawsRequest>): _18.QueryWithdrawsRequest;
                fromAmino(_: _18.QueryWithdrawsRequestAmino): _18.QueryWithdrawsRequest;
                toAmino(_: _18.QueryWithdrawsRequest): _18.QueryWithdrawsRequestAmino;
                fromAminoMsg(object: _18.QueryWithdrawsRequestAminoMsg): _18.QueryWithdrawsRequest;
                fromProtoMsg(message: _18.QueryWithdrawsRequestProtoMsg): _18.QueryWithdrawsRequest;
                toProto(message: _18.QueryWithdrawsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryWithdrawsRequest): _18.QueryWithdrawsRequestProtoMsg;
            };
            QueryWithdrawsResponse: {
                typeUrl: string;
                encode(message: _18.QueryWithdrawsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryWithdrawsResponse;
                fromPartial(object: Partial<_18.QueryWithdrawsResponse>): _18.QueryWithdrawsResponse;
                fromAmino(object: _18.QueryWithdrawsResponseAmino): _18.QueryWithdrawsResponse;
                toAmino(message: _18.QueryWithdrawsResponse): _18.QueryWithdrawsResponseAmino;
                fromAminoMsg(object: _18.QueryWithdrawsResponseAminoMsg): _18.QueryWithdrawsResponse;
                fromProtoMsg(message: _18.QueryWithdrawsResponseProtoMsg): _18.QueryWithdrawsResponse;
                toProto(message: _18.QueryWithdrawsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryWithdrawsResponse): _18.QueryWithdrawsResponseProtoMsg;
            };
            QueryTaskRequest: {
                typeUrl: string;
                encode(message: _18.QueryTaskRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryTaskRequest;
                fromPartial(object: Partial<_18.QueryTaskRequest>): _18.QueryTaskRequest;
                fromAmino(object: _18.QueryTaskRequestAmino): _18.QueryTaskRequest;
                toAmino(message: _18.QueryTaskRequest): _18.QueryTaskRequestAmino;
                fromAminoMsg(object: _18.QueryTaskRequestAminoMsg): _18.QueryTaskRequest;
                fromProtoMsg(message: _18.QueryTaskRequestProtoMsg): _18.QueryTaskRequest;
                toProto(message: _18.QueryTaskRequest): Uint8Array;
                toProtoMsg(message: _18.QueryTaskRequest): _18.QueryTaskRequestProtoMsg;
            };
            QueryTaskResponse: {
                typeUrl: string;
                encode(message: _18.QueryTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryTaskResponse;
                fromPartial(object: Partial<_18.QueryTaskResponse>): _18.QueryTaskResponse;
                fromAmino(object: _18.QueryTaskResponseAmino): _18.QueryTaskResponse;
                toAmino(message: _18.QueryTaskResponse): _18.QueryTaskResponseAmino;
                fromAminoMsg(object: _18.QueryTaskResponseAminoMsg): _18.QueryTaskResponse;
                fromProtoMsg(message: _18.QueryTaskResponseProtoMsg): _18.QueryTaskResponse;
                toProto(message: _18.QueryTaskResponse): Uint8Array;
                toProtoMsg(message: _18.QueryTaskResponse): _18.QueryTaskResponseProtoMsg;
            };
            QueryTxTaskRequest: {
                typeUrl: string;
                encode(message: _18.QueryTxTaskRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryTxTaskRequest;
                fromPartial(object: Partial<_18.QueryTxTaskRequest>): _18.QueryTxTaskRequest;
                fromAmino(object: _18.QueryTxTaskRequestAmino): _18.QueryTxTaskRequest;
                toAmino(message: _18.QueryTxTaskRequest): _18.QueryTxTaskRequestAmino;
                fromAminoMsg(object: _18.QueryTxTaskRequestAminoMsg): _18.QueryTxTaskRequest;
                fromProtoMsg(message: _18.QueryTxTaskRequestProtoMsg): _18.QueryTxTaskRequest;
                toProto(message: _18.QueryTxTaskRequest): Uint8Array;
                toProtoMsg(message: _18.QueryTxTaskRequest): _18.QueryTxTaskRequestProtoMsg;
            };
            QueryTxTaskResponse: {
                typeUrl: string;
                encode(message: _18.QueryTxTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryTxTaskResponse;
                fromPartial(object: Partial<_18.QueryTxTaskResponse>): _18.QueryTxTaskResponse;
                fromAmino(object: _18.QueryTxTaskResponseAmino): _18.QueryTxTaskResponse;
                toAmino(message: _18.QueryTxTaskResponse): _18.QueryTxTaskResponseAmino;
                fromAminoMsg(object: _18.QueryTxTaskResponseAminoMsg): _18.QueryTxTaskResponse;
                fromProtoMsg(message: _18.QueryTxTaskResponseProtoMsg): _18.QueryTxTaskResponse;
                toProto(message: _18.QueryTxTaskResponse): Uint8Array;
                toProtoMsg(message: _18.QueryTxTaskResponse): _18.QueryTxTaskResponseProtoMsg;
            };
            QueryResponseRequest: {
                typeUrl: string;
                encode(message: _18.QueryResponseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryResponseRequest;
                fromPartial(object: Partial<_18.QueryResponseRequest>): _18.QueryResponseRequest;
                fromAmino(object: _18.QueryResponseRequestAmino): _18.QueryResponseRequest;
                toAmino(message: _18.QueryResponseRequest): _18.QueryResponseRequestAmino;
                fromAminoMsg(object: _18.QueryResponseRequestAminoMsg): _18.QueryResponseRequest;
                fromProtoMsg(message: _18.QueryResponseRequestProtoMsg): _18.QueryResponseRequest;
                toProto(message: _18.QueryResponseRequest): Uint8Array;
                toProtoMsg(message: _18.QueryResponseRequest): _18.QueryResponseRequestProtoMsg;
            };
            QueryResponseResponse: {
                typeUrl: string;
                encode(message: _18.QueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryResponseResponse;
                fromPartial(object: Partial<_18.QueryResponseResponse>): _18.QueryResponseResponse;
                fromAmino(object: _18.QueryResponseResponseAmino): _18.QueryResponseResponse;
                toAmino(message: _18.QueryResponseResponse): _18.QueryResponseResponseAmino;
                fromAminoMsg(object: _18.QueryResponseResponseAminoMsg): _18.QueryResponseResponse;
                fromProtoMsg(message: _18.QueryResponseResponseProtoMsg): _18.QueryResponseResponse;
                toProto(message: _18.QueryResponseResponse): Uint8Array;
                toProtoMsg(message: _18.QueryResponseResponse): _18.QueryResponseResponseProtoMsg;
            };
            QueryTxResponseRequest: {
                typeUrl: string;
                encode(message: _18.QueryTxResponseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryTxResponseRequest;
                fromPartial(object: Partial<_18.QueryTxResponseRequest>): _18.QueryTxResponseRequest;
                fromAmino(object: _18.QueryTxResponseRequestAmino): _18.QueryTxResponseRequest;
                toAmino(message: _18.QueryTxResponseRequest): _18.QueryTxResponseRequestAmino;
                fromAminoMsg(object: _18.QueryTxResponseRequestAminoMsg): _18.QueryTxResponseRequest;
                fromProtoMsg(message: _18.QueryTxResponseRequestProtoMsg): _18.QueryTxResponseRequest;
                toProto(message: _18.QueryTxResponseRequest): Uint8Array;
                toProtoMsg(message: _18.QueryTxResponseRequest): _18.QueryTxResponseRequestProtoMsg;
            };
            QueryTxResponseResponse: {
                typeUrl: string;
                encode(message: _18.QueryTxResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryTxResponseResponse;
                fromPartial(object: Partial<_18.QueryTxResponseResponse>): _18.QueryTxResponseResponse;
                fromAmino(object: _18.QueryTxResponseResponseAmino): _18.QueryTxResponseResponse;
                toAmino(message: _18.QueryTxResponseResponse): _18.QueryTxResponseResponseAmino;
                fromAminoMsg(object: _18.QueryTxResponseResponseAminoMsg): _18.QueryTxResponseResponse;
                fromProtoMsg(message: _18.QueryTxResponseResponseProtoMsg): _18.QueryTxResponseResponse;
                toProto(message: _18.QueryTxResponseResponse): Uint8Array;
                toProtoMsg(message: _18.QueryTxResponseResponse): _18.QueryTxResponseResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _18.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.QueryParamsRequest;
                fromPartial(_: Partial<_18.QueryParamsRequest>): _18.QueryParamsRequest;
                fromAmino(_: _18.QueryParamsRequestAmino): _18.QueryParamsRequest;
                toAmino(_: _18.QueryParamsRequest): _18.QueryParamsRequestAmino;
                fromAminoMsg(object: _18.QueryParamsRequestAminoMsg): _18.QueryParamsRequest;
                fromProtoMsg(message: _18.QueryParamsRequestProtoMsg): _18.QueryParamsRequest;
                toProto(message: _18.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryParamsRequest): _18.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _18.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryParamsResponse;
                fromPartial(object: Partial<_18.QueryParamsResponse>): _18.QueryParamsResponse;
                fromAmino(object: _18.QueryParamsResponseAmino): _18.QueryParamsResponse;
                toAmino(message: _18.QueryParamsResponse): _18.QueryParamsResponseAmino;
                fromAminoMsg(object: _18.QueryParamsResponseAminoMsg): _18.QueryParamsResponse;
                fromProtoMsg(message: _18.QueryParamsResponseProtoMsg): _18.QueryParamsResponse;
                toProto(message: _18.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryParamsResponse): _18.QueryParamsResponseProtoMsg;
            };
            taskStatusFromJSON(object: any): _17.TaskStatus;
            taskStatusToJSON(object: _17.TaskStatus): string;
            TaskStatus: typeof _17.TaskStatus;
            TaskStatusSDKType: typeof _17.TaskStatus;
            TaskStatusAmino: typeof _17.TaskStatus;
            Withdraw: {
                typeUrl: string;
                encode(message: _17.Withdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Withdraw;
                fromPartial(object: Partial<_17.Withdraw>): _17.Withdraw;
                fromAmino(object: _17.WithdrawAmino): _17.Withdraw;
                toAmino(message: _17.Withdraw): _17.WithdrawAmino;
                fromAminoMsg(object: _17.WithdrawAminoMsg): _17.Withdraw;
                fromProtoMsg(message: _17.WithdrawProtoMsg): _17.Withdraw;
                toProto(message: _17.Withdraw): Uint8Array;
                toProtoMsg(message: _17.Withdraw): _17.WithdrawProtoMsg;
            };
            Task: {
                typeUrl: string;
                encode(message: _17.Task, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Task;
                fromPartial(object: Partial<_17.Task>): _17.Task;
                fromAmino(object: _17.TaskAmino): _17.Task;
                toAmino(message: _17.Task): _17.TaskAmino;
                fromAminoMsg(object: _17.TaskAminoMsg): _17.Task;
                fromProtoMsg(message: _17.TaskProtoMsg): _17.Task;
                toProto(message: _17.Task): Uint8Array;
                toProtoMsg(message: _17.Task): _17.TaskProtoMsg;
            };
            Response: {
                typeUrl: string;
                encode(message: _17.Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Response;
                fromPartial(object: Partial<_17.Response>): _17.Response;
                fromAmino(object: _17.ResponseAmino): _17.Response;
                toAmino(message: _17.Response): _17.ResponseAmino;
                fromAminoMsg(object: _17.ResponseAminoMsg): _17.Response;
                fromProtoMsg(message: _17.ResponseProtoMsg): _17.Response;
                toProto(message: _17.Response): Uint8Array;
                toProtoMsg(message: _17.Response): _17.ResponseProtoMsg;
            };
            Operator: {
                typeUrl: string;
                encode(message: _17.Operator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Operator;
                fromPartial(object: Partial<_17.Operator>): _17.Operator;
                fromAmino(object: _17.OperatorAmino): _17.Operator;
                toAmino(message: _17.Operator): _17.OperatorAmino;
                fromAminoMsg(object: _17.OperatorAminoMsg): _17.Operator;
                fromProtoMsg(message: _17.OperatorProtoMsg): _17.Operator;
                toProto(message: _17.Operator): Uint8Array;
                toProtoMsg(message: _17.Operator): _17.OperatorProtoMsg;
            };
            TaskParams: {
                typeUrl: string;
                encode(message: _17.TaskParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.TaskParams;
                fromPartial(object: Partial<_17.TaskParams>): _17.TaskParams;
                fromAmino(object: _17.TaskParamsAmino): _17.TaskParams;
                toAmino(message: _17.TaskParams): _17.TaskParamsAmino;
                fromAminoMsg(object: _17.TaskParamsAminoMsg): _17.TaskParams;
                fromProtoMsg(message: _17.TaskParamsProtoMsg): _17.TaskParams;
                toProto(message: _17.TaskParams): Uint8Array;
                toProtoMsg(message: _17.TaskParams): _17.TaskParamsProtoMsg;
            };
            LockedPoolParams: {
                typeUrl: string;
                encode(message: _17.LockedPoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.LockedPoolParams;
                fromPartial(object: Partial<_17.LockedPoolParams>): _17.LockedPoolParams;
                fromAmino(object: _17.LockedPoolParamsAmino): _17.LockedPoolParams;
                toAmino(message: _17.LockedPoolParams): _17.LockedPoolParamsAmino;
                fromAminoMsg(object: _17.LockedPoolParamsAminoMsg): _17.LockedPoolParams;
                fromProtoMsg(message: _17.LockedPoolParamsProtoMsg): _17.LockedPoolParams;
                toProto(message: _17.LockedPoolParams): Uint8Array;
                toProtoMsg(message: _17.LockedPoolParams): _17.LockedPoolParamsProtoMsg;
            };
            TaskID: {
                typeUrl: string;
                encode(message: _17.TaskID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.TaskID;
                fromPartial(object: Partial<_17.TaskID>): _17.TaskID;
                fromAmino(object: _17.TaskIDAmino): _17.TaskID;
                toAmino(message: _17.TaskID): _17.TaskIDAmino;
                fromAminoMsg(object: _17.TaskIDAminoMsg): _17.TaskID;
                fromProtoMsg(message: _17.TaskIDProtoMsg): _17.TaskID;
                toProto(message: _17.TaskID): Uint8Array;
                toProtoMsg(message: _17.TaskID): _17.TaskIDProtoMsg;
            };
            TaskIDs: {
                typeUrl: string;
                encode(message: _17.TaskIDs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.TaskIDs;
                fromPartial(object: Partial<_17.TaskIDs>): _17.TaskIDs;
                fromAmino(object: _17.TaskIDsAmino): _17.TaskIDs;
                toAmino(message: _17.TaskIDs): _17.TaskIDsAmino;
                fromAminoMsg(object: _17.TaskIDsAminoMsg): _17.TaskIDs;
                fromProtoMsg(message: _17.TaskIDsProtoMsg): _17.TaskIDs;
                toProto(message: _17.TaskIDs): Uint8Array;
                toProtoMsg(message: _17.TaskIDs): _17.TaskIDsProtoMsg;
            };
            CoinsProto: {
                typeUrl: string;
                encode(message: _17.CoinsProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.CoinsProto;
                fromPartial(object: Partial<_17.CoinsProto>): _17.CoinsProto;
                fromAmino(object: _17.CoinsProtoAmino): _17.CoinsProto;
                toAmino(message: _17.CoinsProto): _17.CoinsProtoAmino;
                fromAminoMsg(object: _17.CoinsProtoAminoMsg): _17.CoinsProto;
                fromProtoMsg(message: _17.CoinsProtoProtoMsg): _17.CoinsProto;
                toProto(message: _17.CoinsProto): Uint8Array;
                toProtoMsg(message: _17.CoinsProto): _17.CoinsProtoProtoMsg;
            };
            TxTask: {
                typeUrl: string;
                encode(message: _17.TxTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.TxTask;
                fromPartial(object: Partial<_17.TxTask>): _17.TxTask;
                fromAmino(object: _17.TxTaskAmino): _17.TxTask;
                toAmino(message: _17.TxTask): _17.TxTaskAmino;
                fromAminoMsg(object: _17.TxTaskAminoMsg): _17.TxTask;
                fromProtoMsg(message: _17.TxTaskProtoMsg): _17.TxTask;
                toProto(message: _17.TxTask): Uint8Array;
                toProtoMsg(message: _17.TxTask): _17.TxTaskProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _16.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
                toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
                fromAminoMsg(object: _16.GenesisStateAminoMsg): _16.GenesisState;
                fromProtoMsg(message: _16.GenesisStateProtoMsg): _16.GenesisState;
                toProto(message: _16.GenesisState): Uint8Array;
                toProtoMsg(message: _16.GenesisState): _16.GenesisStateProtoMsg;
            };
        };
    }
    namespace shield {
        const v1alpha1: {
            MsgClientImpl: typeof _155.MsgClientImpl;
            QueryClientImpl: typeof _148.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                pool(request: _21.QueryPoolRequest): Promise<_21.QueryPoolResponse>;
                sponsor(request: _21.QuerySponsorRequest): Promise<_21.QuerySponsorResponse>;
                pools(request?: _21.QueryPoolsRequest): Promise<_21.QueryPoolsResponse>;
                poolPurchaseLists(request: _21.QueryPoolPurchaseListsRequest): Promise<_21.QueryPurchaseListsResponse>;
                purchaseLists(request: _21.QueryPurchaseListsRequest): Promise<_21.QueryPurchaseListsResponse>;
                purchaseList(request: _21.QueryPurchaseListRequest): Promise<_21.QueryPurchaseListResponse>;
                purchases(request?: _21.QueryPurchasesRequest): Promise<_21.QueryPurchasesResponse>;
                provider(request: _21.QueryProviderRequest): Promise<_21.QueryProviderResponse>;
                providers(request?: _21.QueryProvidersRequest): Promise<_21.QueryProvidersResponse>;
                poolParams(request?: _21.QueryPoolParamsRequest): Promise<_21.QueryPoolParamsResponse>;
                claimParams(request?: _21.QueryClaimParamsRequest): Promise<_21.QueryClaimParamsResponse>;
                distrParams(request?: _21.QueryDistrParamsRequest): Promise<_21.QueryDistrParamsResponse>;
                shieldStatus(request?: _21.QueryShieldStatusRequest): Promise<_21.QueryShieldStatusResponse>;
                shieldStaking(request: _21.QueryShieldStakingRequest): Promise<_21.QueryShieldStakingResponse>;
                shieldStakingRate(request?: _21.QueryShieldStakingRateRequest): Promise<_21.QueryShieldStakingRateResponse>;
                reimbursement(request: _21.QueryReimbursementRequest): Promise<_21.QueryReimbursementResponse>;
                reimbursements(request?: _21.QueryReimbursementsRequest): Promise<_21.QueryReimbursementsResponse>;
            };
            LCDQueryClient: typeof _142.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createPool(value: _23.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePool(value: _23.MsgUpdatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pausePool(value: _23.MsgPausePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    resumePool(value: _23.MsgResumePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositCollateral(value: _23.MsgDepositCollateral): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawCollateral(value: _23.MsgWithdrawCollateral): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawRewards(value: _23.MsgWithdrawRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawForeignRewards(value: _23.MsgWithdrawForeignRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    purchaseShield(value: _23.MsgPurchaseShield): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawReimbursement(value: _23.MsgWithdrawReimbursement): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateSponsor(value: _23.MsgUpdateSponsor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    stakeForShield(value: _23.MsgStakeForShield): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unstakeFromShield(value: _23.MsgUnstakeFromShield): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPool(value: _23.MsgCreatePool): {
                        typeUrl: string;
                        value: _23.MsgCreatePool;
                    };
                    updatePool(value: _23.MsgUpdatePool): {
                        typeUrl: string;
                        value: _23.MsgUpdatePool;
                    };
                    pausePool(value: _23.MsgPausePool): {
                        typeUrl: string;
                        value: _23.MsgPausePool;
                    };
                    resumePool(value: _23.MsgResumePool): {
                        typeUrl: string;
                        value: _23.MsgResumePool;
                    };
                    depositCollateral(value: _23.MsgDepositCollateral): {
                        typeUrl: string;
                        value: _23.MsgDepositCollateral;
                    };
                    withdrawCollateral(value: _23.MsgWithdrawCollateral): {
                        typeUrl: string;
                        value: _23.MsgWithdrawCollateral;
                    };
                    withdrawRewards(value: _23.MsgWithdrawRewards): {
                        typeUrl: string;
                        value: _23.MsgWithdrawRewards;
                    };
                    withdrawForeignRewards(value: _23.MsgWithdrawForeignRewards): {
                        typeUrl: string;
                        value: _23.MsgWithdrawForeignRewards;
                    };
                    purchaseShield(value: _23.MsgPurchaseShield): {
                        typeUrl: string;
                        value: _23.MsgPurchaseShield;
                    };
                    withdrawReimbursement(value: _23.MsgWithdrawReimbursement): {
                        typeUrl: string;
                        value: _23.MsgWithdrawReimbursement;
                    };
                    updateSponsor(value: _23.MsgUpdateSponsor): {
                        typeUrl: string;
                        value: _23.MsgUpdateSponsor;
                    };
                    stakeForShield(value: _23.MsgStakeForShield): {
                        typeUrl: string;
                        value: _23.MsgStakeForShield;
                    };
                    unstakeFromShield(value: _23.MsgUnstakeFromShield): {
                        typeUrl: string;
                        value: _23.MsgUnstakeFromShield;
                    };
                };
                fromJSON: {
                    createPool(value: any): {
                        typeUrl: string;
                        value: _23.MsgCreatePool;
                    };
                    updatePool(value: any): {
                        typeUrl: string;
                        value: _23.MsgUpdatePool;
                    };
                    pausePool(value: any): {
                        typeUrl: string;
                        value: _23.MsgPausePool;
                    };
                    resumePool(value: any): {
                        typeUrl: string;
                        value: _23.MsgResumePool;
                    };
                    depositCollateral(value: any): {
                        typeUrl: string;
                        value: _23.MsgDepositCollateral;
                    };
                    withdrawCollateral(value: any): {
                        typeUrl: string;
                        value: _23.MsgWithdrawCollateral;
                    };
                    withdrawRewards(value: any): {
                        typeUrl: string;
                        value: _23.MsgWithdrawRewards;
                    };
                    withdrawForeignRewards(value: any): {
                        typeUrl: string;
                        value: _23.MsgWithdrawForeignRewards;
                    };
                    purchaseShield(value: any): {
                        typeUrl: string;
                        value: _23.MsgPurchaseShield;
                    };
                    withdrawReimbursement(value: any): {
                        typeUrl: string;
                        value: _23.MsgWithdrawReimbursement;
                    };
                    updateSponsor(value: any): {
                        typeUrl: string;
                        value: _23.MsgUpdateSponsor;
                    };
                    stakeForShield(value: any): {
                        typeUrl: string;
                        value: _23.MsgStakeForShield;
                    };
                    unstakeFromShield(value: any): {
                        typeUrl: string;
                        value: _23.MsgUnstakeFromShield;
                    };
                };
                fromPartial: {
                    createPool(value: _23.MsgCreatePool): {
                        typeUrl: string;
                        value: _23.MsgCreatePool;
                    };
                    updatePool(value: _23.MsgUpdatePool): {
                        typeUrl: string;
                        value: _23.MsgUpdatePool;
                    };
                    pausePool(value: _23.MsgPausePool): {
                        typeUrl: string;
                        value: _23.MsgPausePool;
                    };
                    resumePool(value: _23.MsgResumePool): {
                        typeUrl: string;
                        value: _23.MsgResumePool;
                    };
                    depositCollateral(value: _23.MsgDepositCollateral): {
                        typeUrl: string;
                        value: _23.MsgDepositCollateral;
                    };
                    withdrawCollateral(value: _23.MsgWithdrawCollateral): {
                        typeUrl: string;
                        value: _23.MsgWithdrawCollateral;
                    };
                    withdrawRewards(value: _23.MsgWithdrawRewards): {
                        typeUrl: string;
                        value: _23.MsgWithdrawRewards;
                    };
                    withdrawForeignRewards(value: _23.MsgWithdrawForeignRewards): {
                        typeUrl: string;
                        value: _23.MsgWithdrawForeignRewards;
                    };
                    purchaseShield(value: _23.MsgPurchaseShield): {
                        typeUrl: string;
                        value: _23.MsgPurchaseShield;
                    };
                    withdrawReimbursement(value: _23.MsgWithdrawReimbursement): {
                        typeUrl: string;
                        value: _23.MsgWithdrawReimbursement;
                    };
                    updateSponsor(value: _23.MsgUpdateSponsor): {
                        typeUrl: string;
                        value: _23.MsgUpdateSponsor;
                    };
                    stakeForShield(value: _23.MsgStakeForShield): {
                        typeUrl: string;
                        value: _23.MsgStakeForShield;
                    };
                    unstakeFromShield(value: _23.MsgUnstakeFromShield): {
                        typeUrl: string;
                        value: _23.MsgUnstakeFromShield;
                    };
                };
            };
            AminoConverter: {
                "/shentu.shield.v1alpha1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: (message: _23.MsgCreatePool) => _23.MsgCreatePoolAmino;
                    fromAmino: (object: _23.MsgCreatePoolAmino) => _23.MsgCreatePool;
                };
                "/shentu.shield.v1alpha1.MsgUpdatePool": {
                    aminoType: string;
                    toAmino: (message: _23.MsgUpdatePool) => _23.MsgUpdatePoolAmino;
                    fromAmino: (object: _23.MsgUpdatePoolAmino) => _23.MsgUpdatePool;
                };
                "/shentu.shield.v1alpha1.MsgPausePool": {
                    aminoType: string;
                    toAmino: (message: _23.MsgPausePool) => _23.MsgPausePoolAmino;
                    fromAmino: (object: _23.MsgPausePoolAmino) => _23.MsgPausePool;
                };
                "/shentu.shield.v1alpha1.MsgResumePool": {
                    aminoType: string;
                    toAmino: (message: _23.MsgResumePool) => _23.MsgResumePoolAmino;
                    fromAmino: (object: _23.MsgResumePoolAmino) => _23.MsgResumePool;
                };
                "/shentu.shield.v1alpha1.MsgDepositCollateral": {
                    aminoType: string;
                    toAmino: (message: _23.MsgDepositCollateral) => _23.MsgDepositCollateralAmino;
                    fromAmino: (object: _23.MsgDepositCollateralAmino) => _23.MsgDepositCollateral;
                };
                "/shentu.shield.v1alpha1.MsgWithdrawCollateral": {
                    aminoType: string;
                    toAmino: (message: _23.MsgWithdrawCollateral) => _23.MsgWithdrawCollateralAmino;
                    fromAmino: (object: _23.MsgWithdrawCollateralAmino) => _23.MsgWithdrawCollateral;
                };
                "/shentu.shield.v1alpha1.MsgWithdrawRewards": {
                    aminoType: string;
                    toAmino: (message: _23.MsgWithdrawRewards) => _23.MsgWithdrawRewardsAmino;
                    fromAmino: (object: _23.MsgWithdrawRewardsAmino) => _23.MsgWithdrawRewards;
                };
                "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards": {
                    aminoType: string;
                    toAmino: (message: _23.MsgWithdrawForeignRewards) => _23.MsgWithdrawForeignRewardsAmino;
                    fromAmino: (object: _23.MsgWithdrawForeignRewardsAmino) => _23.MsgWithdrawForeignRewards;
                };
                "/shentu.shield.v1alpha1.MsgPurchaseShield": {
                    aminoType: string;
                    toAmino: (message: _23.MsgPurchaseShield) => _23.MsgPurchaseShieldAmino;
                    fromAmino: (object: _23.MsgPurchaseShieldAmino) => _23.MsgPurchaseShield;
                };
                "/shentu.shield.v1alpha1.MsgWithdrawReimbursement": {
                    aminoType: string;
                    toAmino: (message: _23.MsgWithdrawReimbursement) => _23.MsgWithdrawReimbursementAmino;
                    fromAmino: (object: _23.MsgWithdrawReimbursementAmino) => _23.MsgWithdrawReimbursement;
                };
                "/shentu.shield.v1alpha1.MsgUpdateSponsor": {
                    aminoType: string;
                    toAmino: (message: _23.MsgUpdateSponsor) => _23.MsgUpdateSponsorAmino;
                    fromAmino: (object: _23.MsgUpdateSponsorAmino) => _23.MsgUpdateSponsor;
                };
                "/shentu.shield.v1alpha1.MsgStakeForShield": {
                    aminoType: string;
                    toAmino: (message: _23.MsgStakeForShield) => _23.MsgStakeForShieldAmino;
                    fromAmino: (object: _23.MsgStakeForShieldAmino) => _23.MsgStakeForShield;
                };
                "/shentu.shield.v1alpha1.MsgUnstakeFromShield": {
                    aminoType: string;
                    toAmino: (message: _23.MsgUnstakeFromShield) => _23.MsgUnstakeFromShieldAmino;
                    fromAmino: (object: _23.MsgUnstakeFromShieldAmino) => _23.MsgUnstakeFromShield;
                };
            };
            MsgCreatePool: {
                typeUrl: string;
                encode(message: _23.MsgCreatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgCreatePool;
                fromPartial(object: Partial<_23.MsgCreatePool>): _23.MsgCreatePool;
                fromAmino(object: _23.MsgCreatePoolAmino): _23.MsgCreatePool;
                toAmino(message: _23.MsgCreatePool): _23.MsgCreatePoolAmino;
                fromAminoMsg(object: _23.MsgCreatePoolAminoMsg): _23.MsgCreatePool;
                fromProtoMsg(message: _23.MsgCreatePoolProtoMsg): _23.MsgCreatePool;
                toProto(message: _23.MsgCreatePool): Uint8Array;
                toProtoMsg(message: _23.MsgCreatePool): _23.MsgCreatePoolProtoMsg;
            };
            MsgCreatePoolResponse: {
                typeUrl: string;
                encode(_: _23.MsgCreatePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgCreatePoolResponse;
                fromPartial(_: Partial<_23.MsgCreatePoolResponse>): _23.MsgCreatePoolResponse;
                fromAmino(_: _23.MsgCreatePoolResponseAmino): _23.MsgCreatePoolResponse;
                toAmino(_: _23.MsgCreatePoolResponse): _23.MsgCreatePoolResponseAmino;
                fromAminoMsg(object: _23.MsgCreatePoolResponseAminoMsg): _23.MsgCreatePoolResponse;
                fromProtoMsg(message: _23.MsgCreatePoolResponseProtoMsg): _23.MsgCreatePoolResponse;
                toProto(message: _23.MsgCreatePoolResponse): Uint8Array;
                toProtoMsg(message: _23.MsgCreatePoolResponse): _23.MsgCreatePoolResponseProtoMsg;
            };
            MsgUpdatePool: {
                typeUrl: string;
                encode(message: _23.MsgUpdatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgUpdatePool;
                fromPartial(object: Partial<_23.MsgUpdatePool>): _23.MsgUpdatePool;
                fromAmino(object: _23.MsgUpdatePoolAmino): _23.MsgUpdatePool;
                toAmino(message: _23.MsgUpdatePool): _23.MsgUpdatePoolAmino;
                fromAminoMsg(object: _23.MsgUpdatePoolAminoMsg): _23.MsgUpdatePool;
                fromProtoMsg(message: _23.MsgUpdatePoolProtoMsg): _23.MsgUpdatePool;
                toProto(message: _23.MsgUpdatePool): Uint8Array;
                toProtoMsg(message: _23.MsgUpdatePool): _23.MsgUpdatePoolProtoMsg;
            };
            MsgUpdatePoolResponse: {
                typeUrl: string;
                encode(_: _23.MsgUpdatePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgUpdatePoolResponse;
                fromPartial(_: Partial<_23.MsgUpdatePoolResponse>): _23.MsgUpdatePoolResponse;
                fromAmino(_: _23.MsgUpdatePoolResponseAmino): _23.MsgUpdatePoolResponse;
                toAmino(_: _23.MsgUpdatePoolResponse): _23.MsgUpdatePoolResponseAmino;
                fromAminoMsg(object: _23.MsgUpdatePoolResponseAminoMsg): _23.MsgUpdatePoolResponse;
                fromProtoMsg(message: _23.MsgUpdatePoolResponseProtoMsg): _23.MsgUpdatePoolResponse;
                toProto(message: _23.MsgUpdatePoolResponse): Uint8Array;
                toProtoMsg(message: _23.MsgUpdatePoolResponse): _23.MsgUpdatePoolResponseProtoMsg;
            };
            MsgPausePool: {
                typeUrl: string;
                encode(message: _23.MsgPausePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgPausePool;
                fromPartial(object: Partial<_23.MsgPausePool>): _23.MsgPausePool;
                fromAmino(object: _23.MsgPausePoolAmino): _23.MsgPausePool;
                toAmino(message: _23.MsgPausePool): _23.MsgPausePoolAmino;
                fromAminoMsg(object: _23.MsgPausePoolAminoMsg): _23.MsgPausePool;
                fromProtoMsg(message: _23.MsgPausePoolProtoMsg): _23.MsgPausePool;
                toProto(message: _23.MsgPausePool): Uint8Array;
                toProtoMsg(message: _23.MsgPausePool): _23.MsgPausePoolProtoMsg;
            };
            MsgPausePoolResponse: {
                typeUrl: string;
                encode(_: _23.MsgPausePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgPausePoolResponse;
                fromPartial(_: Partial<_23.MsgPausePoolResponse>): _23.MsgPausePoolResponse;
                fromAmino(_: _23.MsgPausePoolResponseAmino): _23.MsgPausePoolResponse;
                toAmino(_: _23.MsgPausePoolResponse): _23.MsgPausePoolResponseAmino;
                fromAminoMsg(object: _23.MsgPausePoolResponseAminoMsg): _23.MsgPausePoolResponse;
                fromProtoMsg(message: _23.MsgPausePoolResponseProtoMsg): _23.MsgPausePoolResponse;
                toProto(message: _23.MsgPausePoolResponse): Uint8Array;
                toProtoMsg(message: _23.MsgPausePoolResponse): _23.MsgPausePoolResponseProtoMsg;
            };
            MsgResumePool: {
                typeUrl: string;
                encode(message: _23.MsgResumePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgResumePool;
                fromPartial(object: Partial<_23.MsgResumePool>): _23.MsgResumePool;
                fromAmino(object: _23.MsgResumePoolAmino): _23.MsgResumePool;
                toAmino(message: _23.MsgResumePool): _23.MsgResumePoolAmino;
                fromAminoMsg(object: _23.MsgResumePoolAminoMsg): _23.MsgResumePool;
                fromProtoMsg(message: _23.MsgResumePoolProtoMsg): _23.MsgResumePool;
                toProto(message: _23.MsgResumePool): Uint8Array;
                toProtoMsg(message: _23.MsgResumePool): _23.MsgResumePoolProtoMsg;
            };
            MsgResumePoolResponse: {
                typeUrl: string;
                encode(_: _23.MsgResumePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgResumePoolResponse;
                fromPartial(_: Partial<_23.MsgResumePoolResponse>): _23.MsgResumePoolResponse;
                fromAmino(_: _23.MsgResumePoolResponseAmino): _23.MsgResumePoolResponse;
                toAmino(_: _23.MsgResumePoolResponse): _23.MsgResumePoolResponseAmino;
                fromAminoMsg(object: _23.MsgResumePoolResponseAminoMsg): _23.MsgResumePoolResponse;
                fromProtoMsg(message: _23.MsgResumePoolResponseProtoMsg): _23.MsgResumePoolResponse;
                toProto(message: _23.MsgResumePoolResponse): Uint8Array;
                toProtoMsg(message: _23.MsgResumePoolResponse): _23.MsgResumePoolResponseProtoMsg;
            };
            MsgDepositCollateral: {
                typeUrl: string;
                encode(message: _23.MsgDepositCollateral, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgDepositCollateral;
                fromPartial(object: Partial<_23.MsgDepositCollateral>): _23.MsgDepositCollateral;
                fromAmino(object: _23.MsgDepositCollateralAmino): _23.MsgDepositCollateral;
                toAmino(message: _23.MsgDepositCollateral): _23.MsgDepositCollateralAmino;
                fromAminoMsg(object: _23.MsgDepositCollateralAminoMsg): _23.MsgDepositCollateral;
                fromProtoMsg(message: _23.MsgDepositCollateralProtoMsg): _23.MsgDepositCollateral;
                toProto(message: _23.MsgDepositCollateral): Uint8Array;
                toProtoMsg(message: _23.MsgDepositCollateral): _23.MsgDepositCollateralProtoMsg;
            };
            MsgDepositCollateralResponse: {
                typeUrl: string;
                encode(_: _23.MsgDepositCollateralResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgDepositCollateralResponse;
                fromPartial(_: Partial<_23.MsgDepositCollateralResponse>): _23.MsgDepositCollateralResponse;
                fromAmino(_: _23.MsgDepositCollateralResponseAmino): _23.MsgDepositCollateralResponse;
                toAmino(_: _23.MsgDepositCollateralResponse): _23.MsgDepositCollateralResponseAmino;
                fromAminoMsg(object: _23.MsgDepositCollateralResponseAminoMsg): _23.MsgDepositCollateralResponse;
                fromProtoMsg(message: _23.MsgDepositCollateralResponseProtoMsg): _23.MsgDepositCollateralResponse;
                toProto(message: _23.MsgDepositCollateralResponse): Uint8Array;
                toProtoMsg(message: _23.MsgDepositCollateralResponse): _23.MsgDepositCollateralResponseProtoMsg;
            };
            MsgWithdrawCollateral: {
                typeUrl: string;
                encode(message: _23.MsgWithdrawCollateral, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgWithdrawCollateral;
                fromPartial(object: Partial<_23.MsgWithdrawCollateral>): _23.MsgWithdrawCollateral;
                fromAmino(object: _23.MsgWithdrawCollateralAmino): _23.MsgWithdrawCollateral;
                toAmino(message: _23.MsgWithdrawCollateral): _23.MsgWithdrawCollateralAmino;
                fromAminoMsg(object: _23.MsgWithdrawCollateralAminoMsg): _23.MsgWithdrawCollateral;
                fromProtoMsg(message: _23.MsgWithdrawCollateralProtoMsg): _23.MsgWithdrawCollateral;
                toProto(message: _23.MsgWithdrawCollateral): Uint8Array;
                toProtoMsg(message: _23.MsgWithdrawCollateral): _23.MsgWithdrawCollateralProtoMsg;
            };
            MsgWithdrawCollateralResponse: {
                typeUrl: string;
                encode(_: _23.MsgWithdrawCollateralResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgWithdrawCollateralResponse;
                fromPartial(_: Partial<_23.MsgWithdrawCollateralResponse>): _23.MsgWithdrawCollateralResponse;
                fromAmino(_: _23.MsgWithdrawCollateralResponseAmino): _23.MsgWithdrawCollateralResponse;
                toAmino(_: _23.MsgWithdrawCollateralResponse): _23.MsgWithdrawCollateralResponseAmino;
                fromAminoMsg(object: _23.MsgWithdrawCollateralResponseAminoMsg): _23.MsgWithdrawCollateralResponse;
                fromProtoMsg(message: _23.MsgWithdrawCollateralResponseProtoMsg): _23.MsgWithdrawCollateralResponse;
                toProto(message: _23.MsgWithdrawCollateralResponse): Uint8Array;
                toProtoMsg(message: _23.MsgWithdrawCollateralResponse): _23.MsgWithdrawCollateralResponseProtoMsg;
            };
            MsgWithdrawRewards: {
                typeUrl: string;
                encode(message: _23.MsgWithdrawRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgWithdrawRewards;
                fromPartial(object: Partial<_23.MsgWithdrawRewards>): _23.MsgWithdrawRewards;
                fromAmino(object: _23.MsgWithdrawRewardsAmino): _23.MsgWithdrawRewards;
                toAmino(message: _23.MsgWithdrawRewards): _23.MsgWithdrawRewardsAmino;
                fromAminoMsg(object: _23.MsgWithdrawRewardsAminoMsg): _23.MsgWithdrawRewards;
                fromProtoMsg(message: _23.MsgWithdrawRewardsProtoMsg): _23.MsgWithdrawRewards;
                toProto(message: _23.MsgWithdrawRewards): Uint8Array;
                toProtoMsg(message: _23.MsgWithdrawRewards): _23.MsgWithdrawRewardsProtoMsg;
            };
            MsgWithdrawRewardsResponse: {
                typeUrl: string;
                encode(_: _23.MsgWithdrawRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgWithdrawRewardsResponse;
                fromPartial(_: Partial<_23.MsgWithdrawRewardsResponse>): _23.MsgWithdrawRewardsResponse;
                fromAmino(_: _23.MsgWithdrawRewardsResponseAmino): _23.MsgWithdrawRewardsResponse;
                toAmino(_: _23.MsgWithdrawRewardsResponse): _23.MsgWithdrawRewardsResponseAmino;
                fromAminoMsg(object: _23.MsgWithdrawRewardsResponseAminoMsg): _23.MsgWithdrawRewardsResponse;
                fromProtoMsg(message: _23.MsgWithdrawRewardsResponseProtoMsg): _23.MsgWithdrawRewardsResponse;
                toProto(message: _23.MsgWithdrawRewardsResponse): Uint8Array;
                toProtoMsg(message: _23.MsgWithdrawRewardsResponse): _23.MsgWithdrawRewardsResponseProtoMsg;
            };
            MsgWithdrawForeignRewards: {
                typeUrl: string;
                encode(message: _23.MsgWithdrawForeignRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgWithdrawForeignRewards;
                fromPartial(object: Partial<_23.MsgWithdrawForeignRewards>): _23.MsgWithdrawForeignRewards;
                fromAmino(object: _23.MsgWithdrawForeignRewardsAmino): _23.MsgWithdrawForeignRewards;
                toAmino(message: _23.MsgWithdrawForeignRewards): _23.MsgWithdrawForeignRewardsAmino;
                fromAminoMsg(object: _23.MsgWithdrawForeignRewardsAminoMsg): _23.MsgWithdrawForeignRewards;
                fromProtoMsg(message: _23.MsgWithdrawForeignRewardsProtoMsg): _23.MsgWithdrawForeignRewards;
                toProto(message: _23.MsgWithdrawForeignRewards): Uint8Array;
                toProtoMsg(message: _23.MsgWithdrawForeignRewards): _23.MsgWithdrawForeignRewardsProtoMsg;
            };
            MsgWithdrawForeignRewardsResponse: {
                typeUrl: string;
                encode(_: _23.MsgWithdrawForeignRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgWithdrawForeignRewardsResponse;
                fromPartial(_: Partial<_23.MsgWithdrawForeignRewardsResponse>): _23.MsgWithdrawForeignRewardsResponse;
                fromAmino(_: _23.MsgWithdrawForeignRewardsResponseAmino): _23.MsgWithdrawForeignRewardsResponse;
                toAmino(_: _23.MsgWithdrawForeignRewardsResponse): _23.MsgWithdrawForeignRewardsResponseAmino;
                fromAminoMsg(object: _23.MsgWithdrawForeignRewardsResponseAminoMsg): _23.MsgWithdrawForeignRewardsResponse;
                fromProtoMsg(message: _23.MsgWithdrawForeignRewardsResponseProtoMsg): _23.MsgWithdrawForeignRewardsResponse;
                toProto(message: _23.MsgWithdrawForeignRewardsResponse): Uint8Array;
                toProtoMsg(message: _23.MsgWithdrawForeignRewardsResponse): _23.MsgWithdrawForeignRewardsResponseProtoMsg;
            };
            MsgClearPayouts: {
                typeUrl: string;
                encode(message: _23.MsgClearPayouts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgClearPayouts;
                fromPartial(object: Partial<_23.MsgClearPayouts>): _23.MsgClearPayouts;
                fromAmino(object: _23.MsgClearPayoutsAmino): _23.MsgClearPayouts;
                toAmino(message: _23.MsgClearPayouts): _23.MsgClearPayoutsAmino;
                fromAminoMsg(object: _23.MsgClearPayoutsAminoMsg): _23.MsgClearPayouts;
                fromProtoMsg(message: _23.MsgClearPayoutsProtoMsg): _23.MsgClearPayouts;
                toProto(message: _23.MsgClearPayouts): Uint8Array;
                toProtoMsg(message: _23.MsgClearPayouts): _23.MsgClearPayoutsProtoMsg;
            };
            MsgClearPayoutsResponse: {
                typeUrl: string;
                encode(_: _23.MsgClearPayoutsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgClearPayoutsResponse;
                fromPartial(_: Partial<_23.MsgClearPayoutsResponse>): _23.MsgClearPayoutsResponse;
                fromAmino(_: _23.MsgClearPayoutsResponseAmino): _23.MsgClearPayoutsResponse;
                toAmino(_: _23.MsgClearPayoutsResponse): _23.MsgClearPayoutsResponseAmino;
                fromAminoMsg(object: _23.MsgClearPayoutsResponseAminoMsg): _23.MsgClearPayoutsResponse;
                fromProtoMsg(message: _23.MsgClearPayoutsResponseProtoMsg): _23.MsgClearPayoutsResponse;
                toProto(message: _23.MsgClearPayoutsResponse): Uint8Array;
                toProtoMsg(message: _23.MsgClearPayoutsResponse): _23.MsgClearPayoutsResponseProtoMsg;
            };
            MsgPurchaseShield: {
                typeUrl: string;
                encode(message: _23.MsgPurchaseShield, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgPurchaseShield;
                fromPartial(object: Partial<_23.MsgPurchaseShield>): _23.MsgPurchaseShield;
                fromAmino(object: _23.MsgPurchaseShieldAmino): _23.MsgPurchaseShield;
                toAmino(message: _23.MsgPurchaseShield): _23.MsgPurchaseShieldAmino;
                fromAminoMsg(object: _23.MsgPurchaseShieldAminoMsg): _23.MsgPurchaseShield;
                fromProtoMsg(message: _23.MsgPurchaseShieldProtoMsg): _23.MsgPurchaseShield;
                toProto(message: _23.MsgPurchaseShield): Uint8Array;
                toProtoMsg(message: _23.MsgPurchaseShield): _23.MsgPurchaseShieldProtoMsg;
            };
            MsgPurchaseShieldResponse: {
                typeUrl: string;
                encode(_: _23.MsgPurchaseShieldResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgPurchaseShieldResponse;
                fromPartial(_: Partial<_23.MsgPurchaseShieldResponse>): _23.MsgPurchaseShieldResponse;
                fromAmino(_: _23.MsgPurchaseShieldResponseAmino): _23.MsgPurchaseShieldResponse;
                toAmino(_: _23.MsgPurchaseShieldResponse): _23.MsgPurchaseShieldResponseAmino;
                fromAminoMsg(object: _23.MsgPurchaseShieldResponseAminoMsg): _23.MsgPurchaseShieldResponse;
                fromProtoMsg(message: _23.MsgPurchaseShieldResponseProtoMsg): _23.MsgPurchaseShieldResponse;
                toProto(message: _23.MsgPurchaseShieldResponse): Uint8Array;
                toProtoMsg(message: _23.MsgPurchaseShieldResponse): _23.MsgPurchaseShieldResponseProtoMsg;
            };
            MsgWithdrawReimbursement: {
                typeUrl: string;
                encode(message: _23.MsgWithdrawReimbursement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgWithdrawReimbursement;
                fromPartial(object: Partial<_23.MsgWithdrawReimbursement>): _23.MsgWithdrawReimbursement;
                fromAmino(object: _23.MsgWithdrawReimbursementAmino): _23.MsgWithdrawReimbursement;
                toAmino(message: _23.MsgWithdrawReimbursement): _23.MsgWithdrawReimbursementAmino;
                fromAminoMsg(object: _23.MsgWithdrawReimbursementAminoMsg): _23.MsgWithdrawReimbursement;
                fromProtoMsg(message: _23.MsgWithdrawReimbursementProtoMsg): _23.MsgWithdrawReimbursement;
                toProto(message: _23.MsgWithdrawReimbursement): Uint8Array;
                toProtoMsg(message: _23.MsgWithdrawReimbursement): _23.MsgWithdrawReimbursementProtoMsg;
            };
            MsgWithdrawReimbursementResponse: {
                typeUrl: string;
                encode(_: _23.MsgWithdrawReimbursementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgWithdrawReimbursementResponse;
                fromPartial(_: Partial<_23.MsgWithdrawReimbursementResponse>): _23.MsgWithdrawReimbursementResponse;
                fromAmino(_: _23.MsgWithdrawReimbursementResponseAmino): _23.MsgWithdrawReimbursementResponse;
                toAmino(_: _23.MsgWithdrawReimbursementResponse): _23.MsgWithdrawReimbursementResponseAmino;
                fromAminoMsg(object: _23.MsgWithdrawReimbursementResponseAminoMsg): _23.MsgWithdrawReimbursementResponse;
                fromProtoMsg(message: _23.MsgWithdrawReimbursementResponseProtoMsg): _23.MsgWithdrawReimbursementResponse;
                toProto(message: _23.MsgWithdrawReimbursementResponse): Uint8Array;
                toProtoMsg(message: _23.MsgWithdrawReimbursementResponse): _23.MsgWithdrawReimbursementResponseProtoMsg;
            };
            MsgStakeForShield: {
                typeUrl: string;
                encode(message: _23.MsgStakeForShield, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgStakeForShield;
                fromPartial(object: Partial<_23.MsgStakeForShield>): _23.MsgStakeForShield;
                fromAmino(object: _23.MsgStakeForShieldAmino): _23.MsgStakeForShield;
                toAmino(message: _23.MsgStakeForShield): _23.MsgStakeForShieldAmino;
                fromAminoMsg(object: _23.MsgStakeForShieldAminoMsg): _23.MsgStakeForShield;
                fromProtoMsg(message: _23.MsgStakeForShieldProtoMsg): _23.MsgStakeForShield;
                toProto(message: _23.MsgStakeForShield): Uint8Array;
                toProtoMsg(message: _23.MsgStakeForShield): _23.MsgStakeForShieldProtoMsg;
            };
            MsgStakeForShieldResponse: {
                typeUrl: string;
                encode(_: _23.MsgStakeForShieldResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgStakeForShieldResponse;
                fromPartial(_: Partial<_23.MsgStakeForShieldResponse>): _23.MsgStakeForShieldResponse;
                fromAmino(_: _23.MsgStakeForShieldResponseAmino): _23.MsgStakeForShieldResponse;
                toAmino(_: _23.MsgStakeForShieldResponse): _23.MsgStakeForShieldResponseAmino;
                fromAminoMsg(object: _23.MsgStakeForShieldResponseAminoMsg): _23.MsgStakeForShieldResponse;
                fromProtoMsg(message: _23.MsgStakeForShieldResponseProtoMsg): _23.MsgStakeForShieldResponse;
                toProto(message: _23.MsgStakeForShieldResponse): Uint8Array;
                toProtoMsg(message: _23.MsgStakeForShieldResponse): _23.MsgStakeForShieldResponseProtoMsg;
            };
            MsgUnstakeFromShield: {
                typeUrl: string;
                encode(message: _23.MsgUnstakeFromShield, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgUnstakeFromShield;
                fromPartial(object: Partial<_23.MsgUnstakeFromShield>): _23.MsgUnstakeFromShield;
                fromAmino(object: _23.MsgUnstakeFromShieldAmino): _23.MsgUnstakeFromShield;
                toAmino(message: _23.MsgUnstakeFromShield): _23.MsgUnstakeFromShieldAmino;
                fromAminoMsg(object: _23.MsgUnstakeFromShieldAminoMsg): _23.MsgUnstakeFromShield;
                fromProtoMsg(message: _23.MsgUnstakeFromShieldProtoMsg): _23.MsgUnstakeFromShield;
                toProto(message: _23.MsgUnstakeFromShield): Uint8Array;
                toProtoMsg(message: _23.MsgUnstakeFromShield): _23.MsgUnstakeFromShieldProtoMsg;
            };
            MsgUnstakeFromShieldResponse: {
                typeUrl: string;
                encode(_: _23.MsgUnstakeFromShieldResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgUnstakeFromShieldResponse;
                fromPartial(_: Partial<_23.MsgUnstakeFromShieldResponse>): _23.MsgUnstakeFromShieldResponse;
                fromAmino(_: _23.MsgUnstakeFromShieldResponseAmino): _23.MsgUnstakeFromShieldResponse;
                toAmino(_: _23.MsgUnstakeFromShieldResponse): _23.MsgUnstakeFromShieldResponseAmino;
                fromAminoMsg(object: _23.MsgUnstakeFromShieldResponseAminoMsg): _23.MsgUnstakeFromShieldResponse;
                fromProtoMsg(message: _23.MsgUnstakeFromShieldResponseProtoMsg): _23.MsgUnstakeFromShieldResponse;
                toProto(message: _23.MsgUnstakeFromShieldResponse): Uint8Array;
                toProtoMsg(message: _23.MsgUnstakeFromShieldResponse): _23.MsgUnstakeFromShieldResponseProtoMsg;
            };
            MsgUpdateSponsor: {
                typeUrl: string;
                encode(message: _23.MsgUpdateSponsor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgUpdateSponsor;
                fromPartial(object: Partial<_23.MsgUpdateSponsor>): _23.MsgUpdateSponsor;
                fromAmino(object: _23.MsgUpdateSponsorAmino): _23.MsgUpdateSponsor;
                toAmino(message: _23.MsgUpdateSponsor): _23.MsgUpdateSponsorAmino;
                fromAminoMsg(object: _23.MsgUpdateSponsorAminoMsg): _23.MsgUpdateSponsor;
                fromProtoMsg(message: _23.MsgUpdateSponsorProtoMsg): _23.MsgUpdateSponsor;
                toProto(message: _23.MsgUpdateSponsor): Uint8Array;
                toProtoMsg(message: _23.MsgUpdateSponsor): _23.MsgUpdateSponsorProtoMsg;
            };
            MsgUpdateSponsorResponse: {
                typeUrl: string;
                encode(_: _23.MsgUpdateSponsorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgUpdateSponsorResponse;
                fromPartial(_: Partial<_23.MsgUpdateSponsorResponse>): _23.MsgUpdateSponsorResponse;
                fromAmino(_: _23.MsgUpdateSponsorResponseAmino): _23.MsgUpdateSponsorResponse;
                toAmino(_: _23.MsgUpdateSponsorResponse): _23.MsgUpdateSponsorResponseAmino;
                fromAminoMsg(object: _23.MsgUpdateSponsorResponseAminoMsg): _23.MsgUpdateSponsorResponse;
                fromProtoMsg(message: _23.MsgUpdateSponsorResponseProtoMsg): _23.MsgUpdateSponsorResponse;
                toProto(message: _23.MsgUpdateSponsorResponse): Uint8Array;
                toProtoMsg(message: _23.MsgUpdateSponsorResponse): _23.MsgUpdateSponsorResponseProtoMsg;
            };
            Fees: {
                typeUrl: string;
                encode(message: _22.Fees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Fees;
                fromPartial(object: Partial<_22.Fees>): _22.Fees;
                fromAmino(object: _22.FeesAmino): _22.Fees;
                toAmino(message: _22.Fees): _22.FeesAmino;
                fromAminoMsg(object: _22.FeesAminoMsg): _22.Fees;
                fromProtoMsg(message: _22.FeesProtoMsg): _22.Fees;
                toProto(message: _22.Fees): Uint8Array;
                toProtoMsg(message: _22.Fees): _22.FeesProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _22.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Pool;
                fromPartial(object: Partial<_22.Pool>): _22.Pool;
                fromAmino(object: _22.PoolAmino): _22.Pool;
                toAmino(message: _22.Pool): _22.PoolAmino;
                fromAminoMsg(object: _22.PoolAminoMsg): _22.Pool;
                fromProtoMsg(message: _22.PoolProtoMsg): _22.Pool;
                toProto(message: _22.Pool): Uint8Array;
                toProtoMsg(message: _22.Pool): _22.PoolProtoMsg;
            };
            Purchase: {
                typeUrl: string;
                encode(message: _22.Purchase, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Purchase;
                fromPartial(object: Partial<_22.Purchase>): _22.Purchase;
                fromAmino(object: _22.PurchaseAmino): _22.Purchase;
                toAmino(message: _22.Purchase): _22.PurchaseAmino;
                fromAminoMsg(object: _22.PurchaseAminoMsg): _22.Purchase;
                fromProtoMsg(message: _22.PurchaseProtoMsg): _22.Purchase;
                toProto(message: _22.Purchase): Uint8Array;
                toProtoMsg(message: _22.Purchase): _22.PurchaseProtoMsg;
            };
            PurchaseList: {
                typeUrl: string;
                encode(message: _22.PurchaseList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.PurchaseList;
                fromPartial(object: Partial<_22.PurchaseList>): _22.PurchaseList;
                fromAmino(object: _22.PurchaseListAmino): _22.PurchaseList;
                toAmino(message: _22.PurchaseList): _22.PurchaseListAmino;
                fromAminoMsg(object: _22.PurchaseListAminoMsg): _22.PurchaseList;
                fromProtoMsg(message: _22.PurchaseListProtoMsg): _22.PurchaseList;
                toProto(message: _22.PurchaseList): Uint8Array;
                toProtoMsg(message: _22.PurchaseList): _22.PurchaseListProtoMsg;
            };
            Provider: {
                typeUrl: string;
                encode(message: _22.Provider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Provider;
                fromPartial(object: Partial<_22.Provider>): _22.Provider;
                fromAmino(object: _22.ProviderAmino): _22.Provider;
                toAmino(message: _22.Provider): _22.ProviderAmino;
                fromAminoMsg(object: _22.ProviderAminoMsg): _22.Provider;
                fromProtoMsg(message: _22.ProviderProtoMsg): _22.Provider;
                toProto(message: _22.Provider): Uint8Array;
                toProtoMsg(message: _22.Provider): _22.ProviderProtoMsg;
            };
            PoolPurchaser: {
                typeUrl: string;
                encode(message: _22.PoolPurchaser, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.PoolPurchaser;
                fromPartial(object: Partial<_22.PoolPurchaser>): _22.PoolPurchaser;
                fromAmino(object: _22.PoolPurchaserAmino): _22.PoolPurchaser;
                toAmino(message: _22.PoolPurchaser): _22.PoolPurchaserAmino;
                fromAminoMsg(object: _22.PoolPurchaserAminoMsg): _22.PoolPurchaser;
                fromProtoMsg(message: _22.PoolPurchaserProtoMsg): _22.PoolPurchaser;
                toProto(message: _22.PoolPurchaser): Uint8Array;
                toProtoMsg(message: _22.PoolPurchaser): _22.PoolPurchaserProtoMsg;
            };
            PoolPurchaserPairs: {
                typeUrl: string;
                encode(message: _22.PoolPurchaserPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.PoolPurchaserPairs;
                fromPartial(object: Partial<_22.PoolPurchaserPairs>): _22.PoolPurchaserPairs;
                fromAmino(object: _22.PoolPurchaserPairsAmino): _22.PoolPurchaserPairs;
                toAmino(message: _22.PoolPurchaserPairs): _22.PoolPurchaserPairsAmino;
                fromAminoMsg(object: _22.PoolPurchaserPairsAminoMsg): _22.PoolPurchaserPairs;
                fromProtoMsg(message: _22.PoolPurchaserPairsProtoMsg): _22.PoolPurchaserPairs;
                toProto(message: _22.PoolPurchaserPairs): Uint8Array;
                toProtoMsg(message: _22.PoolPurchaserPairs): _22.PoolPurchaserPairsProtoMsg;
            };
            Withdraw: {
                typeUrl: string;
                encode(message: _22.Withdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Withdraw;
                fromPartial(object: Partial<_22.Withdraw>): _22.Withdraw;
                fromAmino(object: _22.WithdrawAmino): _22.Withdraw;
                toAmino(message: _22.Withdraw): _22.WithdrawAmino;
                fromAminoMsg(object: _22.WithdrawAminoMsg): _22.Withdraw;
                fromProtoMsg(message: _22.WithdrawProtoMsg): _22.Withdraw;
                toProto(message: _22.Withdraw): Uint8Array;
                toProtoMsg(message: _22.Withdraw): _22.WithdrawProtoMsg;
            };
            Withdraws: {
                typeUrl: string;
                encode(message: _22.Withdraws, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Withdraws;
                fromPartial(object: Partial<_22.Withdraws>): _22.Withdraws;
                fromAmino(object: _22.WithdrawsAmino): _22.Withdraws;
                toAmino(message: _22.Withdraws): _22.WithdrawsAmino;
                fromAminoMsg(object: _22.WithdrawsAminoMsg): _22.Withdraws;
                fromProtoMsg(message: _22.WithdrawsProtoMsg): _22.Withdraws;
                toProto(message: _22.Withdraws): Uint8Array;
                toProtoMsg(message: _22.Withdraws): _22.WithdrawsProtoMsg;
            };
            ShieldStaking: {
                typeUrl: string;
                encode(message: _22.ShieldStaking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.ShieldStaking;
                fromPartial(object: Partial<_22.ShieldStaking>): _22.ShieldStaking;
                fromAmino(object: _22.ShieldStakingAmino): _22.ShieldStaking;
                toAmino(message: _22.ShieldStaking): _22.ShieldStakingAmino;
                fromAminoMsg(object: _22.ShieldStakingAminoMsg): _22.ShieldStaking;
                fromProtoMsg(message: _22.ShieldStakingProtoMsg): _22.ShieldStaking;
                toProto(message: _22.ShieldStaking): Uint8Array;
                toProtoMsg(message: _22.ShieldStaking): _22.ShieldStakingProtoMsg;
            };
            LastUpdateTime: {
                typeUrl: string;
                encode(message: _22.LastUpdateTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.LastUpdateTime;
                fromPartial(object: Partial<_22.LastUpdateTime>): _22.LastUpdateTime;
                fromAmino(object: _22.LastUpdateTimeAmino): _22.LastUpdateTime;
                toAmino(message: _22.LastUpdateTime): _22.LastUpdateTimeAmino;
                fromAminoMsg(object: _22.LastUpdateTimeAminoMsg): _22.LastUpdateTime;
                fromProtoMsg(message: _22.LastUpdateTimeProtoMsg): _22.LastUpdateTime;
                toProto(message: _22.LastUpdateTime): Uint8Array;
                toProtoMsg(message: _22.LastUpdateTime): _22.LastUpdateTimeProtoMsg;
            };
            ShieldClaimProposal: {
                typeUrl: string;
                encode(message: _22.ShieldClaimProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.ShieldClaimProposal;
                fromPartial(object: Partial<_22.ShieldClaimProposal>): _22.ShieldClaimProposal;
                fromAmino(object: _22.ShieldClaimProposalAmino): _22.ShieldClaimProposal;
                toAmino(message: _22.ShieldClaimProposal): _22.ShieldClaimProposalAmino;
                fromAminoMsg(object: _22.ShieldClaimProposalAminoMsg): _22.ShieldClaimProposal;
                fromProtoMsg(message: _22.ShieldClaimProposalProtoMsg): _22.ShieldClaimProposal;
                toProto(message: _22.ShieldClaimProposal): Uint8Array;
                toProtoMsg(message: _22.ShieldClaimProposal): _22.ShieldClaimProposalProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _21.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryPoolRequest;
                fromPartial(object: Partial<_21.QueryPoolRequest>): _21.QueryPoolRequest;
                fromAmino(object: _21.QueryPoolRequestAmino): _21.QueryPoolRequest;
                toAmino(message: _21.QueryPoolRequest): _21.QueryPoolRequestAmino;
                fromAminoMsg(object: _21.QueryPoolRequestAminoMsg): _21.QueryPoolRequest;
                fromProtoMsg(message: _21.QueryPoolRequestProtoMsg): _21.QueryPoolRequest;
                toProto(message: _21.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _21.QueryPoolRequest): _21.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _21.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryPoolResponse;
                fromPartial(object: Partial<_21.QueryPoolResponse>): _21.QueryPoolResponse;
                fromAmino(object: _21.QueryPoolResponseAmino): _21.QueryPoolResponse;
                toAmino(message: _21.QueryPoolResponse): _21.QueryPoolResponseAmino;
                fromAminoMsg(object: _21.QueryPoolResponseAminoMsg): _21.QueryPoolResponse;
                fromProtoMsg(message: _21.QueryPoolResponseProtoMsg): _21.QueryPoolResponse;
                toProto(message: _21.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _21.QueryPoolResponse): _21.QueryPoolResponseProtoMsg;
            };
            QuerySponsorRequest: {
                typeUrl: string;
                encode(message: _21.QuerySponsorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QuerySponsorRequest;
                fromPartial(object: Partial<_21.QuerySponsorRequest>): _21.QuerySponsorRequest;
                fromAmino(object: _21.QuerySponsorRequestAmino): _21.QuerySponsorRequest;
                toAmino(message: _21.QuerySponsorRequest): _21.QuerySponsorRequestAmino;
                fromAminoMsg(object: _21.QuerySponsorRequestAminoMsg): _21.QuerySponsorRequest;
                fromProtoMsg(message: _21.QuerySponsorRequestProtoMsg): _21.QuerySponsorRequest;
                toProto(message: _21.QuerySponsorRequest): Uint8Array;
                toProtoMsg(message: _21.QuerySponsorRequest): _21.QuerySponsorRequestProtoMsg;
            };
            QuerySponsorResponse: {
                typeUrl: string;
                encode(message: _21.QuerySponsorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QuerySponsorResponse;
                fromPartial(object: Partial<_21.QuerySponsorResponse>): _21.QuerySponsorResponse;
                fromAmino(object: _21.QuerySponsorResponseAmino): _21.QuerySponsorResponse;
                toAmino(message: _21.QuerySponsorResponse): _21.QuerySponsorResponseAmino;
                fromAminoMsg(object: _21.QuerySponsorResponseAminoMsg): _21.QuerySponsorResponse;
                fromProtoMsg(message: _21.QuerySponsorResponseProtoMsg): _21.QuerySponsorResponse;
                toProto(message: _21.QuerySponsorResponse): Uint8Array;
                toProtoMsg(message: _21.QuerySponsorResponse): _21.QuerySponsorResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(_: _21.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryPoolsRequest;
                fromPartial(_: Partial<_21.QueryPoolsRequest>): _21.QueryPoolsRequest;
                fromAmino(_: _21.QueryPoolsRequestAmino): _21.QueryPoolsRequest;
                toAmino(_: _21.QueryPoolsRequest): _21.QueryPoolsRequestAmino;
                fromAminoMsg(object: _21.QueryPoolsRequestAminoMsg): _21.QueryPoolsRequest;
                fromProtoMsg(message: _21.QueryPoolsRequestProtoMsg): _21.QueryPoolsRequest;
                toProto(message: _21.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryPoolsRequest): _21.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _21.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryPoolsResponse;
                fromPartial(object: Partial<_21.QueryPoolsResponse>): _21.QueryPoolsResponse;
                fromAmino(object: _21.QueryPoolsResponseAmino): _21.QueryPoolsResponse;
                toAmino(message: _21.QueryPoolsResponse): _21.QueryPoolsResponseAmino;
                fromAminoMsg(object: _21.QueryPoolsResponseAminoMsg): _21.QueryPoolsResponse;
                fromProtoMsg(message: _21.QueryPoolsResponseProtoMsg): _21.QueryPoolsResponse;
                toProto(message: _21.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryPoolsResponse): _21.QueryPoolsResponseProtoMsg;
            };
            QueryPoolPurchaseListsRequest: {
                typeUrl: string;
                encode(message: _21.QueryPoolPurchaseListsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryPoolPurchaseListsRequest;
                fromPartial(object: Partial<_21.QueryPoolPurchaseListsRequest>): _21.QueryPoolPurchaseListsRequest;
                fromAmino(object: _21.QueryPoolPurchaseListsRequestAmino): _21.QueryPoolPurchaseListsRequest;
                toAmino(message: _21.QueryPoolPurchaseListsRequest): _21.QueryPoolPurchaseListsRequestAmino;
                fromAminoMsg(object: _21.QueryPoolPurchaseListsRequestAminoMsg): _21.QueryPoolPurchaseListsRequest;
                fromProtoMsg(message: _21.QueryPoolPurchaseListsRequestProtoMsg): _21.QueryPoolPurchaseListsRequest;
                toProto(message: _21.QueryPoolPurchaseListsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryPoolPurchaseListsRequest): _21.QueryPoolPurchaseListsRequestProtoMsg;
            };
            QueryPurchaseListsRequest: {
                typeUrl: string;
                encode(message: _21.QueryPurchaseListsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryPurchaseListsRequest;
                fromPartial(object: Partial<_21.QueryPurchaseListsRequest>): _21.QueryPurchaseListsRequest;
                fromAmino(object: _21.QueryPurchaseListsRequestAmino): _21.QueryPurchaseListsRequest;
                toAmino(message: _21.QueryPurchaseListsRequest): _21.QueryPurchaseListsRequestAmino;
                fromAminoMsg(object: _21.QueryPurchaseListsRequestAminoMsg): _21.QueryPurchaseListsRequest;
                fromProtoMsg(message: _21.QueryPurchaseListsRequestProtoMsg): _21.QueryPurchaseListsRequest;
                toProto(message: _21.QueryPurchaseListsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryPurchaseListsRequest): _21.QueryPurchaseListsRequestProtoMsg;
            };
            QueryPurchaseListsResponse: {
                typeUrl: string;
                encode(message: _21.QueryPurchaseListsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryPurchaseListsResponse;
                fromPartial(object: Partial<_21.QueryPurchaseListsResponse>): _21.QueryPurchaseListsResponse;
                fromAmino(object: _21.QueryPurchaseListsResponseAmino): _21.QueryPurchaseListsResponse;
                toAmino(message: _21.QueryPurchaseListsResponse): _21.QueryPurchaseListsResponseAmino;
                fromAminoMsg(object: _21.QueryPurchaseListsResponseAminoMsg): _21.QueryPurchaseListsResponse;
                fromProtoMsg(message: _21.QueryPurchaseListsResponseProtoMsg): _21.QueryPurchaseListsResponse;
                toProto(message: _21.QueryPurchaseListsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryPurchaseListsResponse): _21.QueryPurchaseListsResponseProtoMsg;
            };
            QueryPurchaseListRequest: {
                typeUrl: string;
                encode(message: _21.QueryPurchaseListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryPurchaseListRequest;
                fromPartial(object: Partial<_21.QueryPurchaseListRequest>): _21.QueryPurchaseListRequest;
                fromAmino(object: _21.QueryPurchaseListRequestAmino): _21.QueryPurchaseListRequest;
                toAmino(message: _21.QueryPurchaseListRequest): _21.QueryPurchaseListRequestAmino;
                fromAminoMsg(object: _21.QueryPurchaseListRequestAminoMsg): _21.QueryPurchaseListRequest;
                fromProtoMsg(message: _21.QueryPurchaseListRequestProtoMsg): _21.QueryPurchaseListRequest;
                toProto(message: _21.QueryPurchaseListRequest): Uint8Array;
                toProtoMsg(message: _21.QueryPurchaseListRequest): _21.QueryPurchaseListRequestProtoMsg;
            };
            QueryPurchaseListResponse: {
                typeUrl: string;
                encode(message: _21.QueryPurchaseListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryPurchaseListResponse;
                fromPartial(object: Partial<_21.QueryPurchaseListResponse>): _21.QueryPurchaseListResponse;
                fromAmino(object: _21.QueryPurchaseListResponseAmino): _21.QueryPurchaseListResponse;
                toAmino(message: _21.QueryPurchaseListResponse): _21.QueryPurchaseListResponseAmino;
                fromAminoMsg(object: _21.QueryPurchaseListResponseAminoMsg): _21.QueryPurchaseListResponse;
                fromProtoMsg(message: _21.QueryPurchaseListResponseProtoMsg): _21.QueryPurchaseListResponse;
                toProto(message: _21.QueryPurchaseListResponse): Uint8Array;
                toProtoMsg(message: _21.QueryPurchaseListResponse): _21.QueryPurchaseListResponseProtoMsg;
            };
            QueryPurchasesRequest: {
                typeUrl: string;
                encode(_: _21.QueryPurchasesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryPurchasesRequest;
                fromPartial(_: Partial<_21.QueryPurchasesRequest>): _21.QueryPurchasesRequest;
                fromAmino(_: _21.QueryPurchasesRequestAmino): _21.QueryPurchasesRequest;
                toAmino(_: _21.QueryPurchasesRequest): _21.QueryPurchasesRequestAmino;
                fromAminoMsg(object: _21.QueryPurchasesRequestAminoMsg): _21.QueryPurchasesRequest;
                fromProtoMsg(message: _21.QueryPurchasesRequestProtoMsg): _21.QueryPurchasesRequest;
                toProto(message: _21.QueryPurchasesRequest): Uint8Array;
                toProtoMsg(message: _21.QueryPurchasesRequest): _21.QueryPurchasesRequestProtoMsg;
            };
            QueryPurchasesResponse: {
                typeUrl: string;
                encode(message: _21.QueryPurchasesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryPurchasesResponse;
                fromPartial(object: Partial<_21.QueryPurchasesResponse>): _21.QueryPurchasesResponse;
                fromAmino(object: _21.QueryPurchasesResponseAmino): _21.QueryPurchasesResponse;
                toAmino(message: _21.QueryPurchasesResponse): _21.QueryPurchasesResponseAmino;
                fromAminoMsg(object: _21.QueryPurchasesResponseAminoMsg): _21.QueryPurchasesResponse;
                fromProtoMsg(message: _21.QueryPurchasesResponseProtoMsg): _21.QueryPurchasesResponse;
                toProto(message: _21.QueryPurchasesResponse): Uint8Array;
                toProtoMsg(message: _21.QueryPurchasesResponse): _21.QueryPurchasesResponseProtoMsg;
            };
            QueryProviderRequest: {
                typeUrl: string;
                encode(message: _21.QueryProviderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryProviderRequest;
                fromPartial(object: Partial<_21.QueryProviderRequest>): _21.QueryProviderRequest;
                fromAmino(object: _21.QueryProviderRequestAmino): _21.QueryProviderRequest;
                toAmino(message: _21.QueryProviderRequest): _21.QueryProviderRequestAmino;
                fromAminoMsg(object: _21.QueryProviderRequestAminoMsg): _21.QueryProviderRequest;
                fromProtoMsg(message: _21.QueryProviderRequestProtoMsg): _21.QueryProviderRequest;
                toProto(message: _21.QueryProviderRequest): Uint8Array;
                toProtoMsg(message: _21.QueryProviderRequest): _21.QueryProviderRequestProtoMsg;
            };
            QueryProviderResponse: {
                typeUrl: string;
                encode(message: _21.QueryProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryProviderResponse;
                fromPartial(object: Partial<_21.QueryProviderResponse>): _21.QueryProviderResponse;
                fromAmino(object: _21.QueryProviderResponseAmino): _21.QueryProviderResponse;
                toAmino(message: _21.QueryProviderResponse): _21.QueryProviderResponseAmino;
                fromAminoMsg(object: _21.QueryProviderResponseAminoMsg): _21.QueryProviderResponse;
                fromProtoMsg(message: _21.QueryProviderResponseProtoMsg): _21.QueryProviderResponse;
                toProto(message: _21.QueryProviderResponse): Uint8Array;
                toProtoMsg(message: _21.QueryProviderResponse): _21.QueryProviderResponseProtoMsg;
            };
            QueryProvidersRequest: {
                typeUrl: string;
                encode(_: _21.QueryProvidersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryProvidersRequest;
                fromPartial(_: Partial<_21.QueryProvidersRequest>): _21.QueryProvidersRequest;
                fromAmino(_: _21.QueryProvidersRequestAmino): _21.QueryProvidersRequest;
                toAmino(_: _21.QueryProvidersRequest): _21.QueryProvidersRequestAmino;
                fromAminoMsg(object: _21.QueryProvidersRequestAminoMsg): _21.QueryProvidersRequest;
                fromProtoMsg(message: _21.QueryProvidersRequestProtoMsg): _21.QueryProvidersRequest;
                toProto(message: _21.QueryProvidersRequest): Uint8Array;
                toProtoMsg(message: _21.QueryProvidersRequest): _21.QueryProvidersRequestProtoMsg;
            };
            QueryProvidersResponse: {
                typeUrl: string;
                encode(message: _21.QueryProvidersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryProvidersResponse;
                fromPartial(object: Partial<_21.QueryProvidersResponse>): _21.QueryProvidersResponse;
                fromAmino(object: _21.QueryProvidersResponseAmino): _21.QueryProvidersResponse;
                toAmino(message: _21.QueryProvidersResponse): _21.QueryProvidersResponseAmino;
                fromAminoMsg(object: _21.QueryProvidersResponseAminoMsg): _21.QueryProvidersResponse;
                fromProtoMsg(message: _21.QueryProvidersResponseProtoMsg): _21.QueryProvidersResponse;
                toProto(message: _21.QueryProvidersResponse): Uint8Array;
                toProtoMsg(message: _21.QueryProvidersResponse): _21.QueryProvidersResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                typeUrl: string;
                encode(_: _21.QueryPoolParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryPoolParamsRequest;
                fromPartial(_: Partial<_21.QueryPoolParamsRequest>): _21.QueryPoolParamsRequest;
                fromAmino(_: _21.QueryPoolParamsRequestAmino): _21.QueryPoolParamsRequest;
                toAmino(_: _21.QueryPoolParamsRequest): _21.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _21.QueryPoolParamsRequestAminoMsg): _21.QueryPoolParamsRequest;
                fromProtoMsg(message: _21.QueryPoolParamsRequestProtoMsg): _21.QueryPoolParamsRequest;
                toProto(message: _21.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryPoolParamsRequest): _21.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                typeUrl: string;
                encode(message: _21.QueryPoolParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryPoolParamsResponse;
                fromPartial(object: Partial<_21.QueryPoolParamsResponse>): _21.QueryPoolParamsResponse;
                fromAmino(object: _21.QueryPoolParamsResponseAmino): _21.QueryPoolParamsResponse;
                toAmino(message: _21.QueryPoolParamsResponse): _21.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _21.QueryPoolParamsResponseAminoMsg): _21.QueryPoolParamsResponse;
                fromProtoMsg(message: _21.QueryPoolParamsResponseProtoMsg): _21.QueryPoolParamsResponse;
                toProto(message: _21.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryPoolParamsResponse): _21.QueryPoolParamsResponseProtoMsg;
            };
            QueryClaimParamsRequest: {
                typeUrl: string;
                encode(_: _21.QueryClaimParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryClaimParamsRequest;
                fromPartial(_: Partial<_21.QueryClaimParamsRequest>): _21.QueryClaimParamsRequest;
                fromAmino(_: _21.QueryClaimParamsRequestAmino): _21.QueryClaimParamsRequest;
                toAmino(_: _21.QueryClaimParamsRequest): _21.QueryClaimParamsRequestAmino;
                fromAminoMsg(object: _21.QueryClaimParamsRequestAminoMsg): _21.QueryClaimParamsRequest;
                fromProtoMsg(message: _21.QueryClaimParamsRequestProtoMsg): _21.QueryClaimParamsRequest;
                toProto(message: _21.QueryClaimParamsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryClaimParamsRequest): _21.QueryClaimParamsRequestProtoMsg;
            };
            QueryClaimParamsResponse: {
                typeUrl: string;
                encode(message: _21.QueryClaimParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryClaimParamsResponse;
                fromPartial(object: Partial<_21.QueryClaimParamsResponse>): _21.QueryClaimParamsResponse;
                fromAmino(object: _21.QueryClaimParamsResponseAmino): _21.QueryClaimParamsResponse;
                toAmino(message: _21.QueryClaimParamsResponse): _21.QueryClaimParamsResponseAmino;
                fromAminoMsg(object: _21.QueryClaimParamsResponseAminoMsg): _21.QueryClaimParamsResponse;
                fromProtoMsg(message: _21.QueryClaimParamsResponseProtoMsg): _21.QueryClaimParamsResponse;
                toProto(message: _21.QueryClaimParamsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryClaimParamsResponse): _21.QueryClaimParamsResponseProtoMsg;
            };
            QueryDistrParamsRequest: {
                typeUrl: string;
                encode(_: _21.QueryDistrParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryDistrParamsRequest;
                fromPartial(_: Partial<_21.QueryDistrParamsRequest>): _21.QueryDistrParamsRequest;
                fromAmino(_: _21.QueryDistrParamsRequestAmino): _21.QueryDistrParamsRequest;
                toAmino(_: _21.QueryDistrParamsRequest): _21.QueryDistrParamsRequestAmino;
                fromAminoMsg(object: _21.QueryDistrParamsRequestAminoMsg): _21.QueryDistrParamsRequest;
                fromProtoMsg(message: _21.QueryDistrParamsRequestProtoMsg): _21.QueryDistrParamsRequest;
                toProto(message: _21.QueryDistrParamsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryDistrParamsRequest): _21.QueryDistrParamsRequestProtoMsg;
            };
            QueryDistrParamsResponse: {
                typeUrl: string;
                encode(message: _21.QueryDistrParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryDistrParamsResponse;
                fromPartial(object: Partial<_21.QueryDistrParamsResponse>): _21.QueryDistrParamsResponse;
                fromAmino(object: _21.QueryDistrParamsResponseAmino): _21.QueryDistrParamsResponse;
                toAmino(message: _21.QueryDistrParamsResponse): _21.QueryDistrParamsResponseAmino;
                fromAminoMsg(object: _21.QueryDistrParamsResponseAminoMsg): _21.QueryDistrParamsResponse;
                fromProtoMsg(message: _21.QueryDistrParamsResponseProtoMsg): _21.QueryDistrParamsResponse;
                toProto(message: _21.QueryDistrParamsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryDistrParamsResponse): _21.QueryDistrParamsResponseProtoMsg;
            };
            QueryShieldStatusRequest: {
                typeUrl: string;
                encode(_: _21.QueryShieldStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryShieldStatusRequest;
                fromPartial(_: Partial<_21.QueryShieldStatusRequest>): _21.QueryShieldStatusRequest;
                fromAmino(_: _21.QueryShieldStatusRequestAmino): _21.QueryShieldStatusRequest;
                toAmino(_: _21.QueryShieldStatusRequest): _21.QueryShieldStatusRequestAmino;
                fromAminoMsg(object: _21.QueryShieldStatusRequestAminoMsg): _21.QueryShieldStatusRequest;
                fromProtoMsg(message: _21.QueryShieldStatusRequestProtoMsg): _21.QueryShieldStatusRequest;
                toProto(message: _21.QueryShieldStatusRequest): Uint8Array;
                toProtoMsg(message: _21.QueryShieldStatusRequest): _21.QueryShieldStatusRequestProtoMsg;
            };
            QueryShieldStatusResponse: {
                typeUrl: string;
                encode(message: _21.QueryShieldStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryShieldStatusResponse;
                fromPartial(object: Partial<_21.QueryShieldStatusResponse>): _21.QueryShieldStatusResponse;
                fromAmino(object: _21.QueryShieldStatusResponseAmino): _21.QueryShieldStatusResponse;
                toAmino(message: _21.QueryShieldStatusResponse): _21.QueryShieldStatusResponseAmino;
                fromAminoMsg(object: _21.QueryShieldStatusResponseAminoMsg): _21.QueryShieldStatusResponse;
                fromProtoMsg(message: _21.QueryShieldStatusResponseProtoMsg): _21.QueryShieldStatusResponse;
                toProto(message: _21.QueryShieldStatusResponse): Uint8Array;
                toProtoMsg(message: _21.QueryShieldStatusResponse): _21.QueryShieldStatusResponseProtoMsg;
            };
            QueryShieldStakingRequest: {
                typeUrl: string;
                encode(message: _21.QueryShieldStakingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryShieldStakingRequest;
                fromPartial(object: Partial<_21.QueryShieldStakingRequest>): _21.QueryShieldStakingRequest;
                fromAmino(object: _21.QueryShieldStakingRequestAmino): _21.QueryShieldStakingRequest;
                toAmino(message: _21.QueryShieldStakingRequest): _21.QueryShieldStakingRequestAmino;
                fromAminoMsg(object: _21.QueryShieldStakingRequestAminoMsg): _21.QueryShieldStakingRequest;
                fromProtoMsg(message: _21.QueryShieldStakingRequestProtoMsg): _21.QueryShieldStakingRequest;
                toProto(message: _21.QueryShieldStakingRequest): Uint8Array;
                toProtoMsg(message: _21.QueryShieldStakingRequest): _21.QueryShieldStakingRequestProtoMsg;
            };
            QueryShieldStakingResponse: {
                typeUrl: string;
                encode(message: _21.QueryShieldStakingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryShieldStakingResponse;
                fromPartial(object: Partial<_21.QueryShieldStakingResponse>): _21.QueryShieldStakingResponse;
                fromAmino(object: _21.QueryShieldStakingResponseAmino): _21.QueryShieldStakingResponse;
                toAmino(message: _21.QueryShieldStakingResponse): _21.QueryShieldStakingResponseAmino;
                fromAminoMsg(object: _21.QueryShieldStakingResponseAminoMsg): _21.QueryShieldStakingResponse;
                fromProtoMsg(message: _21.QueryShieldStakingResponseProtoMsg): _21.QueryShieldStakingResponse;
                toProto(message: _21.QueryShieldStakingResponse): Uint8Array;
                toProtoMsg(message: _21.QueryShieldStakingResponse): _21.QueryShieldStakingResponseProtoMsg;
            };
            QueryShieldStakingRateRequest: {
                typeUrl: string;
                encode(_: _21.QueryShieldStakingRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryShieldStakingRateRequest;
                fromPartial(_: Partial<_21.QueryShieldStakingRateRequest>): _21.QueryShieldStakingRateRequest;
                fromAmino(_: _21.QueryShieldStakingRateRequestAmino): _21.QueryShieldStakingRateRequest;
                toAmino(_: _21.QueryShieldStakingRateRequest): _21.QueryShieldStakingRateRequestAmino;
                fromAminoMsg(object: _21.QueryShieldStakingRateRequestAminoMsg): _21.QueryShieldStakingRateRequest;
                fromProtoMsg(message: _21.QueryShieldStakingRateRequestProtoMsg): _21.QueryShieldStakingRateRequest;
                toProto(message: _21.QueryShieldStakingRateRequest): Uint8Array;
                toProtoMsg(message: _21.QueryShieldStakingRateRequest): _21.QueryShieldStakingRateRequestProtoMsg;
            };
            QueryShieldStakingRateResponse: {
                typeUrl: string;
                encode(message: _21.QueryShieldStakingRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryShieldStakingRateResponse;
                fromPartial(object: Partial<_21.QueryShieldStakingRateResponse>): _21.QueryShieldStakingRateResponse;
                fromAmino(object: _21.QueryShieldStakingRateResponseAmino): _21.QueryShieldStakingRateResponse;
                toAmino(message: _21.QueryShieldStakingRateResponse): _21.QueryShieldStakingRateResponseAmino;
                fromAminoMsg(object: _21.QueryShieldStakingRateResponseAminoMsg): _21.QueryShieldStakingRateResponse;
                fromProtoMsg(message: _21.QueryShieldStakingRateResponseProtoMsg): _21.QueryShieldStakingRateResponse;
                toProto(message: _21.QueryShieldStakingRateResponse): Uint8Array;
                toProtoMsg(message: _21.QueryShieldStakingRateResponse): _21.QueryShieldStakingRateResponseProtoMsg;
            };
            QueryReimbursementRequest: {
                typeUrl: string;
                encode(message: _21.QueryReimbursementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryReimbursementRequest;
                fromPartial(object: Partial<_21.QueryReimbursementRequest>): _21.QueryReimbursementRequest;
                fromAmino(object: _21.QueryReimbursementRequestAmino): _21.QueryReimbursementRequest;
                toAmino(message: _21.QueryReimbursementRequest): _21.QueryReimbursementRequestAmino;
                fromAminoMsg(object: _21.QueryReimbursementRequestAminoMsg): _21.QueryReimbursementRequest;
                fromProtoMsg(message: _21.QueryReimbursementRequestProtoMsg): _21.QueryReimbursementRequest;
                toProto(message: _21.QueryReimbursementRequest): Uint8Array;
                toProtoMsg(message: _21.QueryReimbursementRequest): _21.QueryReimbursementRequestProtoMsg;
            };
            QueryReimbursementResponse: {
                typeUrl: string;
                encode(message: _21.QueryReimbursementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryReimbursementResponse;
                fromPartial(object: Partial<_21.QueryReimbursementResponse>): _21.QueryReimbursementResponse;
                fromAmino(object: _21.QueryReimbursementResponseAmino): _21.QueryReimbursementResponse;
                toAmino(message: _21.QueryReimbursementResponse): _21.QueryReimbursementResponseAmino;
                fromAminoMsg(object: _21.QueryReimbursementResponseAminoMsg): _21.QueryReimbursementResponse;
                fromProtoMsg(message: _21.QueryReimbursementResponseProtoMsg): _21.QueryReimbursementResponse;
                toProto(message: _21.QueryReimbursementResponse): Uint8Array;
                toProtoMsg(message: _21.QueryReimbursementResponse): _21.QueryReimbursementResponseProtoMsg;
            };
            QueryReimbursementsRequest: {
                typeUrl: string;
                encode(_: _21.QueryReimbursementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryReimbursementsRequest;
                fromPartial(_: Partial<_21.QueryReimbursementsRequest>): _21.QueryReimbursementsRequest;
                fromAmino(_: _21.QueryReimbursementsRequestAmino): _21.QueryReimbursementsRequest;
                toAmino(_: _21.QueryReimbursementsRequest): _21.QueryReimbursementsRequestAmino;
                fromAminoMsg(object: _21.QueryReimbursementsRequestAminoMsg): _21.QueryReimbursementsRequest;
                fromProtoMsg(message: _21.QueryReimbursementsRequestProtoMsg): _21.QueryReimbursementsRequest;
                toProto(message: _21.QueryReimbursementsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryReimbursementsRequest): _21.QueryReimbursementsRequestProtoMsg;
            };
            QueryReimbursementsResponse: {
                typeUrl: string;
                encode(message: _21.QueryReimbursementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryReimbursementsResponse;
                fromPartial(object: Partial<_21.QueryReimbursementsResponse>): _21.QueryReimbursementsResponse;
                fromAmino(object: _21.QueryReimbursementsResponseAmino): _21.QueryReimbursementsResponse;
                toAmino(message: _21.QueryReimbursementsResponse): _21.QueryReimbursementsResponseAmino;
                fromAminoMsg(object: _21.QueryReimbursementsResponseAminoMsg): _21.QueryReimbursementsResponse;
                fromProtoMsg(message: _21.QueryReimbursementsResponseProtoMsg): _21.QueryReimbursementsResponse;
                toProto(message: _21.QueryReimbursementsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryReimbursementsResponse): _21.QueryReimbursementsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _20.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.GenesisState;
                fromPartial(object: Partial<_20.GenesisState>): _20.GenesisState;
                fromAmino(object: _20.GenesisStateAmino): _20.GenesisState;
                toAmino(message: _20.GenesisState): _20.GenesisStateAmino;
                fromAminoMsg(object: _20.GenesisStateAminoMsg): _20.GenesisState;
                fromProtoMsg(message: _20.GenesisStateProtoMsg): _20.GenesisState;
                toProto(message: _20.GenesisState): Uint8Array;
                toProtoMsg(message: _20.GenesisState): _20.GenesisStateProtoMsg;
            };
            OriginalStaking: {
                typeUrl: string;
                encode(message: _20.OriginalStaking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.OriginalStaking;
                fromPartial(object: Partial<_20.OriginalStaking>): _20.OriginalStaking;
                fromAmino(object: _20.OriginalStakingAmino): _20.OriginalStaking;
                toAmino(message: _20.OriginalStaking): _20.OriginalStakingAmino;
                fromAminoMsg(object: _20.OriginalStakingAminoMsg): _20.OriginalStaking;
                fromProtoMsg(message: _20.OriginalStakingProtoMsg): _20.OriginalStaking;
                toProto(message: _20.OriginalStaking): Uint8Array;
                toProtoMsg(message: _20.OriginalStaking): _20.OriginalStakingProtoMsg;
            };
            ProposalIDReimbursementPair: {
                typeUrl: string;
                encode(message: _20.ProposalIDReimbursementPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.ProposalIDReimbursementPair;
                fromPartial(object: Partial<_20.ProposalIDReimbursementPair>): _20.ProposalIDReimbursementPair;
                fromAmino(object: _20.ProposalIDReimbursementPairAmino): _20.ProposalIDReimbursementPair;
                toAmino(message: _20.ProposalIDReimbursementPair): _20.ProposalIDReimbursementPairAmino;
                fromAminoMsg(object: _20.ProposalIDReimbursementPairAminoMsg): _20.ProposalIDReimbursementPair;
                fromProtoMsg(message: _20.ProposalIDReimbursementPairProtoMsg): _20.ProposalIDReimbursementPair;
                toProto(message: _20.ProposalIDReimbursementPair): Uint8Array;
                toProtoMsg(message: _20.ProposalIDReimbursementPair): _20.ProposalIDReimbursementPairProtoMsg;
            };
            Reimbursement: {
                typeUrl: string;
                encode(message: _20.Reimbursement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Reimbursement;
                fromPartial(object: Partial<_20.Reimbursement>): _20.Reimbursement;
                fromAmino(object: _20.ReimbursementAmino): _20.Reimbursement;
                toAmino(message: _20.Reimbursement): _20.ReimbursementAmino;
                fromAminoMsg(object: _20.ReimbursementAminoMsg): _20.Reimbursement;
                fromProtoMsg(message: _20.ReimbursementProtoMsg): _20.Reimbursement;
                toProto(message: _20.Reimbursement): Uint8Array;
                toProtoMsg(message: _20.Reimbursement): _20.ReimbursementProtoMsg;
            };
            PoolParams: {
                typeUrl: string;
                encode(message: _20.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.PoolParams;
                fromPartial(object: Partial<_20.PoolParams>): _20.PoolParams;
                fromAmino(object: _20.PoolParamsAmino): _20.PoolParams;
                toAmino(message: _20.PoolParams): _20.PoolParamsAmino;
                fromAminoMsg(object: _20.PoolParamsAminoMsg): _20.PoolParams;
                fromProtoMsg(message: _20.PoolParamsProtoMsg): _20.PoolParams;
                toProto(message: _20.PoolParams): Uint8Array;
                toProtoMsg(message: _20.PoolParams): _20.PoolParamsProtoMsg;
            };
            ClaimProposalParams: {
                typeUrl: string;
                encode(message: _20.ClaimProposalParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.ClaimProposalParams;
                fromPartial(object: Partial<_20.ClaimProposalParams>): _20.ClaimProposalParams;
                fromAmino(object: _20.ClaimProposalParamsAmino): _20.ClaimProposalParams;
                toAmino(message: _20.ClaimProposalParams): _20.ClaimProposalParamsAmino;
                fromAminoMsg(object: _20.ClaimProposalParamsAminoMsg): _20.ClaimProposalParams;
                fromProtoMsg(message: _20.ClaimProposalParamsProtoMsg): _20.ClaimProposalParams;
                toProto(message: _20.ClaimProposalParams): Uint8Array;
                toProtoMsg(message: _20.ClaimProposalParams): _20.ClaimProposalParamsProtoMsg;
            };
            DistributionParams: {
                typeUrl: string;
                encode(message: _20.DistributionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.DistributionParams;
                fromPartial(object: Partial<_20.DistributionParams>): _20.DistributionParams;
                fromAmino(object: _20.DistributionParamsAmino): _20.DistributionParams;
                toAmino(message: _20.DistributionParams): _20.DistributionParamsAmino;
                fromAminoMsg(object: _20.DistributionParamsAminoMsg): _20.DistributionParams;
                fromProtoMsg(message: _20.DistributionParamsProtoMsg): _20.DistributionParams;
                toProto(message: _20.DistributionParams): Uint8Array;
                toProtoMsg(message: _20.DistributionParams): _20.DistributionParamsProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            shentu: {
                auth: {
                    v1alpha1: _149.MsgClientImpl;
                };
                bank: {
                    v1alpha1: _150.MsgClientImpl;
                };
                bounty: {
                    v1: _151.MsgClientImpl;
                };
                cert: {
                    v1alpha1: _152.MsgClientImpl;
                };
                cvm: {
                    v1alpha1: _153.MsgClientImpl;
                };
                oracle: {
                    v1alpha1: _154.MsgClientImpl;
                };
                shield: {
                    v1alpha1: _155.MsgClientImpl;
                };
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
            rpcEndpoint: any;
        }) => Promise<{
            shentu: {
                bounty: {
                    v1: {
                        programs(request?: _4.QueryProgramsRequest): Promise<_4.QueryProgramsResponse>;
                        program(request: _4.QueryProgramRequest): Promise<_4.QueryProgramResponse>;
                        findings(request: _4.QueryFindingsRequest): Promise<_4.QueryFindingsResponse>;
                        finding(request: _4.QueryFindingRequest): Promise<_4.QueryFindingResponse>;
                        findingFingerprint(request: _4.QueryFindingFingerprintRequest): Promise<_4.QueryFindingFingerprintResponse>;
                        programFingerprint(request: _4.QueryProgramFingerprintRequest): Promise<_4.QueryProgramFingerprintResponse>;
                    };
                };
                cert: {
                    v1alpha1: {
                        certifier(request: _8.QueryCertifierRequest): Promise<_8.QueryCertifierResponse>;
                        certifiers(request?: _8.QueryCertifiersRequest): Promise<_8.QueryCertifiersResponse>;
                        platform(request: _8.QueryPlatformRequest): Promise<_8.QueryPlatformResponse>;
                        certificate(request: _8.QueryCertificateRequest): Promise<_8.QueryCertificateResponse>;
                        certificates(request: _8.QueryCertificatesRequest): Promise<_8.QueryCertificatesResponse>;
                        addrConversion(request: _8.ConversionToShentuAddrRequest): Promise<_8.ConversionToShentuAddrResponse>;
                    };
                };
                cvm: {
                    v1alpha1: {
                        code(request: _11.QueryCodeRequest): Promise<_11.QueryCodeResponse>;
                        abi(request: _11.QueryAbiRequest): Promise<_11.QueryAbiResponse>;
                        storage(request: _11.QueryStorageRequest): Promise<_11.QueryStorageResponse>;
                        addressMeta(request: _11.QueryAddressMetaRequest): Promise<_11.QueryAddressMetaResponse>;
                        meta(request: _11.QueryMetaRequest): Promise<_11.QueryMetaResponse>;
                        account(request: _11.QueryAccountRequest): Promise<acm.Account>;
                        view(request: _11.QueryViewRequest): Promise<_11.QueryViewResponse>;
                    };
                };
                gov: {
                    v1alpha1: {
                        proposal(request: cosmos.gov.v1beta1.QueryProposalRequest): Promise<cosmos.gov.v1beta1.QueryProposalResponse>;
                        proposals(request: cosmos.gov.v1beta1.QueryProposalsRequest): Promise<cosmos.gov.v1beta1.QueryProposalsResponse>;
                        vote(request: cosmos.gov.v1beta1.QueryVoteRequest): Promise<cosmos.gov.v1beta1.QueryVoteResponse>;
                        votes(request: cosmos.gov.v1beta1.QueryVotesRequest): Promise<cosmos.gov.v1beta1.QueryVotesResponse>;
                        params(request: cosmos.gov.v1beta1.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                        deposit(request: cosmos.gov.v1beta1.QueryDepositRequest): Promise<cosmos.gov.v1beta1.QueryDepositResponse>;
                        deposits(request: cosmos.gov.v1beta1.QueryDepositsRequest): Promise<cosmos.gov.v1beta1.QueryDepositsResponse>;
                        tallyResult(request: cosmos.gov.v1beta1.QueryTallyResultRequest): Promise<cosmos.gov.v1beta1.QueryTallyResultResponse>;
                        certVoted(request: _15.QueryCertVotedRequest): Promise<_15.QueryCertVotedResponse>;
                    };
                };
                oracle: {
                    v1alpha1: {
                        operator(request: _18.QueryOperatorRequest): Promise<_18.QueryOperatorResponse>;
                        operators(request?: _18.QueryOperatorsRequest): Promise<_18.QueryOperatorsResponse>;
                        withdraws(request?: _18.QueryWithdrawsRequest): Promise<_18.QueryWithdrawsResponse>;
                        task(request: _18.QueryTaskRequest): Promise<_18.QueryTaskResponse>;
                        txTask(request: _18.QueryTxTaskRequest): Promise<_18.QueryTxTaskResponse>;
                        response(request: _18.QueryResponseRequest): Promise<_18.QueryResponseResponse>;
                        txResponse(request: _18.QueryTxResponseRequest): Promise<_18.QueryTxResponseResponse>;
                        params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                    };
                };
                shield: {
                    v1alpha1: {
                        pool(request: _21.QueryPoolRequest): Promise<_21.QueryPoolResponse>;
                        sponsor(request: _21.QuerySponsorRequest): Promise<_21.QuerySponsorResponse>;
                        pools(request?: _21.QueryPoolsRequest): Promise<_21.QueryPoolsResponse>;
                        poolPurchaseLists(request: _21.QueryPoolPurchaseListsRequest): Promise<_21.QueryPurchaseListsResponse>;
                        purchaseLists(request: _21.QueryPurchaseListsRequest): Promise<_21.QueryPurchaseListsResponse>;
                        purchaseList(request: _21.QueryPurchaseListRequest): Promise<_21.QueryPurchaseListResponse>;
                        purchases(request?: _21.QueryPurchasesRequest): Promise<_21.QueryPurchasesResponse>;
                        provider(request: _21.QueryProviderRequest): Promise<_21.QueryProviderResponse>;
                        providers(request?: _21.QueryProvidersRequest): Promise<_21.QueryProvidersResponse>;
                        poolParams(request?: _21.QueryPoolParamsRequest): Promise<_21.QueryPoolParamsResponse>;
                        claimParams(request?: _21.QueryClaimParamsRequest): Promise<_21.QueryClaimParamsResponse>;
                        distrParams(request?: _21.QueryDistrParamsRequest): Promise<_21.QueryDistrParamsResponse>;
                        shieldStatus(request?: _21.QueryShieldStatusRequest): Promise<_21.QueryShieldStatusResponse>;
                        shieldStaking(request: _21.QueryShieldStakingRequest): Promise<_21.QueryShieldStakingResponse>;
                        shieldStakingRate(request?: _21.QueryShieldStakingRateRequest): Promise<_21.QueryShieldStakingRateResponse>;
                        reimbursement(request: _21.QueryReimbursementRequest): Promise<_21.QueryReimbursementResponse>;
                        reimbursements(request?: _21.QueryReimbursementsRequest): Promise<_21.QueryReimbursementsResponse>;
                    };
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
            shentu: {
                bounty: {
                    v1: _137.LCDQueryClient;
                };
                cert: {
                    v1alpha1: _138.LCDQueryClient;
                };
                cvm: {
                    v1alpha1: _139.LCDQueryClient;
                };
                gov: {
                    v1alpha1: _140.LCDQueryClient;
                };
                oracle: {
                    v1alpha1: _141.LCDQueryClient;
                };
                shield: {
                    v1alpha1: _142.LCDQueryClient;
                };
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
