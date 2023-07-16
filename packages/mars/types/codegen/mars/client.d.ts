import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const marsAminoConverters: {
    "/mars.safety.v1beta1.MsgSafetyFundSpend": {
        aminoType: string;
        toAmino: ({ authority, recipient, amount }: import("./safety/v1beta1/tx").MsgSafetyFundSpend) => {
            authority: string;
            recipient: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ authority, recipient, amount }: {
            authority: string;
            recipient: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./safety/v1beta1/tx").MsgSafetyFundSpend;
    };
    "/mars.incentives.v1beta1.MsgCreateSchedule": {
        aminoType: string;
        toAmino: ({ authority, startTime, endTime, amount }: import("./incentives/v1beta1/tx").MsgCreateSchedule) => {
            authority: string;
            start_time: {
                seconds: string;
                nanos: number;
            };
            end_time: {
                seconds: string;
                nanos: number;
            };
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ authority, start_time, end_time, amount }: {
            authority: string;
            start_time: {
                seconds: string;
                nanos: number;
            };
            end_time: {
                seconds: string;
                nanos: number;
            };
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./incentives/v1beta1/tx").MsgCreateSchedule;
    };
    "/mars.incentives.v1beta1.MsgTerminateSchedules": {
        aminoType: string;
        toAmino: ({ authority, ids }: import("./incentives/v1beta1/tx").MsgTerminateSchedules) => {
            authority: string;
            ids: string[];
        };
        fromAmino: ({ authority, ids }: {
            authority: string;
            ids: string[];
        }) => import("./incentives/v1beta1/tx").MsgTerminateSchedules;
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
