import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const evmosAminoConverters: {
    "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, startTime, lockupPeriods, vestingPeriods, merge }: import("./vesting/v1/tx").MsgCreateClawbackVestingAccount) => {
            from_address: string;
            to_address: string;
            start_time: {
                seconds: string;
                nanos: number;
            };
            lockup_periods: {
                length: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            }[];
            vesting_periods: {
                length: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            }[];
            merge: boolean;
        };
        fromAmino: ({ from_address, to_address, start_time, lockup_periods, vesting_periods, merge }: {
            from_address: string;
            to_address: string;
            start_time: {
                seconds: string;
                nanos: number;
            };
            lockup_periods: {
                length: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            }[];
            vesting_periods: {
                length: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            }[];
            merge: boolean;
        }) => import("./vesting/v1/tx").MsgCreateClawbackVestingAccount;
    };
    "/evmos.vesting.v1.MsgClawback": {
        aminoType: string;
        toAmino: ({ funderAddress, accountAddress, destAddress }: import("./vesting/v1/tx").MsgClawback) => {
            funder_address: string;
            account_address: string;
            dest_address: string;
        };
        fromAmino: ({ funder_address, account_address, dest_address }: {
            funder_address: string;
            account_address: string;
            dest_address: string;
        }) => import("./vesting/v1/tx").MsgClawback;
    };
    "/evmos.vesting.v1.MsgUpdateVestingFunder": {
        aminoType: string;
        toAmino: ({ funderAddress, newFunderAddress, vestingAddress }: import("./vesting/v1/tx").MsgUpdateVestingFunder) => {
            funder_address: string;
            new_funder_address: string;
            vesting_address: string;
        };
        fromAmino: ({ funder_address, new_funder_address, vesting_address }: {
            funder_address: string;
            new_funder_address: string;
            vesting_address: string;
        }) => import("./vesting/v1/tx").MsgUpdateVestingFunder;
    };
    "/evmos.vesting.v1.MsgConvertVestingAccount": {
        aminoType: string;
        toAmino: ({ vestingAddress }: import("./vesting/v1/tx").MsgConvertVestingAccount) => {
            vesting_address: string;
        };
        fromAmino: ({ vesting_address }: {
            vesting_address: string;
        }) => import("./vesting/v1/tx").MsgConvertVestingAccount;
    };
    "/evmos.revenue.v1.MsgRegisterRevenue": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress, nonces }: import("./revenue/v1/tx").MsgRegisterRevenue) => {
            contract_address: string;
            deployer_address: string;
            withdrawer_address: string;
            nonces: string[];
        };
        fromAmino: ({ contract_address, deployer_address, withdrawer_address, nonces }: {
            contract_address: string;
            deployer_address: string;
            withdrawer_address: string;
            nonces: string[];
        }) => import("./revenue/v1/tx").MsgRegisterRevenue;
    };
    "/evmos.revenue.v1.MsgUpdateRevenue": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: import("./revenue/v1/tx").MsgUpdateRevenue) => {
            contract_address: string;
            deployer_address: string;
            withdrawer_address: string;
        };
        fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
            contract_address: string;
            deployer_address: string;
            withdrawer_address: string;
        }) => import("./revenue/v1/tx").MsgUpdateRevenue;
    };
    "/evmos.revenue.v1.MsgCancelRevenue": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress }: import("./revenue/v1/tx").MsgCancelRevenue) => {
            contract_address: string;
            deployer_address: string;
        };
        fromAmino: ({ contract_address, deployer_address }: {
            contract_address: string;
            deployer_address: string;
        }) => import("./revenue/v1/tx").MsgCancelRevenue;
    };
    "/evmos.revenue.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./revenue/v1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                enable_revenue: boolean;
                developer_shares: string;
                addr_derivation_cost_create: string;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                enable_revenue: boolean;
                developer_shares: string;
                addr_derivation_cost_create: string;
            };
        }) => import("./revenue/v1/tx").MsgUpdateParams;
    };
    "/evmos.recovery.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./recovery/v1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                enable_recovery: boolean;
                packet_timeout_duration: {
                    seconds: string;
                    nanos: number;
                };
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                enable_recovery: boolean;
                packet_timeout_duration: {
                    seconds: string;
                    nanos: number;
                };
            };
        }) => import("./recovery/v1/tx").MsgUpdateParams;
    };
    "/evmos.inflation.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./inflation/v1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                mint_denom: string;
                exponential_calculation: {
                    a: string;
                    r: string;
                    c: string;
                    bonding_target: string;
                    max_variance: string;
                };
                inflation_distribution: {
                    staking_rewards: string;
                    usage_incentives: string;
                    community_pool: string;
                };
                enable_inflation: boolean;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                mint_denom: string;
                exponential_calculation: {
                    a: string;
                    r: string;
                    c: string;
                    bonding_target: string;
                    max_variance: string;
                };
                inflation_distribution: {
                    staking_rewards: string;
                    usage_incentives: string;
                    community_pool: string;
                };
                enable_inflation: boolean;
            };
        }) => import("./inflation/v1/tx").MsgUpdateParams;
    };
    "/evmos.incentives.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./incentives/v1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                enable_incentives: boolean;
                allocation_limit: string;
                incentives_epoch_identifier: string;
                reward_scaler: string;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                enable_incentives: boolean;
                allocation_limit: string;
                incentives_epoch_identifier: string;
                reward_scaler: string;
            };
        }) => import("./incentives/v1/tx").MsgUpdateParams;
    };
    "/evmos.erc20.v1.MsgConvertCoin": {
        aminoType: string;
        toAmino: ({ coin, receiver, sender }: import("./erc20/v1/tx").MsgConvertCoin) => {
            coin: {
                denom: string;
                amount: string;
            };
            receiver: string;
            sender: string;
        };
        fromAmino: ({ coin, receiver, sender }: {
            coin: {
                denom: string;
                amount: string;
            };
            receiver: string;
            sender: string;
        }) => import("./erc20/v1/tx").MsgConvertCoin;
    };
    "/evmos.erc20.v1.MsgConvertERC20": {
        aminoType: string;
        toAmino: ({ contractAddress, amount, receiver, sender }: import("./erc20/v1/tx").MsgConvertERC20) => {
            contract_address: string;
            amount: string;
            receiver: string;
            sender: string;
        };
        fromAmino: ({ contract_address, amount, receiver, sender }: {
            contract_address: string;
            amount: string;
            receiver: string;
            sender: string;
        }) => import("./erc20/v1/tx").MsgConvertERC20;
    };
    "/evmos.erc20.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./erc20/v1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                enable_erc20: boolean;
                enable_evm_hook: boolean;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                enable_erc20: boolean;
                enable_evm_hook: boolean;
            };
        }) => import("./erc20/v1/tx").MsgUpdateParams;
    };
    "/evmos.claims.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./claims/v1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                enable_claims: boolean;
                airdrop_start_time: {
                    seconds: string;
                    nanos: number;
                };
                duration_until_decay: {
                    seconds: string;
                    nanos: number;
                };
                duration_of_decay: {
                    seconds: string;
                    nanos: number;
                };
                claims_denom: string;
                authorized_channels: string[];
                evm_channels: string[];
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                enable_claims: boolean;
                airdrop_start_time: {
                    seconds: string;
                    nanos: number;
                };
                duration_until_decay: {
                    seconds: string;
                    nanos: number;
                };
                duration_of_decay: {
                    seconds: string;
                    nanos: number;
                };
                claims_denom: string;
                authorized_channels: string[];
                evm_channels: string[];
            };
        }) => import("./claims/v1/tx").MsgUpdateParams;
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
