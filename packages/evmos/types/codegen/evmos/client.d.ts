import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const evmosAminoConverters: {
    "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
        aminoType: string;
        toAmino: (message: import("./vesting/v1/tx").MsgCreateClawbackVestingAccount) => import("./vesting/v1/tx").MsgCreateClawbackVestingAccountAmino;
        fromAmino: (object: import("./vesting/v1/tx").MsgCreateClawbackVestingAccountAmino) => import("./vesting/v1/tx").MsgCreateClawbackVestingAccount;
    };
    "/evmos.vesting.v1.MsgClawback": {
        aminoType: string;
        toAmino: (message: import("./vesting/v1/tx").MsgClawback) => import("./vesting/v1/tx").MsgClawbackAmino;
        fromAmino: (object: import("./vesting/v1/tx").MsgClawbackAmino) => import("./vesting/v1/tx").MsgClawback;
    };
    "/evmos.vesting.v1.MsgUpdateVestingFunder": {
        aminoType: string;
        toAmino: (message: import("./vesting/v1/tx").MsgUpdateVestingFunder) => import("./vesting/v1/tx").MsgUpdateVestingFunderAmino;
        fromAmino: (object: import("./vesting/v1/tx").MsgUpdateVestingFunderAmino) => import("./vesting/v1/tx").MsgUpdateVestingFunder;
    };
    "/evmos.vesting.v1.MsgConvertVestingAccount": {
        aminoType: string;
        toAmino: (message: import("./vesting/v1/tx").MsgConvertVestingAccount) => import("./vesting/v1/tx").MsgConvertVestingAccountAmino;
        fromAmino: (object: import("./vesting/v1/tx").MsgConvertVestingAccountAmino) => import("./vesting/v1/tx").MsgConvertVestingAccount;
    };
    "/evmos.revenue.v1.MsgRegisterRevenue": {
        aminoType: string;
        toAmino: (message: import("./revenue/v1/tx").MsgRegisterRevenue) => import("./revenue/v1/tx").MsgRegisterRevenueAmino;
        fromAmino: (object: import("./revenue/v1/tx").MsgRegisterRevenueAmino) => import("./revenue/v1/tx").MsgRegisterRevenue;
    };
    "/evmos.revenue.v1.MsgUpdateRevenue": {
        aminoType: string;
        toAmino: (message: import("./revenue/v1/tx").MsgUpdateRevenue) => import("./revenue/v1/tx").MsgUpdateRevenueAmino;
        fromAmino: (object: import("./revenue/v1/tx").MsgUpdateRevenueAmino) => import("./revenue/v1/tx").MsgUpdateRevenue;
    };
    "/evmos.revenue.v1.MsgCancelRevenue": {
        aminoType: string;
        toAmino: (message: import("./revenue/v1/tx").MsgCancelRevenue) => import("./revenue/v1/tx").MsgCancelRevenueAmino;
        fromAmino: (object: import("./revenue/v1/tx").MsgCancelRevenueAmino) => import("./revenue/v1/tx").MsgCancelRevenue;
    };
    "/evmos.revenue.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./revenue/v1/tx").MsgUpdateParams) => import("./revenue/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./revenue/v1/tx").MsgUpdateParamsAmino) => import("./revenue/v1/tx").MsgUpdateParams;
    };
    "/evmos.recovery.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./recovery/v1/tx").MsgUpdateParams) => import("./recovery/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./recovery/v1/tx").MsgUpdateParamsAmino) => import("./recovery/v1/tx").MsgUpdateParams;
    };
    "/evmos.inflation.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./inflation/v1/tx").MsgUpdateParams) => import("./inflation/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./inflation/v1/tx").MsgUpdateParamsAmino) => import("./inflation/v1/tx").MsgUpdateParams;
    };
    "/evmos.incentives.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./incentives/v1/tx").MsgUpdateParams) => import("./incentives/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./incentives/v1/tx").MsgUpdateParamsAmino) => import("./incentives/v1/tx").MsgUpdateParams;
    };
    "/evmos.erc20.v1.MsgConvertCoin": {
        aminoType: string;
        toAmino: (message: import("./erc20/v1/tx").MsgConvertCoin) => import("./erc20/v1/tx").MsgConvertCoinAmino;
        fromAmino: (object: import("./erc20/v1/tx").MsgConvertCoinAmino) => import("./erc20/v1/tx").MsgConvertCoin;
    };
    "/evmos.erc20.v1.MsgConvertERC20": {
        aminoType: string;
        toAmino: (message: import("./erc20/v1/tx").MsgConvertERC20) => import("./erc20/v1/tx").MsgConvertERC20Amino;
        fromAmino: (object: import("./erc20/v1/tx").MsgConvertERC20Amino) => import("./erc20/v1/tx").MsgConvertERC20;
    };
    "/evmos.erc20.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./erc20/v1/tx").MsgUpdateParams) => import("./erc20/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./erc20/v1/tx").MsgUpdateParamsAmino) => import("./erc20/v1/tx").MsgUpdateParams;
    };
    "/evmos.claims.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./claims/v1/tx").MsgUpdateParams) => import("./claims/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./claims/v1/tx").MsgUpdateParamsAmino) => import("./claims/v1/tx").MsgUpdateParams;
    };
};
export declare const evmosProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningEvmosClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningEvmosClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
