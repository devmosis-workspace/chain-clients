import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const marsAminoConverters: {
    "/mars.safety.v1beta1.MsgSafetyFundSpend": {
        aminoType: string;
        toAmino: (message: import("./safety/v1beta1/tx").MsgSafetyFundSpend) => import("./safety/v1beta1/tx").MsgSafetyFundSpendAmino;
        fromAmino: (object: import("./safety/v1beta1/tx").MsgSafetyFundSpendAmino) => import("./safety/v1beta1/tx").MsgSafetyFundSpend;
    };
    "/mars.incentives.v1beta1.MsgCreateSchedule": {
        aminoType: string;
        toAmino: (message: import("./incentives/v1beta1/tx").MsgCreateSchedule) => import("./incentives/v1beta1/tx").MsgCreateScheduleAmino;
        fromAmino: (object: import("./incentives/v1beta1/tx").MsgCreateScheduleAmino) => import("./incentives/v1beta1/tx").MsgCreateSchedule;
    };
    "/mars.incentives.v1beta1.MsgTerminateSchedules": {
        aminoType: string;
        toAmino: (message: import("./incentives/v1beta1/tx").MsgTerminateSchedules) => import("./incentives/v1beta1/tx").MsgTerminateSchedulesAmino;
        fromAmino: (object: import("./incentives/v1beta1/tx").MsgTerminateSchedulesAmino) => import("./incentives/v1beta1/tx").MsgTerminateSchedules;
    };
};
export declare const marsProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningMarsClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningMarsClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
