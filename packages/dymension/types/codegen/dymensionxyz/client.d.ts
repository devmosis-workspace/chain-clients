import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const dymensionxyzAminoConverters: {
    "/dymensionxyz.dymension.sequencer.MsgCreateSequencer": {
        aminoType: string;
        toAmino: (message: import("../dymension/sequencer/tx").MsgCreateSequencer) => import("../dymension/sequencer/tx").MsgCreateSequencerAmino;
        fromAmino: (object: import("../dymension/sequencer/tx").MsgCreateSequencerAmino) => import("../dymension/sequencer/tx").MsgCreateSequencer;
    };
    "/dymensionxyz.dymension.rollapp.MsgCreateRollapp": {
        aminoType: string;
        toAmino: (message: import("../dymension/rollapp/tx").MsgCreateRollapp) => import("../dymension/rollapp/tx").MsgCreateRollappAmino;
        fromAmino: (object: import("../dymension/rollapp/tx").MsgCreateRollappAmino) => import("../dymension/rollapp/tx").MsgCreateRollapp;
    };
    "/dymensionxyz.dymension.rollapp.MsgUpdateState": {
        aminoType: string;
        toAmino: (message: import("../dymension/rollapp/tx").MsgUpdateState) => import("../dymension/rollapp/tx").MsgUpdateStateAmino;
        fromAmino: (object: import("../dymension/rollapp/tx").MsgUpdateStateAmino) => import("../dymension/rollapp/tx").MsgUpdateState;
    };
};
export declare const dymensionxyzProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningDymensionxyzClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningDymensionxyzClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
