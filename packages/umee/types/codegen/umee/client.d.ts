import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const umeeAminoConverters: {
    "/umee.uibc.v1.MsgGovUpdateQuota": {
        aminoType: string;
        toAmino: ({ authority, title, description, total, perDenom, quotaDuration }: import("./uibc/v1/tx").MsgGovUpdateQuota) => {
            authority: string;
            title: string;
            description: string;
            total: string;
            per_denom: string;
            quota_duration: {
                seconds: string;
                nanos: number;
            };
        };
        fromAmino: ({ authority, title, description, total, per_denom, quota_duration }: {
            authority: string;
            title: string;
            description: string;
            total: string;
            per_denom: string;
            quota_duration: {
                seconds: string;
                nanos: number;
            };
        }) => import("./uibc/v1/tx").MsgGovUpdateQuota;
    };
    "/umee.uibc.v1.MsgGovSetIBCStatus": {
        aminoType: string;
        toAmino: ({ authority, title, description, ibcStatus }: import("./uibc/v1/tx").MsgGovSetIBCStatus) => {
            authority: string;
            title: string;
            description: string;
            ibc_status: number;
        };
        fromAmino: ({ authority, title, description, ibc_status }: {
            authority: string;
            title: string;
            description: string;
            ibc_status: number;
        }) => import("./uibc/v1/tx").MsgGovSetIBCStatus;
    };
    "/umee.ugov.v1.MsgGovUpdateMinGasPrice": {
        aminoType: string;
        toAmino: ({ authority, minGasPrice }: import("./ugov/v1/tx").MsgGovUpdateMinGasPrice) => {
            authority: string;
            min_gas_price: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ authority, min_gas_price }: {
            authority: string;
            min_gas_price: {
                denom: string;
                amount: string;
            };
        }) => import("./ugov/v1/tx").MsgGovUpdateMinGasPrice;
    };
    "/umee.oracle.v1.MsgAggregateExchangeRatePrevote": {
        aminoType: string;
        toAmino: ({ hash, feeder, validator }: import("./oracle/v1/tx").MsgAggregateExchangeRatePrevote) => {
            hash: string;
            feeder: string;
            validator: string;
        };
        fromAmino: ({ hash, feeder, validator }: {
            hash: string;
            feeder: string;
            validator: string;
        }) => import("./oracle/v1/tx").MsgAggregateExchangeRatePrevote;
    };
    "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: ({ salt, exchangeRates, feeder, validator }: import("./oracle/v1/tx").MsgAggregateExchangeRateVote) => {
            salt: string;
            exchange_rates: string;
            feeder: string;
            validator: string;
        };
        fromAmino: ({ salt, exchange_rates, feeder, validator }: {
            salt: string;
            exchange_rates: string;
            feeder: string;
            validator: string;
        }) => import("./oracle/v1/tx").MsgAggregateExchangeRateVote;
    };
    "/umee.oracle.v1.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: ({ operator, delegate }: import("./oracle/v1/tx").MsgDelegateFeedConsent) => {
            operator: string;
            delegate: string;
        };
        fromAmino: ({ operator, delegate }: {
            operator: string;
            delegate: string;
        }) => import("./oracle/v1/tx").MsgDelegateFeedConsent;
    };
    "/umee.leverage.v1.MsgSupply": {
        aminoType: string;
        toAmino: ({ supplier, asset }: import("./leverage/v1/tx").MsgSupply) => {
            supplier: string;
            asset: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ supplier, asset }: {
            supplier: string;
            asset: {
                denom: string;
                amount: string;
            };
        }) => import("./leverage/v1/tx").MsgSupply;
    };
    "/umee.leverage.v1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ supplier, asset }: import("./leverage/v1/tx").MsgWithdraw) => {
            supplier: string;
            asset: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ supplier, asset }: {
            supplier: string;
            asset: {
                denom: string;
                amount: string;
            };
        }) => import("./leverage/v1/tx").MsgWithdraw;
    };
    "/umee.leverage.v1.MsgMaxWithdraw": {
        aminoType: string;
        toAmino: ({ supplier, denom }: import("./leverage/v1/tx").MsgMaxWithdraw) => {
            supplier: string;
            denom: string;
        };
        fromAmino: ({ supplier, denom }: {
            supplier: string;
            denom: string;
        }) => import("./leverage/v1/tx").MsgMaxWithdraw;
    };
    "/umee.leverage.v1.MsgCollateralize": {
        aminoType: string;
        toAmino: ({ borrower, asset }: import("./leverage/v1/tx").MsgCollateralize) => {
            borrower: string;
            asset: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ borrower, asset }: {
            borrower: string;
            asset: {
                denom: string;
                amount: string;
            };
        }) => import("./leverage/v1/tx").MsgCollateralize;
    };
    "/umee.leverage.v1.MsgDecollateralize": {
        aminoType: string;
        toAmino: ({ borrower, asset }: import("./leverage/v1/tx").MsgDecollateralize) => {
            borrower: string;
            asset: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ borrower, asset }: {
            borrower: string;
            asset: {
                denom: string;
                amount: string;
            };
        }) => import("./leverage/v1/tx").MsgDecollateralize;
    };
    "/umee.leverage.v1.MsgBorrow": {
        aminoType: string;
        toAmino: ({ borrower, asset }: import("./leverage/v1/tx").MsgBorrow) => {
            borrower: string;
            asset: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ borrower, asset }: {
            borrower: string;
            asset: {
                denom: string;
                amount: string;
            };
        }) => import("./leverage/v1/tx").MsgBorrow;
    };
    "/umee.leverage.v1.MsgMaxBorrow": {
        aminoType: string;
        toAmino: ({ borrower, denom }: import("./leverage/v1/tx").MsgMaxBorrow) => {
            borrower: string;
            denom: string;
        };
        fromAmino: ({ borrower, denom }: {
            borrower: string;
            denom: string;
        }) => import("./leverage/v1/tx").MsgMaxBorrow;
    };
    "/umee.leverage.v1.MsgRepay": {
        aminoType: string;
        toAmino: ({ borrower, asset }: import("./leverage/v1/tx").MsgRepay) => {
            borrower: string;
            asset: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ borrower, asset }: {
            borrower: string;
            asset: {
                denom: string;
                amount: string;
            };
        }) => import("./leverage/v1/tx").MsgRepay;
    };
    "/umee.leverage.v1.MsgLiquidate": {
        aminoType: string;
        toAmino: ({ liquidator, borrower, repayment, rewardDenom }: import("./leverage/v1/tx").MsgLiquidate) => {
            liquidator: string;
            borrower: string;
            repayment: {
                denom: string;
                amount: string;
            };
            reward_denom: string;
        };
        fromAmino: ({ liquidator, borrower, repayment, reward_denom }: {
            liquidator: string;
            borrower: string;
            repayment: {
                denom: string;
                amount: string;
            };
            reward_denom: string;
        }) => import("./leverage/v1/tx").MsgLiquidate;
    };
    "/umee.leverage.v1.MsgLeveragedLiquidate": {
        aminoType: string;
        toAmino: ({ liquidator, borrower, repayDenom, rewardDenom }: import("./leverage/v1/tx").MsgLeveragedLiquidate) => {
            liquidator: string;
            borrower: string;
            repay_denom: string;
            reward_denom: string;
        };
        fromAmino: ({ liquidator, borrower, repay_denom, reward_denom }: {
            liquidator: string;
            borrower: string;
            repay_denom: string;
            reward_denom: string;
        }) => import("./leverage/v1/tx").MsgLeveragedLiquidate;
    };
    "/umee.leverage.v1.MsgSupplyCollateral": {
        aminoType: string;
        toAmino: ({ supplier, asset }: import("./leverage/v1/tx").MsgSupplyCollateral) => {
            supplier: string;
            asset: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ supplier, asset }: {
            supplier: string;
            asset: {
                denom: string;
                amount: string;
            };
        }) => import("./leverage/v1/tx").MsgSupplyCollateral;
    };
    "/umee.leverage.v1.MsgGovUpdateRegistry": {
        aminoType: string;
        toAmino: ({ authority, title, description, addTokens, updateTokens }: import("./leverage/v1/tx").MsgGovUpdateRegistry) => {
            authority: string;
            title: string;
            description: string;
            add_tokens: {
                base_denom: string;
                reserve_factor: string;
                collateral_weight: string;
                liquidation_threshold: string;
                base_borrow_rate: string;
                kink_borrow_rate: string;
                max_borrow_rate: string;
                kink_utilization: string;
                liquidation_incentive: string;
                symbol_denom: string;
                exponent: number;
                enable_msg_supply: boolean;
                enable_msg_borrow: boolean;
                blacklist: boolean;
                max_collateral_share: string;
                max_supply_utilization: string;
                min_collateral_liquidity: string;
                max_supply: string;
                historic_medians: number;
            }[];
            update_tokens: {
                base_denom: string;
                reserve_factor: string;
                collateral_weight: string;
                liquidation_threshold: string;
                base_borrow_rate: string;
                kink_borrow_rate: string;
                max_borrow_rate: string;
                kink_utilization: string;
                liquidation_incentive: string;
                symbol_denom: string;
                exponent: number;
                enable_msg_supply: boolean;
                enable_msg_borrow: boolean;
                blacklist: boolean;
                max_collateral_share: string;
                max_supply_utilization: string;
                min_collateral_liquidity: string;
                max_supply: string;
                historic_medians: number;
            }[];
        };
        fromAmino: ({ authority, title, description, add_tokens, update_tokens }: {
            authority: string;
            title: string;
            description: string;
            add_tokens: {
                base_denom: string;
                reserve_factor: string;
                collateral_weight: string;
                liquidation_threshold: string;
                base_borrow_rate: string;
                kink_borrow_rate: string;
                max_borrow_rate: string;
                kink_utilization: string;
                liquidation_incentive: string;
                symbol_denom: string;
                exponent: number;
                enable_msg_supply: boolean;
                enable_msg_borrow: boolean;
                blacklist: boolean;
                max_collateral_share: string;
                max_supply_utilization: string;
                min_collateral_liquidity: string;
                max_supply: string;
                historic_medians: number;
            }[];
            update_tokens: {
                base_denom: string;
                reserve_factor: string;
                collateral_weight: string;
                liquidation_threshold: string;
                base_borrow_rate: string;
                kink_borrow_rate: string;
                max_borrow_rate: string;
                kink_utilization: string;
                liquidation_incentive: string;
                symbol_denom: string;
                exponent: number;
                enable_msg_supply: boolean;
                enable_msg_borrow: boolean;
                blacklist: boolean;
                max_collateral_share: string;
                max_supply_utilization: string;
                min_collateral_liquidity: string;
                max_supply: string;
                historic_medians: number;
            }[];
        }) => import("./leverage/v1/tx").MsgGovUpdateRegistry;
    };
    "/umee.incentive.v1.MsgClaim": {
        aminoType: string;
        toAmino: ({ account }: import("./incentive/v1/tx").MsgClaim) => {
            account: string;
        };
        fromAmino: ({ account }: {
            account: string;
        }) => import("./incentive/v1/tx").MsgClaim;
    };
    "/umee.incentive.v1.MsgBond": {
        aminoType: string;
        toAmino: ({ account, uToken }: import("./incentive/v1/tx").MsgBond) => {
            account: string;
            uToken: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ account, uToken }: {
            account: string;
            uToken: {
                denom: string;
                amount: string;
            };
        }) => import("./incentive/v1/tx").MsgBond;
    };
    "/umee.incentive.v1.MsgBeginUnbonding": {
        aminoType: string;
        toAmino: ({ account, uToken }: import("./incentive/v1/tx").MsgBeginUnbonding) => {
            account: string;
            uToken: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ account, uToken }: {
            account: string;
            uToken: {
                denom: string;
                amount: string;
            };
        }) => import("./incentive/v1/tx").MsgBeginUnbonding;
    };
    "/umee.incentive.v1.MsgEmergencyUnbond": {
        aminoType: string;
        toAmino: ({ account, uToken }: import("./incentive/v1/tx").MsgEmergencyUnbond) => {
            account: string;
            uToken: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ account, uToken }: {
            account: string;
            uToken: {
                denom: string;
                amount: string;
            };
        }) => import("./incentive/v1/tx").MsgEmergencyUnbond;
    };
    "/umee.incentive.v1.MsgSponsor": {
        aminoType: string;
        toAmino: ({ sponsor, program }: import("./incentive/v1/tx").MsgSponsor) => {
            sponsor: string;
            program: number;
        };
        fromAmino: ({ sponsor, program }: {
            sponsor: string;
            program: number;
        }) => import("./incentive/v1/tx").MsgSponsor;
    };
    "/umee.incentive.v1.MsgGovSetParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./incentive/v1/tx").MsgGovSetParams) => {
            authority: string;
            params: {
                max_unbondings: number;
                unbonding_duration: string;
                emergency_unbond_fee: string;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                max_unbondings: number;
                unbonding_duration: string;
                emergency_unbond_fee: string;
            };
        }) => import("./incentive/v1/tx").MsgGovSetParams;
    };
    "/umee.incentive.v1.MsgGovCreatePrograms": {
        aminoType: string;
        toAmino: ({ authority, programs, fromCommunityFund }: import("./incentive/v1/tx").MsgGovCreatePrograms) => {
            authority: string;
            programs: {
                ID: number;
                start_time: string;
                duration: string;
                uToken: string;
                funded: boolean;
                total_rewards: {
                    denom: string;
                    amount: string;
                };
                remaining_rewards: {
                    denom: string;
                    amount: string;
                };
            }[];
            from_community_fund: boolean;
        };
        fromAmino: ({ authority, programs, from_community_fund }: {
            authority: string;
            programs: {
                ID: number;
                start_time: string;
                duration: string;
                uToken: string;
                funded: boolean;
                total_rewards: {
                    denom: string;
                    amount: string;
                };
                remaining_rewards: {
                    denom: string;
                    amount: string;
                };
            }[];
            from_community_fund: boolean;
        }) => import("./incentive/v1/tx").MsgGovCreatePrograms;
    };
};
export declare const umeeProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningUmeeClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningUmeeClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
