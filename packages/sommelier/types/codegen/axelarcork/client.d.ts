import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const axelarcorkAminoConverters: {
    "/axelarcork.v1.MsgScheduleAxelarCorkRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgScheduleAxelarCorkRequest) => import("./v1/tx").MsgScheduleAxelarCorkRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgScheduleAxelarCorkRequestAmino) => import("./v1/tx").MsgScheduleAxelarCorkRequest;
    };
    "/axelarcork.v1.MsgRelayAxelarCorkRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgRelayAxelarCorkRequest) => import("./v1/tx").MsgRelayAxelarCorkRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgRelayAxelarCorkRequestAmino) => import("./v1/tx").MsgRelayAxelarCorkRequest;
    };
    "/axelarcork.v1.MsgBumpAxelarCorkGasRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgBumpAxelarCorkGasRequest) => import("./v1/tx").MsgBumpAxelarCorkGasRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgBumpAxelarCorkGasRequestAmino) => import("./v1/tx").MsgBumpAxelarCorkGasRequest;
    };
    "/axelarcork.v1.MsgCancelAxelarCorkRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgCancelAxelarCorkRequest) => import("./v1/tx").MsgCancelAxelarCorkRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgCancelAxelarCorkRequestAmino) => import("./v1/tx").MsgCancelAxelarCorkRequest;
    };
};
export declare const axelarcorkProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningAxelarcorkClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningAxelarcorkClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
