import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const osmosisAminoConverters: {
    "/osmosis.lockup.MsgLockTokens": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgLockTokens) => import("./lockup/tx").MsgLockTokensAmino;
        fromAmino: (object: import("./lockup/tx").MsgLockTokensAmino) => import("./lockup/tx").MsgLockTokens;
    };
    "/osmosis.lockup.MsgBeginUnlockingAll": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgBeginUnlockingAll) => import("./lockup/tx").MsgBeginUnlockingAllAmino;
        fromAmino: (object: import("./lockup/tx").MsgBeginUnlockingAllAmino) => import("./lockup/tx").MsgBeginUnlockingAll;
    };
    "/osmosis.lockup.MsgBeginUnlocking": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgBeginUnlocking) => import("./lockup/tx").MsgBeginUnlockingAmino;
        fromAmino: (object: import("./lockup/tx").MsgBeginUnlockingAmino) => import("./lockup/tx").MsgBeginUnlocking;
    };
    "/osmosis.lockup.MsgExtendLockup": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgExtendLockup) => import("./lockup/tx").MsgExtendLockupAmino;
        fromAmino: (object: import("./lockup/tx").MsgExtendLockupAmino) => import("./lockup/tx").MsgExtendLockup;
    };
    "/osmosis.gamm.v1beta1.MsgJoinPool": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinPool) => import("./gamm/v1beta1/tx").MsgJoinPoolAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinPoolAmino) => import("./gamm/v1beta1/tx").MsgJoinPool;
    };
    "/osmosis.gamm.v1beta1.MsgExitPool": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgExitPool) => import("./gamm/v1beta1/tx").MsgExitPoolAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitPoolAmino) => import("./gamm/v1beta1/tx").MsgExitPool;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgSwapExactAmountIn) => import("./gamm/v1beta1/tx").MsgSwapExactAmountInAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgSwapExactAmountInAmino) => import("./gamm/v1beta1/tx").MsgSwapExactAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgSwapExactAmountOut) => import("./gamm/v1beta1/tx").MsgSwapExactAmountOutAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgSwapExactAmountOutAmino) => import("./gamm/v1beta1/tx").MsgSwapExactAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn) => import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountInAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountInAmino) => import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut) => import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOutAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOutAmino) => import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut) => import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOutAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOutAmino) => import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn) => import("./gamm/v1beta1/tx").MsgExitSwapShareAmountInAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitSwapShareAmountInAmino) => import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn;
    };
    "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
        aminoType: string;
        toAmino: (message: import("./gamm/pool-models/balancer/tx/tx").MsgCreateBalancerPool) => import("./gamm/pool-models/balancer/tx/tx").MsgCreateBalancerPoolAmino;
        fromAmino: (object: import("./gamm/pool-models/balancer/tx/tx").MsgCreateBalancerPoolAmino) => import("./gamm/pool-models/balancer/tx/tx").MsgCreateBalancerPool;
    };
};
export declare const osmosisProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningOsmosisClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningOsmosisClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
