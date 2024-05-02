import * as _0 from "./admin/v1/query";
import * as _1 from "./admin/v1/tx";
import * as _2 from "./admin/v1/types";
import * as _3 from "./clp/v1/genesis";
import * as _4 from "./clp/v1/params";
import * as _5 from "./clp/v1/querier";
import * as _6 from "./clp/v1/rewards_bucket";
import * as _7 from "./clp/v1/tx";
import * as _8 from "./clp/v1/types";
import * as _9 from "./dispensation/v1/query";
import * as _10 from "./dispensation/v1/tx";
import * as _11 from "./dispensation/v1/types";
import * as _12 from "./epochs/v1/genesis";
import * as _13 from "./epochs/v1/query";
import * as _14 from "./ethbridge/v1/genesis";
import * as _15 from "./ethbridge/v1/query";
import * as _16 from "./ethbridge/v1/tx";
import * as _17 from "./ethbridge/v1/types";
import * as _18 from "./margin/v1/genesis";
import * as _19 from "./margin/v1/params";
import * as _20 from "./margin/v1/query";
import * as _21 from "./margin/v1/tx";
import * as _22 from "./margin/v1/types";
import * as _23 from "./oracle/v1/genesis";
import * as _24 from "./oracle/v1/types";
import * as _25 from "./tokenregistry/v1/genesis";
import * as _26 from "./tokenregistry/v1/query";
import * as _27 from "./tokenregistry/v1/tx";
import * as _28 from "./tokenregistry/v1/types";
import * as _132 from "./clp/v1/querier.lcd";
import * as _133 from "./epochs/v1/query.lcd";
import * as _134 from "./margin/v1/query.lcd";
import * as _135 from "./tokenregistry/v1/query.lcd";
import * as _136 from "./admin/v1/query.rpc.Query";
import * as _137 from "./clp/v1/querier.rpc.Query";
import * as _138 from "./dispensation/v1/query.rpc.Query";
import * as _139 from "./epochs/v1/query.rpc.Query";
import * as _140 from "./ethbridge/v1/query.rpc.Query";
import * as _141 from "./margin/v1/query.rpc.Query";
import * as _142 from "./tokenregistry/v1/query.rpc.Query";
import * as _143 from "./admin/v1/tx.rpc.msg";
import * as _144 from "./clp/v1/tx.rpc.msg";
import * as _145 from "./dispensation/v1/tx.rpc.msg";
import * as _146 from "./ethbridge/v1/tx.rpc.msg";
import * as _147 from "./margin/v1/tx.rpc.msg";
import * as _148 from "./tokenregistry/v1/tx.rpc.msg";
export declare namespace sifnode {
    namespace admin {
        const v1: {
            MsgClientImpl: typeof _143.MsgClientImpl;
            QueryClientImpl: typeof _136.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                listAccounts(request?: _0.ListAccountsRequest): Promise<_0.ListAccountsResponse>;
                getParams(request?: _0.GetParamsRequest): Promise<_0.GetParamsResponse>;
            };
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    addAccount(value: _1.MsgAddAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeAccount(value: _1.MsgRemoveAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setParams(value: _1.MsgSetParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    addAccount(value: _1.MsgAddAccount): {
                        typeUrl: string;
                        value: _1.MsgAddAccount;
                    };
                    removeAccount(value: _1.MsgRemoveAccount): {
                        typeUrl: string;
                        value: _1.MsgRemoveAccount;
                    };
                    setParams(value: _1.MsgSetParams): {
                        typeUrl: string;
                        value: _1.MsgSetParams;
                    };
                };
                fromJSON: {
                    addAccount(value: any): {
                        typeUrl: string;
                        value: _1.MsgAddAccount;
                    };
                    removeAccount(value: any): {
                        typeUrl: string;
                        value: _1.MsgRemoveAccount;
                    };
                    setParams(value: any): {
                        typeUrl: string;
                        value: _1.MsgSetParams;
                    };
                };
                fromPartial: {
                    addAccount(value: _1.MsgAddAccount): {
                        typeUrl: string;
                        value: _1.MsgAddAccount;
                    };
                    removeAccount(value: _1.MsgRemoveAccount): {
                        typeUrl: string;
                        value: _1.MsgRemoveAccount;
                    };
                    setParams(value: _1.MsgSetParams): {
                        typeUrl: string;
                        value: _1.MsgSetParams;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.admin.v1.MsgAddAccount": {
                    aminoType: string;
                    toAmino: (message: _1.MsgAddAccount) => _1.MsgAddAccountAmino;
                    fromAmino: (object: _1.MsgAddAccountAmino) => _1.MsgAddAccount;
                };
                "/sifnode.admin.v1.MsgRemoveAccount": {
                    aminoType: string;
                    toAmino: (message: _1.MsgRemoveAccount) => _1.MsgRemoveAccountAmino;
                    fromAmino: (object: _1.MsgRemoveAccountAmino) => _1.MsgRemoveAccount;
                };
                "/sifnode.admin.v1.MsgSetParams": {
                    aminoType: string;
                    toAmino: (message: _1.MsgSetParams) => _1.MsgSetParamsAmino;
                    fromAmino: (object: _1.MsgSetParamsAmino) => _1.MsgSetParams;
                };
            };
            adminTypeFromJSON(object: any): _2.AdminType;
            adminTypeToJSON(object: _2.AdminType): string;
            AdminType: typeof _2.AdminType;
            AdminTypeSDKType: typeof _2.AdminType;
            AdminTypeAmino: typeof _2.AdminType;
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
            AdminAccount: {
                typeUrl: string;
                encode(message: _2.AdminAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.AdminAccount;
                fromPartial(object: Partial<_2.AdminAccount>): _2.AdminAccount;
                fromAmino(object: _2.AdminAccountAmino): _2.AdminAccount;
                toAmino(message: _2.AdminAccount): _2.AdminAccountAmino;
                fromAminoMsg(object: _2.AdminAccountAminoMsg): _2.AdminAccount;
                fromProtoMsg(message: _2.AdminAccountProtoMsg): _2.AdminAccount;
                toProto(message: _2.AdminAccount): Uint8Array;
                toProtoMsg(message: _2.AdminAccount): _2.AdminAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
                fromAmino(object: _2.ParamsAmino): _2.Params;
                toAmino(message: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
            MsgAddAccount: {
                typeUrl: string;
                encode(message: _1.MsgAddAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgAddAccount;
                fromPartial(object: Partial<_1.MsgAddAccount>): _1.MsgAddAccount;
                fromAmino(object: _1.MsgAddAccountAmino): _1.MsgAddAccount;
                toAmino(message: _1.MsgAddAccount): _1.MsgAddAccountAmino;
                fromAminoMsg(object: _1.MsgAddAccountAminoMsg): _1.MsgAddAccount;
                fromProtoMsg(message: _1.MsgAddAccountProtoMsg): _1.MsgAddAccount;
                toProto(message: _1.MsgAddAccount): Uint8Array;
                toProtoMsg(message: _1.MsgAddAccount): _1.MsgAddAccountProtoMsg;
            };
            MsgAddAccountResponse: {
                typeUrl: string;
                encode(_: _1.MsgAddAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.MsgAddAccountResponse;
                fromPartial(_: Partial<_1.MsgAddAccountResponse>): _1.MsgAddAccountResponse;
                fromAmino(_: _1.MsgAddAccountResponseAmino): _1.MsgAddAccountResponse;
                toAmino(_: _1.MsgAddAccountResponse): _1.MsgAddAccountResponseAmino;
                fromAminoMsg(object: _1.MsgAddAccountResponseAminoMsg): _1.MsgAddAccountResponse;
                fromProtoMsg(message: _1.MsgAddAccountResponseProtoMsg): _1.MsgAddAccountResponse;
                toProto(message: _1.MsgAddAccountResponse): Uint8Array;
                toProtoMsg(message: _1.MsgAddAccountResponse): _1.MsgAddAccountResponseProtoMsg;
            };
            MsgRemoveAccount: {
                typeUrl: string;
                encode(message: _1.MsgRemoveAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgRemoveAccount;
                fromPartial(object: Partial<_1.MsgRemoveAccount>): _1.MsgRemoveAccount;
                fromAmino(object: _1.MsgRemoveAccountAmino): _1.MsgRemoveAccount;
                toAmino(message: _1.MsgRemoveAccount): _1.MsgRemoveAccountAmino;
                fromAminoMsg(object: _1.MsgRemoveAccountAminoMsg): _1.MsgRemoveAccount;
                fromProtoMsg(message: _1.MsgRemoveAccountProtoMsg): _1.MsgRemoveAccount;
                toProto(message: _1.MsgRemoveAccount): Uint8Array;
                toProtoMsg(message: _1.MsgRemoveAccount): _1.MsgRemoveAccountProtoMsg;
            };
            MsgRemoveAccountResponse: {
                typeUrl: string;
                encode(_: _1.MsgRemoveAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.MsgRemoveAccountResponse;
                fromPartial(_: Partial<_1.MsgRemoveAccountResponse>): _1.MsgRemoveAccountResponse;
                fromAmino(_: _1.MsgRemoveAccountResponseAmino): _1.MsgRemoveAccountResponse;
                toAmino(_: _1.MsgRemoveAccountResponse): _1.MsgRemoveAccountResponseAmino;
                fromAminoMsg(object: _1.MsgRemoveAccountResponseAminoMsg): _1.MsgRemoveAccountResponse;
                fromProtoMsg(message: _1.MsgRemoveAccountResponseProtoMsg): _1.MsgRemoveAccountResponse;
                toProto(message: _1.MsgRemoveAccountResponse): Uint8Array;
                toProtoMsg(message: _1.MsgRemoveAccountResponse): _1.MsgRemoveAccountResponseProtoMsg;
            };
            MsgSetParams: {
                typeUrl: string;
                encode(message: _1.MsgSetParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgSetParams;
                fromPartial(object: Partial<_1.MsgSetParams>): _1.MsgSetParams;
                fromAmino(object: _1.MsgSetParamsAmino): _1.MsgSetParams;
                toAmino(message: _1.MsgSetParams): _1.MsgSetParamsAmino;
                fromAminoMsg(object: _1.MsgSetParamsAminoMsg): _1.MsgSetParams;
                fromProtoMsg(message: _1.MsgSetParamsProtoMsg): _1.MsgSetParams;
                toProto(message: _1.MsgSetParams): Uint8Array;
                toProtoMsg(message: _1.MsgSetParams): _1.MsgSetParamsProtoMsg;
            };
            MsgSetParamsResponse: {
                typeUrl: string;
                encode(_: _1.MsgSetParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.MsgSetParamsResponse;
                fromPartial(_: Partial<_1.MsgSetParamsResponse>): _1.MsgSetParamsResponse;
                fromAmino(_: _1.MsgSetParamsResponseAmino): _1.MsgSetParamsResponse;
                toAmino(_: _1.MsgSetParamsResponse): _1.MsgSetParamsResponseAmino;
                fromAminoMsg(object: _1.MsgSetParamsResponseAminoMsg): _1.MsgSetParamsResponse;
                fromProtoMsg(message: _1.MsgSetParamsResponseProtoMsg): _1.MsgSetParamsResponse;
                toProto(message: _1.MsgSetParamsResponse): Uint8Array;
                toProtoMsg(message: _1.MsgSetParamsResponse): _1.MsgSetParamsResponseProtoMsg;
            };
            ListAccountsRequest: {
                typeUrl: string;
                encode(_: _0.ListAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _0.ListAccountsRequest;
                fromPartial(_: Partial<_0.ListAccountsRequest>): _0.ListAccountsRequest;
                fromAmino(_: _0.ListAccountsRequestAmino): _0.ListAccountsRequest;
                toAmino(_: _0.ListAccountsRequest): _0.ListAccountsRequestAmino;
                fromAminoMsg(object: _0.ListAccountsRequestAminoMsg): _0.ListAccountsRequest;
                fromProtoMsg(message: _0.ListAccountsRequestProtoMsg): _0.ListAccountsRequest;
                toProto(message: _0.ListAccountsRequest): Uint8Array;
                toProtoMsg(message: _0.ListAccountsRequest): _0.ListAccountsRequestProtoMsg;
            };
            ListAccountsResponse: {
                typeUrl: string;
                encode(message: _0.ListAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.ListAccountsResponse;
                fromPartial(object: Partial<_0.ListAccountsResponse>): _0.ListAccountsResponse;
                fromAmino(object: _0.ListAccountsResponseAmino): _0.ListAccountsResponse;
                toAmino(message: _0.ListAccountsResponse): _0.ListAccountsResponseAmino;
                fromAminoMsg(object: _0.ListAccountsResponseAminoMsg): _0.ListAccountsResponse;
                fromProtoMsg(message: _0.ListAccountsResponseProtoMsg): _0.ListAccountsResponse;
                toProto(message: _0.ListAccountsResponse): Uint8Array;
                toProtoMsg(message: _0.ListAccountsResponse): _0.ListAccountsResponseProtoMsg;
            };
            GetParamsRequest: {
                typeUrl: string;
                encode(_: _0.GetParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _0.GetParamsRequest;
                fromPartial(_: Partial<_0.GetParamsRequest>): _0.GetParamsRequest;
                fromAmino(_: _0.GetParamsRequestAmino): _0.GetParamsRequest;
                toAmino(_: _0.GetParamsRequest): _0.GetParamsRequestAmino;
                fromAminoMsg(object: _0.GetParamsRequestAminoMsg): _0.GetParamsRequest;
                fromProtoMsg(message: _0.GetParamsRequestProtoMsg): _0.GetParamsRequest;
                toProto(message: _0.GetParamsRequest): Uint8Array;
                toProtoMsg(message: _0.GetParamsRequest): _0.GetParamsRequestProtoMsg;
            };
            GetParamsResponse: {
                typeUrl: string;
                encode(message: _0.GetParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.GetParamsResponse;
                fromPartial(object: Partial<_0.GetParamsResponse>): _0.GetParamsResponse;
                fromAmino(object: _0.GetParamsResponseAmino): _0.GetParamsResponse;
                toAmino(message: _0.GetParamsResponse): _0.GetParamsResponseAmino;
                fromAminoMsg(object: _0.GetParamsResponseAminoMsg): _0.GetParamsResponse;
                fromProtoMsg(message: _0.GetParamsResponseProtoMsg): _0.GetParamsResponse;
                toProto(message: _0.GetParamsResponse): Uint8Array;
                toProtoMsg(message: _0.GetParamsResponse): _0.GetParamsResponseProtoMsg;
            };
        };
    }
    namespace clp {
        const v1: {
            MsgClientImpl: typeof _144.MsgClientImpl;
            QueryClientImpl: typeof _137.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                getPool(request: _5.PoolReq): Promise<_5.PoolRes>;
                getPools(request?: _5.PoolsReq): Promise<_5.PoolsRes>;
                getLiquidityProvider(request: _5.LiquidityProviderReq): Promise<_5.LiquidityProviderRes>;
                getLiquidityProviderData(request: _5.LiquidityProviderDataReq): Promise<_5.LiquidityProviderDataRes>;
                getAssetList(request: _5.AssetListReq): Promise<_5.AssetListRes>;
                getLiquidityProviders(request?: _5.LiquidityProvidersReq): Promise<_5.LiquidityProvidersRes>;
                getLiquidityProviderList(request: _5.LiquidityProviderListReq): Promise<_5.LiquidityProviderListRes>;
                getParams(request?: _5.ParamsReq): Promise<_5.ParamsRes>;
                getRewardParams(request?: _5.RewardParamsReq): Promise<_5.RewardParamsRes>;
                getPmtpParams(request?: _5.PmtpParamsReq): Promise<_5.PmtpParamsRes>;
                getLiquidityProtectionParams(request?: _5.LiquidityProtectionParamsReq): Promise<_5.LiquidityProtectionParamsRes>;
                getProviderDistributionParams(request?: _5.ProviderDistributionParamsReq): Promise<_5.ProviderDistributionParamsRes>;
                getSwapFeeParams(request?: _5.SwapFeeParamsReq): Promise<_5.SwapFeeParamsRes>;
                getPoolShareEstimate(request: _5.PoolShareEstimateReq): Promise<_5.PoolShareEstimateRes>;
                getRewardsBucket(request: _5.RewardsBucketReq): Promise<_5.RewardsBucketRes>;
                getRewardsBucketAll(request?: _5.AllRewardsBucketReq): Promise<_5.AllRewardsBucketRes>;
            };
            LCDQueryClient: typeof _132.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    removeLiquidity(value: _7.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeLiquidityUnits(value: _7.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPool(value: _7.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addLiquidity(value: _7.MsgAddLiquidity): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swap(value: _7.MsgSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    decommissionPool(value: _7.MsgDecommissionPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unlockLiquidity(value: _7.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRewardsParams(value: _7.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addRewardPeriod(value: _7.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyPmtpRates(value: _7.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePmtpParams(value: _7.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateStakingRewardParams(value: _7.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSymmetryThreshold(value: _7.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnlockLiquidity(value: _7.MsgCancelUnlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateLiquidityProtectionParams(value: _7.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyLiquidityProtectionRates(value: _7.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addProviderDistributionPeriod(value: _7.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateSwapFeeParams(value: _7.MsgUpdateSwapFeeParamsRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addLiquidityToRewardsBucket(value: _7.MsgAddLiquidityToRewardsBucketRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    removeLiquidity(value: _7.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: _7.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: _7.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: _7.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: _7.MsgCreatePool): {
                        typeUrl: string;
                        value: _7.MsgCreatePool;
                    };
                    addLiquidity(value: _7.MsgAddLiquidity): {
                        typeUrl: string;
                        value: _7.MsgAddLiquidity;
                    };
                    swap(value: _7.MsgSwap): {
                        typeUrl: string;
                        value: _7.MsgSwap;
                    };
                    decommissionPool(value: _7.MsgDecommissionPool): {
                        typeUrl: string;
                        value: _7.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: _7.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: _7.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: _7.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: _7.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: _7.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: _7.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: _7.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: _7.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: _7.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: _7.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: _7.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: _7.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: _7.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: _7.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: _7.MsgCancelUnlock): {
                        typeUrl: string;
                        value: _7.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: _7.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: _7.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: _7.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: _7.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: _7.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: _7.MsgAddProviderDistributionPeriodRequest;
                    };
                    updateSwapFeeParams(value: _7.MsgUpdateSwapFeeParamsRequest): {
                        typeUrl: string;
                        value: _7.MsgUpdateSwapFeeParamsRequest;
                    };
                    addLiquidityToRewardsBucket(value: _7.MsgAddLiquidityToRewardsBucketRequest): {
                        typeUrl: string;
                        value: _7.MsgAddLiquidityToRewardsBucketRequest;
                    };
                };
                fromJSON: {
                    removeLiquidity(value: any): {
                        typeUrl: string;
                        value: _7.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: any): {
                        typeUrl: string;
                        value: _7.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: any): {
                        typeUrl: string;
                        value: _7.MsgCreatePool;
                    };
                    addLiquidity(value: any): {
                        typeUrl: string;
                        value: _7.MsgAddLiquidity;
                    };
                    swap(value: any): {
                        typeUrl: string;
                        value: _7.MsgSwap;
                    };
                    decommissionPool(value: any): {
                        typeUrl: string;
                        value: _7.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: any): {
                        typeUrl: string;
                        value: _7.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: any): {
                        typeUrl: string;
                        value: _7.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: any): {
                        typeUrl: string;
                        value: _7.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: any): {
                        typeUrl: string;
                        value: _7.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: any): {
                        typeUrl: string;
                        value: _7.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: any): {
                        typeUrl: string;
                        value: _7.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: any): {
                        typeUrl: string;
                        value: _7.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: any): {
                        typeUrl: string;
                        value: _7.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: any): {
                        typeUrl: string;
                        value: _7.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: any): {
                        typeUrl: string;
                        value: _7.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: any): {
                        typeUrl: string;
                        value: _7.MsgAddProviderDistributionPeriodRequest;
                    };
                    updateSwapFeeParams(value: any): {
                        typeUrl: string;
                        value: _7.MsgUpdateSwapFeeParamsRequest;
                    };
                    addLiquidityToRewardsBucket(value: any): {
                        typeUrl: string;
                        value: _7.MsgAddLiquidityToRewardsBucketRequest;
                    };
                };
                fromPartial: {
                    removeLiquidity(value: _7.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: _7.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: _7.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: _7.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: _7.MsgCreatePool): {
                        typeUrl: string;
                        value: _7.MsgCreatePool;
                    };
                    addLiquidity(value: _7.MsgAddLiquidity): {
                        typeUrl: string;
                        value: _7.MsgAddLiquidity;
                    };
                    swap(value: _7.MsgSwap): {
                        typeUrl: string;
                        value: _7.MsgSwap;
                    };
                    decommissionPool(value: _7.MsgDecommissionPool): {
                        typeUrl: string;
                        value: _7.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: _7.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: _7.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: _7.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: _7.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: _7.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: _7.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: _7.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: _7.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: _7.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: _7.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: _7.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: _7.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: _7.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: _7.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: _7.MsgCancelUnlock): {
                        typeUrl: string;
                        value: _7.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: _7.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: _7.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: _7.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: _7.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: _7.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: _7.MsgAddProviderDistributionPeriodRequest;
                    };
                    updateSwapFeeParams(value: _7.MsgUpdateSwapFeeParamsRequest): {
                        typeUrl: string;
                        value: _7.MsgUpdateSwapFeeParamsRequest;
                    };
                    addLiquidityToRewardsBucket(value: _7.MsgAddLiquidityToRewardsBucketRequest): {
                        typeUrl: string;
                        value: _7.MsgAddLiquidityToRewardsBucketRequest;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.clp.v1.MsgRemoveLiquidity": {
                    aminoType: string;
                    toAmino: (message: _7.MsgRemoveLiquidity) => _7.MsgRemoveLiquidityAmino;
                    fromAmino: (object: _7.MsgRemoveLiquidityAmino) => _7.MsgRemoveLiquidity;
                };
                "/sifnode.clp.v1.MsgRemoveLiquidityUnits": {
                    aminoType: string;
                    toAmino: (message: _7.MsgRemoveLiquidityUnits) => _7.MsgRemoveLiquidityUnitsAmino;
                    fromAmino: (object: _7.MsgRemoveLiquidityUnitsAmino) => _7.MsgRemoveLiquidityUnits;
                };
                "/sifnode.clp.v1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: (message: _7.MsgCreatePool) => _7.MsgCreatePoolAmino;
                    fromAmino: (object: _7.MsgCreatePoolAmino) => _7.MsgCreatePool;
                };
                "/sifnode.clp.v1.MsgAddLiquidity": {
                    aminoType: string;
                    toAmino: (message: _7.MsgAddLiquidity) => _7.MsgAddLiquidityAmino;
                    fromAmino: (object: _7.MsgAddLiquidityAmino) => _7.MsgAddLiquidity;
                };
                "/sifnode.clp.v1.MsgSwap": {
                    aminoType: string;
                    toAmino: (message: _7.MsgSwap) => _7.MsgSwapAmino;
                    fromAmino: (object: _7.MsgSwapAmino) => _7.MsgSwap;
                };
                "/sifnode.clp.v1.MsgDecommissionPool": {
                    aminoType: string;
                    toAmino: (message: _7.MsgDecommissionPool) => _7.MsgDecommissionPoolAmino;
                    fromAmino: (object: _7.MsgDecommissionPoolAmino) => _7.MsgDecommissionPool;
                };
                "/sifnode.clp.v1.MsgUnlockLiquidityRequest": {
                    aminoType: string;
                    toAmino: (message: _7.MsgUnlockLiquidityRequest) => _7.MsgUnlockLiquidityRequestAmino;
                    fromAmino: (object: _7.MsgUnlockLiquidityRequestAmino) => _7.MsgUnlockLiquidityRequest;
                };
                "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest": {
                    aminoType: string;
                    toAmino: (message: _7.MsgUpdateRewardsParamsRequest) => _7.MsgUpdateRewardsParamsRequestAmino;
                    fromAmino: (object: _7.MsgUpdateRewardsParamsRequestAmino) => _7.MsgUpdateRewardsParamsRequest;
                };
                "/sifnode.clp.v1.MsgAddRewardPeriodRequest": {
                    aminoType: string;
                    toAmino: (message: _7.MsgAddRewardPeriodRequest) => _7.MsgAddRewardPeriodRequestAmino;
                    fromAmino: (object: _7.MsgAddRewardPeriodRequestAmino) => _7.MsgAddRewardPeriodRequest;
                };
                "/sifnode.clp.v1.MsgModifyPmtpRates": {
                    aminoType: string;
                    toAmino: (message: _7.MsgModifyPmtpRates) => _7.MsgModifyPmtpRatesAmino;
                    fromAmino: (object: _7.MsgModifyPmtpRatesAmino) => _7.MsgModifyPmtpRates;
                };
                "/sifnode.clp.v1.MsgUpdatePmtpParams": {
                    aminoType: string;
                    toAmino: (message: _7.MsgUpdatePmtpParams) => _7.MsgUpdatePmtpParamsAmino;
                    fromAmino: (object: _7.MsgUpdatePmtpParamsAmino) => _7.MsgUpdatePmtpParams;
                };
                "/sifnode.clp.v1.MsgUpdateStakingRewardParams": {
                    aminoType: string;
                    toAmino: (message: _7.MsgUpdateStakingRewardParams) => _7.MsgUpdateStakingRewardParamsAmino;
                    fromAmino: (object: _7.MsgUpdateStakingRewardParamsAmino) => _7.MsgUpdateStakingRewardParams;
                };
                "/sifnode.clp.v1.MsgSetSymmetryThreshold": {
                    aminoType: string;
                    toAmino: (message: _7.MsgSetSymmetryThreshold) => _7.MsgSetSymmetryThresholdAmino;
                    fromAmino: (object: _7.MsgSetSymmetryThresholdAmino) => _7.MsgSetSymmetryThreshold;
                };
                "/sifnode.clp.v1.MsgCancelUnlock": {
                    aminoType: string;
                    toAmino: (message: _7.MsgCancelUnlock) => _7.MsgCancelUnlockAmino;
                    fromAmino: (object: _7.MsgCancelUnlockAmino) => _7.MsgCancelUnlock;
                };
                "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams": {
                    aminoType: string;
                    toAmino: (message: _7.MsgUpdateLiquidityProtectionParams) => _7.MsgUpdateLiquidityProtectionParamsAmino;
                    fromAmino: (object: _7.MsgUpdateLiquidityProtectionParamsAmino) => _7.MsgUpdateLiquidityProtectionParams;
                };
                "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates": {
                    aminoType: string;
                    toAmino: (message: _7.MsgModifyLiquidityProtectionRates) => _7.MsgModifyLiquidityProtectionRatesAmino;
                    fromAmino: (object: _7.MsgModifyLiquidityProtectionRatesAmino) => _7.MsgModifyLiquidityProtectionRates;
                };
                "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest": {
                    aminoType: string;
                    toAmino: (message: _7.MsgAddProviderDistributionPeriodRequest) => _7.MsgAddProviderDistributionPeriodRequestAmino;
                    fromAmino: (object: _7.MsgAddProviderDistributionPeriodRequestAmino) => _7.MsgAddProviderDistributionPeriodRequest;
                };
                "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest": {
                    aminoType: string;
                    toAmino: (message: _7.MsgUpdateSwapFeeParamsRequest) => _7.MsgUpdateSwapFeeParamsRequestAmino;
                    fromAmino: (object: _7.MsgUpdateSwapFeeParamsRequestAmino) => _7.MsgUpdateSwapFeeParamsRequest;
                };
                "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest": {
                    aminoType: string;
                    toAmino: (message: _7.MsgAddLiquidityToRewardsBucketRequest) => _7.MsgAddLiquidityToRewardsBucketRequestAmino;
                    fromAmino: (object: _7.MsgAddLiquidityToRewardsBucketRequestAmino) => _7.MsgAddLiquidityToRewardsBucketRequest;
                };
            };
            Asset: {
                typeUrl: string;
                encode(message: _8.Asset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Asset;
                fromPartial(object: Partial<_8.Asset>): _8.Asset;
                fromAmino(object: _8.AssetAmino): _8.Asset;
                toAmino(message: _8.Asset): _8.AssetAmino;
                fromAminoMsg(object: _8.AssetAminoMsg): _8.Asset;
                fromProtoMsg(message: _8.AssetProtoMsg): _8.Asset;
                toProto(message: _8.Asset): Uint8Array;
                toProtoMsg(message: _8.Asset): _8.AssetProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _8.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Pool;
                fromPartial(object: Partial<_8.Pool>): _8.Pool;
                fromAmino(object: _8.PoolAmino): _8.Pool;
                toAmino(message: _8.Pool): _8.PoolAmino;
                fromAminoMsg(object: _8.PoolAminoMsg): _8.Pool;
                fromProtoMsg(message: _8.PoolProtoMsg): _8.Pool;
                toProto(message: _8.Pool): Uint8Array;
                toProtoMsg(message: _8.Pool): _8.PoolProtoMsg;
            };
            LiquidityProvider: {
                typeUrl: string;
                encode(message: _8.LiquidityProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.LiquidityProvider;
                fromPartial(object: Partial<_8.LiquidityProvider>): _8.LiquidityProvider;
                fromAmino(object: _8.LiquidityProviderAmino): _8.LiquidityProvider;
                toAmino(message: _8.LiquidityProvider): _8.LiquidityProviderAmino;
                fromAminoMsg(object: _8.LiquidityProviderAminoMsg): _8.LiquidityProvider;
                fromProtoMsg(message: _8.LiquidityProviderProtoMsg): _8.LiquidityProvider;
                toProto(message: _8.LiquidityProvider): Uint8Array;
                toProtoMsg(message: _8.LiquidityProvider): _8.LiquidityProviderProtoMsg;
            };
            LiquidityUnlock: {
                typeUrl: string;
                encode(message: _8.LiquidityUnlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.LiquidityUnlock;
                fromPartial(object: Partial<_8.LiquidityUnlock>): _8.LiquidityUnlock;
                fromAmino(object: _8.LiquidityUnlockAmino): _8.LiquidityUnlock;
                toAmino(message: _8.LiquidityUnlock): _8.LiquidityUnlockAmino;
                fromAminoMsg(object: _8.LiquidityUnlockAminoMsg): _8.LiquidityUnlock;
                fromProtoMsg(message: _8.LiquidityUnlockProtoMsg): _8.LiquidityUnlock;
                toProto(message: _8.LiquidityUnlock): Uint8Array;
                toProtoMsg(message: _8.LiquidityUnlock): _8.LiquidityUnlockProtoMsg;
            };
            PmtpEpoch: {
                typeUrl: string;
                encode(message: _8.PmtpEpoch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.PmtpEpoch;
                fromPartial(object: Partial<_8.PmtpEpoch>): _8.PmtpEpoch;
                fromAmino(object: _8.PmtpEpochAmino): _8.PmtpEpoch;
                toAmino(message: _8.PmtpEpoch): _8.PmtpEpochAmino;
                fromAminoMsg(object: _8.PmtpEpochAminoMsg): _8.PmtpEpoch;
                fromProtoMsg(message: _8.PmtpEpochProtoMsg): _8.PmtpEpoch;
                toProto(message: _8.PmtpEpoch): Uint8Array;
                toProtoMsg(message: _8.PmtpEpoch): _8.PmtpEpochProtoMsg;
            };
            WhiteList: {
                typeUrl: string;
                encode(message: _8.WhiteList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.WhiteList;
                fromPartial(object: Partial<_8.WhiteList>): _8.WhiteList;
                fromAmino(object: _8.WhiteListAmino): _8.WhiteList;
                toAmino(message: _8.WhiteList): _8.WhiteListAmino;
                fromAminoMsg(object: _8.WhiteListAminoMsg): _8.WhiteList;
                fromProtoMsg(message: _8.WhiteListProtoMsg): _8.WhiteList;
                toProto(message: _8.WhiteList): Uint8Array;
                toProtoMsg(message: _8.WhiteList): _8.WhiteListProtoMsg;
            };
            LiquidityProviderData: {
                typeUrl: string;
                encode(message: _8.LiquidityProviderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.LiquidityProviderData;
                fromPartial(object: Partial<_8.LiquidityProviderData>): _8.LiquidityProviderData;
                fromAmino(object: _8.LiquidityProviderDataAmino): _8.LiquidityProviderData;
                toAmino(message: _8.LiquidityProviderData): _8.LiquidityProviderDataAmino;
                fromAminoMsg(object: _8.LiquidityProviderDataAminoMsg): _8.LiquidityProviderData;
                fromProtoMsg(message: _8.LiquidityProviderDataProtoMsg): _8.LiquidityProviderData;
                toProto(message: _8.LiquidityProviderData): Uint8Array;
                toProtoMsg(message: _8.LiquidityProviderData): _8.LiquidityProviderDataProtoMsg;
            };
            EventPolicy: {
                typeUrl: string;
                encode(message: _8.EventPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.EventPolicy;
                fromPartial(object: Partial<_8.EventPolicy>): _8.EventPolicy;
                fromAmino(object: _8.EventPolicyAmino): _8.EventPolicy;
                toAmino(message: _8.EventPolicy): _8.EventPolicyAmino;
                fromAminoMsg(object: _8.EventPolicyAminoMsg): _8.EventPolicy;
                fromProtoMsg(message: _8.EventPolicyProtoMsg): _8.EventPolicy;
                toProto(message: _8.EventPolicy): Uint8Array;
                toProtoMsg(message: _8.EventPolicy): _8.EventPolicyProtoMsg;
            };
            RemovalQueue: {
                typeUrl: string;
                encode(message: _8.RemovalQueue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.RemovalQueue;
                fromPartial(object: Partial<_8.RemovalQueue>): _8.RemovalQueue;
                fromAmino(object: _8.RemovalQueueAmino): _8.RemovalQueue;
                toAmino(message: _8.RemovalQueue): _8.RemovalQueueAmino;
                fromAminoMsg(object: _8.RemovalQueueAminoMsg): _8.RemovalQueue;
                fromProtoMsg(message: _8.RemovalQueueProtoMsg): _8.RemovalQueue;
                toProto(message: _8.RemovalQueue): Uint8Array;
                toProtoMsg(message: _8.RemovalQueue): _8.RemovalQueueProtoMsg;
            };
            MsgUpdateStakingRewardParams: {
                typeUrl: string;
                encode(message: _7.MsgUpdateStakingRewardParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgUpdateStakingRewardParams;
                fromPartial(object: Partial<_7.MsgUpdateStakingRewardParams>): _7.MsgUpdateStakingRewardParams;
                fromAmino(object: _7.MsgUpdateStakingRewardParamsAmino): _7.MsgUpdateStakingRewardParams;
                toAmino(message: _7.MsgUpdateStakingRewardParams): _7.MsgUpdateStakingRewardParamsAmino;
                fromAminoMsg(object: _7.MsgUpdateStakingRewardParamsAminoMsg): _7.MsgUpdateStakingRewardParams;
                fromProtoMsg(message: _7.MsgUpdateStakingRewardParamsProtoMsg): _7.MsgUpdateStakingRewardParams;
                toProto(message: _7.MsgUpdateStakingRewardParams): Uint8Array;
                toProtoMsg(message: _7.MsgUpdateStakingRewardParams): _7.MsgUpdateStakingRewardParamsProtoMsg;
            };
            MsgUpdateStakingRewardParamsResponse: {
                typeUrl: string;
                encode(_: _7.MsgUpdateStakingRewardParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgUpdateStakingRewardParamsResponse;
                fromPartial(_: Partial<_7.MsgUpdateStakingRewardParamsResponse>): _7.MsgUpdateStakingRewardParamsResponse;
                fromAmino(_: _7.MsgUpdateStakingRewardParamsResponseAmino): _7.MsgUpdateStakingRewardParamsResponse;
                toAmino(_: _7.MsgUpdateStakingRewardParamsResponse): _7.MsgUpdateStakingRewardParamsResponseAmino;
                fromAminoMsg(object: _7.MsgUpdateStakingRewardParamsResponseAminoMsg): _7.MsgUpdateStakingRewardParamsResponse;
                fromProtoMsg(message: _7.MsgUpdateStakingRewardParamsResponseProtoMsg): _7.MsgUpdateStakingRewardParamsResponse;
                toProto(message: _7.MsgUpdateStakingRewardParamsResponse): Uint8Array;
                toProtoMsg(message: _7.MsgUpdateStakingRewardParamsResponse): _7.MsgUpdateStakingRewardParamsResponseProtoMsg;
            };
            MsgRemoveLiquidity: {
                typeUrl: string;
                encode(message: _7.MsgRemoveLiquidity, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgRemoveLiquidity;
                fromPartial(object: Partial<_7.MsgRemoveLiquidity>): _7.MsgRemoveLiquidity;
                fromAmino(object: _7.MsgRemoveLiquidityAmino): _7.MsgRemoveLiquidity;
                toAmino(message: _7.MsgRemoveLiquidity): _7.MsgRemoveLiquidityAmino;
                fromAminoMsg(object: _7.MsgRemoveLiquidityAminoMsg): _7.MsgRemoveLiquidity;
                fromProtoMsg(message: _7.MsgRemoveLiquidityProtoMsg): _7.MsgRemoveLiquidity;
                toProto(message: _7.MsgRemoveLiquidity): Uint8Array;
                toProtoMsg(message: _7.MsgRemoveLiquidity): _7.MsgRemoveLiquidityProtoMsg;
            };
            MsgRemoveLiquidityResponse: {
                typeUrl: string;
                encode(_: _7.MsgRemoveLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgRemoveLiquidityResponse;
                fromPartial(_: Partial<_7.MsgRemoveLiquidityResponse>): _7.MsgRemoveLiquidityResponse;
                fromAmino(_: _7.MsgRemoveLiquidityResponseAmino): _7.MsgRemoveLiquidityResponse;
                toAmino(_: _7.MsgRemoveLiquidityResponse): _7.MsgRemoveLiquidityResponseAmino;
                fromAminoMsg(object: _7.MsgRemoveLiquidityResponseAminoMsg): _7.MsgRemoveLiquidityResponse;
                fromProtoMsg(message: _7.MsgRemoveLiquidityResponseProtoMsg): _7.MsgRemoveLiquidityResponse;
                toProto(message: _7.MsgRemoveLiquidityResponse): Uint8Array;
                toProtoMsg(message: _7.MsgRemoveLiquidityResponse): _7.MsgRemoveLiquidityResponseProtoMsg;
            };
            MsgRemoveLiquidityUnits: {
                typeUrl: string;
                encode(message: _7.MsgRemoveLiquidityUnits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgRemoveLiquidityUnits;
                fromPartial(object: Partial<_7.MsgRemoveLiquidityUnits>): _7.MsgRemoveLiquidityUnits;
                fromAmino(object: _7.MsgRemoveLiquidityUnitsAmino): _7.MsgRemoveLiquidityUnits;
                toAmino(message: _7.MsgRemoveLiquidityUnits): _7.MsgRemoveLiquidityUnitsAmino;
                fromAminoMsg(object: _7.MsgRemoveLiquidityUnitsAminoMsg): _7.MsgRemoveLiquidityUnits;
                fromProtoMsg(message: _7.MsgRemoveLiquidityUnitsProtoMsg): _7.MsgRemoveLiquidityUnits;
                toProto(message: _7.MsgRemoveLiquidityUnits): Uint8Array;
                toProtoMsg(message: _7.MsgRemoveLiquidityUnits): _7.MsgRemoveLiquidityUnitsProtoMsg;
            };
            MsgRemoveLiquidityUnitsResponse: {
                typeUrl: string;
                encode(_: _7.MsgRemoveLiquidityUnitsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgRemoveLiquidityUnitsResponse;
                fromPartial(_: Partial<_7.MsgRemoveLiquidityUnitsResponse>): _7.MsgRemoveLiquidityUnitsResponse;
                fromAmino(_: _7.MsgRemoveLiquidityUnitsResponseAmino): _7.MsgRemoveLiquidityUnitsResponse;
                toAmino(_: _7.MsgRemoveLiquidityUnitsResponse): _7.MsgRemoveLiquidityUnitsResponseAmino;
                fromAminoMsg(object: _7.MsgRemoveLiquidityUnitsResponseAminoMsg): _7.MsgRemoveLiquidityUnitsResponse;
                fromProtoMsg(message: _7.MsgRemoveLiquidityUnitsResponseProtoMsg): _7.MsgRemoveLiquidityUnitsResponse;
                toProto(message: _7.MsgRemoveLiquidityUnitsResponse): Uint8Array;
                toProtoMsg(message: _7.MsgRemoveLiquidityUnitsResponse): _7.MsgRemoveLiquidityUnitsResponseProtoMsg;
            };
            MsgCreatePool: {
                typeUrl: string;
                encode(message: _7.MsgCreatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgCreatePool;
                fromPartial(object: Partial<_7.MsgCreatePool>): _7.MsgCreatePool;
                fromAmino(object: _7.MsgCreatePoolAmino): _7.MsgCreatePool;
                toAmino(message: _7.MsgCreatePool): _7.MsgCreatePoolAmino;
                fromAminoMsg(object: _7.MsgCreatePoolAminoMsg): _7.MsgCreatePool;
                fromProtoMsg(message: _7.MsgCreatePoolProtoMsg): _7.MsgCreatePool;
                toProto(message: _7.MsgCreatePool): Uint8Array;
                toProtoMsg(message: _7.MsgCreatePool): _7.MsgCreatePoolProtoMsg;
            };
            MsgCreatePoolResponse: {
                typeUrl: string;
                encode(_: _7.MsgCreatePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgCreatePoolResponse;
                fromPartial(_: Partial<_7.MsgCreatePoolResponse>): _7.MsgCreatePoolResponse;
                fromAmino(_: _7.MsgCreatePoolResponseAmino): _7.MsgCreatePoolResponse;
                toAmino(_: _7.MsgCreatePoolResponse): _7.MsgCreatePoolResponseAmino;
                fromAminoMsg(object: _7.MsgCreatePoolResponseAminoMsg): _7.MsgCreatePoolResponse;
                fromProtoMsg(message: _7.MsgCreatePoolResponseProtoMsg): _7.MsgCreatePoolResponse;
                toProto(message: _7.MsgCreatePoolResponse): Uint8Array;
                toProtoMsg(message: _7.MsgCreatePoolResponse): _7.MsgCreatePoolResponseProtoMsg;
            };
            MsgAddLiquidity: {
                typeUrl: string;
                encode(message: _7.MsgAddLiquidity, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgAddLiquidity;
                fromPartial(object: Partial<_7.MsgAddLiquidity>): _7.MsgAddLiquidity;
                fromAmino(object: _7.MsgAddLiquidityAmino): _7.MsgAddLiquidity;
                toAmino(message: _7.MsgAddLiquidity): _7.MsgAddLiquidityAmino;
                fromAminoMsg(object: _7.MsgAddLiquidityAminoMsg): _7.MsgAddLiquidity;
                fromProtoMsg(message: _7.MsgAddLiquidityProtoMsg): _7.MsgAddLiquidity;
                toProto(message: _7.MsgAddLiquidity): Uint8Array;
                toProtoMsg(message: _7.MsgAddLiquidity): _7.MsgAddLiquidityProtoMsg;
            };
            MsgAddLiquidityResponse: {
                typeUrl: string;
                encode(_: _7.MsgAddLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgAddLiquidityResponse;
                fromPartial(_: Partial<_7.MsgAddLiquidityResponse>): _7.MsgAddLiquidityResponse;
                fromAmino(_: _7.MsgAddLiquidityResponseAmino): _7.MsgAddLiquidityResponse;
                toAmino(_: _7.MsgAddLiquidityResponse): _7.MsgAddLiquidityResponseAmino;
                fromAminoMsg(object: _7.MsgAddLiquidityResponseAminoMsg): _7.MsgAddLiquidityResponse;
                fromProtoMsg(message: _7.MsgAddLiquidityResponseProtoMsg): _7.MsgAddLiquidityResponse;
                toProto(message: _7.MsgAddLiquidityResponse): Uint8Array;
                toProtoMsg(message: _7.MsgAddLiquidityResponse): _7.MsgAddLiquidityResponseProtoMsg;
            };
            MsgModifyPmtpRates: {
                typeUrl: string;
                encode(message: _7.MsgModifyPmtpRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgModifyPmtpRates;
                fromPartial(object: Partial<_7.MsgModifyPmtpRates>): _7.MsgModifyPmtpRates;
                fromAmino(object: _7.MsgModifyPmtpRatesAmino): _7.MsgModifyPmtpRates;
                toAmino(message: _7.MsgModifyPmtpRates): _7.MsgModifyPmtpRatesAmino;
                fromAminoMsg(object: _7.MsgModifyPmtpRatesAminoMsg): _7.MsgModifyPmtpRates;
                fromProtoMsg(message: _7.MsgModifyPmtpRatesProtoMsg): _7.MsgModifyPmtpRates;
                toProto(message: _7.MsgModifyPmtpRates): Uint8Array;
                toProtoMsg(message: _7.MsgModifyPmtpRates): _7.MsgModifyPmtpRatesProtoMsg;
            };
            MsgModifyPmtpRatesResponse: {
                typeUrl: string;
                encode(_: _7.MsgModifyPmtpRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgModifyPmtpRatesResponse;
                fromPartial(_: Partial<_7.MsgModifyPmtpRatesResponse>): _7.MsgModifyPmtpRatesResponse;
                fromAmino(_: _7.MsgModifyPmtpRatesResponseAmino): _7.MsgModifyPmtpRatesResponse;
                toAmino(_: _7.MsgModifyPmtpRatesResponse): _7.MsgModifyPmtpRatesResponseAmino;
                fromAminoMsg(object: _7.MsgModifyPmtpRatesResponseAminoMsg): _7.MsgModifyPmtpRatesResponse;
                fromProtoMsg(message: _7.MsgModifyPmtpRatesResponseProtoMsg): _7.MsgModifyPmtpRatesResponse;
                toProto(message: _7.MsgModifyPmtpRatesResponse): Uint8Array;
                toProtoMsg(message: _7.MsgModifyPmtpRatesResponse): _7.MsgModifyPmtpRatesResponseProtoMsg;
            };
            MsgUpdatePmtpParams: {
                typeUrl: string;
                encode(message: _7.MsgUpdatePmtpParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgUpdatePmtpParams;
                fromPartial(object: Partial<_7.MsgUpdatePmtpParams>): _7.MsgUpdatePmtpParams;
                fromAmino(object: _7.MsgUpdatePmtpParamsAmino): _7.MsgUpdatePmtpParams;
                toAmino(message: _7.MsgUpdatePmtpParams): _7.MsgUpdatePmtpParamsAmino;
                fromAminoMsg(object: _7.MsgUpdatePmtpParamsAminoMsg): _7.MsgUpdatePmtpParams;
                fromProtoMsg(message: _7.MsgUpdatePmtpParamsProtoMsg): _7.MsgUpdatePmtpParams;
                toProto(message: _7.MsgUpdatePmtpParams): Uint8Array;
                toProtoMsg(message: _7.MsgUpdatePmtpParams): _7.MsgUpdatePmtpParamsProtoMsg;
            };
            MsgUpdatePmtpParamsResponse: {
                typeUrl: string;
                encode(_: _7.MsgUpdatePmtpParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgUpdatePmtpParamsResponse;
                fromPartial(_: Partial<_7.MsgUpdatePmtpParamsResponse>): _7.MsgUpdatePmtpParamsResponse;
                fromAmino(_: _7.MsgUpdatePmtpParamsResponseAmino): _7.MsgUpdatePmtpParamsResponse;
                toAmino(_: _7.MsgUpdatePmtpParamsResponse): _7.MsgUpdatePmtpParamsResponseAmino;
                fromAminoMsg(object: _7.MsgUpdatePmtpParamsResponseAminoMsg): _7.MsgUpdatePmtpParamsResponse;
                fromProtoMsg(message: _7.MsgUpdatePmtpParamsResponseProtoMsg): _7.MsgUpdatePmtpParamsResponse;
                toProto(message: _7.MsgUpdatePmtpParamsResponse): Uint8Array;
                toProtoMsg(message: _7.MsgUpdatePmtpParamsResponse): _7.MsgUpdatePmtpParamsResponseProtoMsg;
            };
            MsgSwap: {
                typeUrl: string;
                encode(message: _7.MsgSwap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgSwap;
                fromPartial(object: Partial<_7.MsgSwap>): _7.MsgSwap;
                fromAmino(object: _7.MsgSwapAmino): _7.MsgSwap;
                toAmino(message: _7.MsgSwap): _7.MsgSwapAmino;
                fromAminoMsg(object: _7.MsgSwapAminoMsg): _7.MsgSwap;
                fromProtoMsg(message: _7.MsgSwapProtoMsg): _7.MsgSwap;
                toProto(message: _7.MsgSwap): Uint8Array;
                toProtoMsg(message: _7.MsgSwap): _7.MsgSwapProtoMsg;
            };
            MsgSwapResponse: {
                typeUrl: string;
                encode(_: _7.MsgSwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgSwapResponse;
                fromPartial(_: Partial<_7.MsgSwapResponse>): _7.MsgSwapResponse;
                fromAmino(_: _7.MsgSwapResponseAmino): _7.MsgSwapResponse;
                toAmino(_: _7.MsgSwapResponse): _7.MsgSwapResponseAmino;
                fromAminoMsg(object: _7.MsgSwapResponseAminoMsg): _7.MsgSwapResponse;
                fromProtoMsg(message: _7.MsgSwapResponseProtoMsg): _7.MsgSwapResponse;
                toProto(message: _7.MsgSwapResponse): Uint8Array;
                toProtoMsg(message: _7.MsgSwapResponse): _7.MsgSwapResponseProtoMsg;
            };
            MsgDecommissionPool: {
                typeUrl: string;
                encode(message: _7.MsgDecommissionPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgDecommissionPool;
                fromPartial(object: Partial<_7.MsgDecommissionPool>): _7.MsgDecommissionPool;
                fromAmino(object: _7.MsgDecommissionPoolAmino): _7.MsgDecommissionPool;
                toAmino(message: _7.MsgDecommissionPool): _7.MsgDecommissionPoolAmino;
                fromAminoMsg(object: _7.MsgDecommissionPoolAminoMsg): _7.MsgDecommissionPool;
                fromProtoMsg(message: _7.MsgDecommissionPoolProtoMsg): _7.MsgDecommissionPool;
                toProto(message: _7.MsgDecommissionPool): Uint8Array;
                toProtoMsg(message: _7.MsgDecommissionPool): _7.MsgDecommissionPoolProtoMsg;
            };
            MsgDecommissionPoolResponse: {
                typeUrl: string;
                encode(_: _7.MsgDecommissionPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgDecommissionPoolResponse;
                fromPartial(_: Partial<_7.MsgDecommissionPoolResponse>): _7.MsgDecommissionPoolResponse;
                fromAmino(_: _7.MsgDecommissionPoolResponseAmino): _7.MsgDecommissionPoolResponse;
                toAmino(_: _7.MsgDecommissionPoolResponse): _7.MsgDecommissionPoolResponseAmino;
                fromAminoMsg(object: _7.MsgDecommissionPoolResponseAminoMsg): _7.MsgDecommissionPoolResponse;
                fromProtoMsg(message: _7.MsgDecommissionPoolResponseProtoMsg): _7.MsgDecommissionPoolResponse;
                toProto(message: _7.MsgDecommissionPoolResponse): Uint8Array;
                toProtoMsg(message: _7.MsgDecommissionPoolResponse): _7.MsgDecommissionPoolResponseProtoMsg;
            };
            MsgUnlockLiquidityRequest: {
                typeUrl: string;
                encode(message: _7.MsgUnlockLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgUnlockLiquidityRequest;
                fromPartial(object: Partial<_7.MsgUnlockLiquidityRequest>): _7.MsgUnlockLiquidityRequest;
                fromAmino(object: _7.MsgUnlockLiquidityRequestAmino): _7.MsgUnlockLiquidityRequest;
                toAmino(message: _7.MsgUnlockLiquidityRequest): _7.MsgUnlockLiquidityRequestAmino;
                fromAminoMsg(object: _7.MsgUnlockLiquidityRequestAminoMsg): _7.MsgUnlockLiquidityRequest;
                fromProtoMsg(message: _7.MsgUnlockLiquidityRequestProtoMsg): _7.MsgUnlockLiquidityRequest;
                toProto(message: _7.MsgUnlockLiquidityRequest): Uint8Array;
                toProtoMsg(message: _7.MsgUnlockLiquidityRequest): _7.MsgUnlockLiquidityRequestProtoMsg;
            };
            MsgUnlockLiquidityResponse: {
                typeUrl: string;
                encode(_: _7.MsgUnlockLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgUnlockLiquidityResponse;
                fromPartial(_: Partial<_7.MsgUnlockLiquidityResponse>): _7.MsgUnlockLiquidityResponse;
                fromAmino(_: _7.MsgUnlockLiquidityResponseAmino): _7.MsgUnlockLiquidityResponse;
                toAmino(_: _7.MsgUnlockLiquidityResponse): _7.MsgUnlockLiquidityResponseAmino;
                fromAminoMsg(object: _7.MsgUnlockLiquidityResponseAminoMsg): _7.MsgUnlockLiquidityResponse;
                fromProtoMsg(message: _7.MsgUnlockLiquidityResponseProtoMsg): _7.MsgUnlockLiquidityResponse;
                toProto(message: _7.MsgUnlockLiquidityResponse): Uint8Array;
                toProtoMsg(message: _7.MsgUnlockLiquidityResponse): _7.MsgUnlockLiquidityResponseProtoMsg;
            };
            MsgUpdateRewardsParamsRequest: {
                typeUrl: string;
                encode(message: _7.MsgUpdateRewardsParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgUpdateRewardsParamsRequest;
                fromPartial(object: Partial<_7.MsgUpdateRewardsParamsRequest>): _7.MsgUpdateRewardsParamsRequest;
                fromAmino(object: _7.MsgUpdateRewardsParamsRequestAmino): _7.MsgUpdateRewardsParamsRequest;
                toAmino(message: _7.MsgUpdateRewardsParamsRequest): _7.MsgUpdateRewardsParamsRequestAmino;
                fromAminoMsg(object: _7.MsgUpdateRewardsParamsRequestAminoMsg): _7.MsgUpdateRewardsParamsRequest;
                fromProtoMsg(message: _7.MsgUpdateRewardsParamsRequestProtoMsg): _7.MsgUpdateRewardsParamsRequest;
                toProto(message: _7.MsgUpdateRewardsParamsRequest): Uint8Array;
                toProtoMsg(message: _7.MsgUpdateRewardsParamsRequest): _7.MsgUpdateRewardsParamsRequestProtoMsg;
            };
            MsgUpdateRewardsParamsResponse: {
                typeUrl: string;
                encode(_: _7.MsgUpdateRewardsParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgUpdateRewardsParamsResponse;
                fromPartial(_: Partial<_7.MsgUpdateRewardsParamsResponse>): _7.MsgUpdateRewardsParamsResponse;
                fromAmino(_: _7.MsgUpdateRewardsParamsResponseAmino): _7.MsgUpdateRewardsParamsResponse;
                toAmino(_: _7.MsgUpdateRewardsParamsResponse): _7.MsgUpdateRewardsParamsResponseAmino;
                fromAminoMsg(object: _7.MsgUpdateRewardsParamsResponseAminoMsg): _7.MsgUpdateRewardsParamsResponse;
                fromProtoMsg(message: _7.MsgUpdateRewardsParamsResponseProtoMsg): _7.MsgUpdateRewardsParamsResponse;
                toProto(message: _7.MsgUpdateRewardsParamsResponse): Uint8Array;
                toProtoMsg(message: _7.MsgUpdateRewardsParamsResponse): _7.MsgUpdateRewardsParamsResponseProtoMsg;
            };
            MsgAddRewardPeriodRequest: {
                typeUrl: string;
                encode(message: _7.MsgAddRewardPeriodRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgAddRewardPeriodRequest;
                fromPartial(object: Partial<_7.MsgAddRewardPeriodRequest>): _7.MsgAddRewardPeriodRequest;
                fromAmino(object: _7.MsgAddRewardPeriodRequestAmino): _7.MsgAddRewardPeriodRequest;
                toAmino(message: _7.MsgAddRewardPeriodRequest): _7.MsgAddRewardPeriodRequestAmino;
                fromAminoMsg(object: _7.MsgAddRewardPeriodRequestAminoMsg): _7.MsgAddRewardPeriodRequest;
                fromProtoMsg(message: _7.MsgAddRewardPeriodRequestProtoMsg): _7.MsgAddRewardPeriodRequest;
                toProto(message: _7.MsgAddRewardPeriodRequest): Uint8Array;
                toProtoMsg(message: _7.MsgAddRewardPeriodRequest): _7.MsgAddRewardPeriodRequestProtoMsg;
            };
            MsgAddRewardPeriodResponse: {
                typeUrl: string;
                encode(_: _7.MsgAddRewardPeriodResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgAddRewardPeriodResponse;
                fromPartial(_: Partial<_7.MsgAddRewardPeriodResponse>): _7.MsgAddRewardPeriodResponse;
                fromAmino(_: _7.MsgAddRewardPeriodResponseAmino): _7.MsgAddRewardPeriodResponse;
                toAmino(_: _7.MsgAddRewardPeriodResponse): _7.MsgAddRewardPeriodResponseAmino;
                fromAminoMsg(object: _7.MsgAddRewardPeriodResponseAminoMsg): _7.MsgAddRewardPeriodResponse;
                fromProtoMsg(message: _7.MsgAddRewardPeriodResponseProtoMsg): _7.MsgAddRewardPeriodResponse;
                toProto(message: _7.MsgAddRewardPeriodResponse): Uint8Array;
                toProtoMsg(message: _7.MsgAddRewardPeriodResponse): _7.MsgAddRewardPeriodResponseProtoMsg;
            };
            MsgSetSymmetryThreshold: {
                typeUrl: string;
                encode(message: _7.MsgSetSymmetryThreshold, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgSetSymmetryThreshold;
                fromPartial(object: Partial<_7.MsgSetSymmetryThreshold>): _7.MsgSetSymmetryThreshold;
                fromAmino(object: _7.MsgSetSymmetryThresholdAmino): _7.MsgSetSymmetryThreshold;
                toAmino(message: _7.MsgSetSymmetryThreshold): _7.MsgSetSymmetryThresholdAmino;
                fromAminoMsg(object: _7.MsgSetSymmetryThresholdAminoMsg): _7.MsgSetSymmetryThreshold;
                fromProtoMsg(message: _7.MsgSetSymmetryThresholdProtoMsg): _7.MsgSetSymmetryThreshold;
                toProto(message: _7.MsgSetSymmetryThreshold): Uint8Array;
                toProtoMsg(message: _7.MsgSetSymmetryThreshold): _7.MsgSetSymmetryThresholdProtoMsg;
            };
            MsgSetSymmetryThresholdResponse: {
                typeUrl: string;
                encode(_: _7.MsgSetSymmetryThresholdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgSetSymmetryThresholdResponse;
                fromPartial(_: Partial<_7.MsgSetSymmetryThresholdResponse>): _7.MsgSetSymmetryThresholdResponse;
                fromAmino(_: _7.MsgSetSymmetryThresholdResponseAmino): _7.MsgSetSymmetryThresholdResponse;
                toAmino(_: _7.MsgSetSymmetryThresholdResponse): _7.MsgSetSymmetryThresholdResponseAmino;
                fromAminoMsg(object: _7.MsgSetSymmetryThresholdResponseAminoMsg): _7.MsgSetSymmetryThresholdResponse;
                fromProtoMsg(message: _7.MsgSetSymmetryThresholdResponseProtoMsg): _7.MsgSetSymmetryThresholdResponse;
                toProto(message: _7.MsgSetSymmetryThresholdResponse): Uint8Array;
                toProtoMsg(message: _7.MsgSetSymmetryThresholdResponse): _7.MsgSetSymmetryThresholdResponseProtoMsg;
            };
            MsgCancelUnlock: {
                typeUrl: string;
                encode(message: _7.MsgCancelUnlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgCancelUnlock;
                fromPartial(object: Partial<_7.MsgCancelUnlock>): _7.MsgCancelUnlock;
                fromAmino(object: _7.MsgCancelUnlockAmino): _7.MsgCancelUnlock;
                toAmino(message: _7.MsgCancelUnlock): _7.MsgCancelUnlockAmino;
                fromAminoMsg(object: _7.MsgCancelUnlockAminoMsg): _7.MsgCancelUnlock;
                fromProtoMsg(message: _7.MsgCancelUnlockProtoMsg): _7.MsgCancelUnlock;
                toProto(message: _7.MsgCancelUnlock): Uint8Array;
                toProtoMsg(message: _7.MsgCancelUnlock): _7.MsgCancelUnlockProtoMsg;
            };
            MsgCancelUnlockResponse: {
                typeUrl: string;
                encode(_: _7.MsgCancelUnlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgCancelUnlockResponse;
                fromPartial(_: Partial<_7.MsgCancelUnlockResponse>): _7.MsgCancelUnlockResponse;
                fromAmino(_: _7.MsgCancelUnlockResponseAmino): _7.MsgCancelUnlockResponse;
                toAmino(_: _7.MsgCancelUnlockResponse): _7.MsgCancelUnlockResponseAmino;
                fromAminoMsg(object: _7.MsgCancelUnlockResponseAminoMsg): _7.MsgCancelUnlockResponse;
                fromProtoMsg(message: _7.MsgCancelUnlockResponseProtoMsg): _7.MsgCancelUnlockResponse;
                toProto(message: _7.MsgCancelUnlockResponse): Uint8Array;
                toProtoMsg(message: _7.MsgCancelUnlockResponse): _7.MsgCancelUnlockResponseProtoMsg;
            };
            RemovalRequest: {
                typeUrl: string;
                encode(message: _7.RemovalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.RemovalRequest;
                fromPartial(object: Partial<_7.RemovalRequest>): _7.RemovalRequest;
                fromAmino(object: _7.RemovalRequestAmino): _7.RemovalRequest;
                toAmino(message: _7.RemovalRequest): _7.RemovalRequestAmino;
                fromAminoMsg(object: _7.RemovalRequestAminoMsg): _7.RemovalRequest;
                fromProtoMsg(message: _7.RemovalRequestProtoMsg): _7.RemovalRequest;
                toProto(message: _7.RemovalRequest): Uint8Array;
                toProtoMsg(message: _7.RemovalRequest): _7.RemovalRequestProtoMsg;
            };
            MsgModifyLiquidityProtectionRates: {
                typeUrl: string;
                encode(message: _7.MsgModifyLiquidityProtectionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgModifyLiquidityProtectionRates;
                fromPartial(object: Partial<_7.MsgModifyLiquidityProtectionRates>): _7.MsgModifyLiquidityProtectionRates;
                fromAmino(object: _7.MsgModifyLiquidityProtectionRatesAmino): _7.MsgModifyLiquidityProtectionRates;
                toAmino(message: _7.MsgModifyLiquidityProtectionRates): _7.MsgModifyLiquidityProtectionRatesAmino;
                fromAminoMsg(object: _7.MsgModifyLiquidityProtectionRatesAminoMsg): _7.MsgModifyLiquidityProtectionRates;
                fromProtoMsg(message: _7.MsgModifyLiquidityProtectionRatesProtoMsg): _7.MsgModifyLiquidityProtectionRates;
                toProto(message: _7.MsgModifyLiquidityProtectionRates): Uint8Array;
                toProtoMsg(message: _7.MsgModifyLiquidityProtectionRates): _7.MsgModifyLiquidityProtectionRatesProtoMsg;
            };
            MsgModifyLiquidityProtectionRatesResponse: {
                typeUrl: string;
                encode(_: _7.MsgModifyLiquidityProtectionRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgModifyLiquidityProtectionRatesResponse;
                fromPartial(_: Partial<_7.MsgModifyLiquidityProtectionRatesResponse>): _7.MsgModifyLiquidityProtectionRatesResponse;
                fromAmino(_: _7.MsgModifyLiquidityProtectionRatesResponseAmino): _7.MsgModifyLiquidityProtectionRatesResponse;
                toAmino(_: _7.MsgModifyLiquidityProtectionRatesResponse): _7.MsgModifyLiquidityProtectionRatesResponseAmino;
                fromAminoMsg(object: _7.MsgModifyLiquidityProtectionRatesResponseAminoMsg): _7.MsgModifyLiquidityProtectionRatesResponse;
                fromProtoMsg(message: _7.MsgModifyLiquidityProtectionRatesResponseProtoMsg): _7.MsgModifyLiquidityProtectionRatesResponse;
                toProto(message: _7.MsgModifyLiquidityProtectionRatesResponse): Uint8Array;
                toProtoMsg(message: _7.MsgModifyLiquidityProtectionRatesResponse): _7.MsgModifyLiquidityProtectionRatesResponseProtoMsg;
            };
            MsgUpdateLiquidityProtectionParams: {
                typeUrl: string;
                encode(message: _7.MsgUpdateLiquidityProtectionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgUpdateLiquidityProtectionParams;
                fromPartial(object: Partial<_7.MsgUpdateLiquidityProtectionParams>): _7.MsgUpdateLiquidityProtectionParams;
                fromAmino(object: _7.MsgUpdateLiquidityProtectionParamsAmino): _7.MsgUpdateLiquidityProtectionParams;
                toAmino(message: _7.MsgUpdateLiquidityProtectionParams): _7.MsgUpdateLiquidityProtectionParamsAmino;
                fromAminoMsg(object: _7.MsgUpdateLiquidityProtectionParamsAminoMsg): _7.MsgUpdateLiquidityProtectionParams;
                fromProtoMsg(message: _7.MsgUpdateLiquidityProtectionParamsProtoMsg): _7.MsgUpdateLiquidityProtectionParams;
                toProto(message: _7.MsgUpdateLiquidityProtectionParams): Uint8Array;
                toProtoMsg(message: _7.MsgUpdateLiquidityProtectionParams): _7.MsgUpdateLiquidityProtectionParamsProtoMsg;
            };
            MsgUpdateLiquidityProtectionParamsResponse: {
                typeUrl: string;
                encode(_: _7.MsgUpdateLiquidityProtectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgUpdateLiquidityProtectionParamsResponse;
                fromPartial(_: Partial<_7.MsgUpdateLiquidityProtectionParamsResponse>): _7.MsgUpdateLiquidityProtectionParamsResponse;
                fromAmino(_: _7.MsgUpdateLiquidityProtectionParamsResponseAmino): _7.MsgUpdateLiquidityProtectionParamsResponse;
                toAmino(_: _7.MsgUpdateLiquidityProtectionParamsResponse): _7.MsgUpdateLiquidityProtectionParamsResponseAmino;
                fromAminoMsg(object: _7.MsgUpdateLiquidityProtectionParamsResponseAminoMsg): _7.MsgUpdateLiquidityProtectionParamsResponse;
                fromProtoMsg(message: _7.MsgUpdateLiquidityProtectionParamsResponseProtoMsg): _7.MsgUpdateLiquidityProtectionParamsResponse;
                toProto(message: _7.MsgUpdateLiquidityProtectionParamsResponse): Uint8Array;
                toProtoMsg(message: _7.MsgUpdateLiquidityProtectionParamsResponse): _7.MsgUpdateLiquidityProtectionParamsResponseProtoMsg;
            };
            MsgAddProviderDistributionPeriodRequest: {
                typeUrl: string;
                encode(message: _7.MsgAddProviderDistributionPeriodRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgAddProviderDistributionPeriodRequest;
                fromPartial(object: Partial<_7.MsgAddProviderDistributionPeriodRequest>): _7.MsgAddProviderDistributionPeriodRequest;
                fromAmino(object: _7.MsgAddProviderDistributionPeriodRequestAmino): _7.MsgAddProviderDistributionPeriodRequest;
                toAmino(message: _7.MsgAddProviderDistributionPeriodRequest): _7.MsgAddProviderDistributionPeriodRequestAmino;
                fromAminoMsg(object: _7.MsgAddProviderDistributionPeriodRequestAminoMsg): _7.MsgAddProviderDistributionPeriodRequest;
                fromProtoMsg(message: _7.MsgAddProviderDistributionPeriodRequestProtoMsg): _7.MsgAddProviderDistributionPeriodRequest;
                toProto(message: _7.MsgAddProviderDistributionPeriodRequest): Uint8Array;
                toProtoMsg(message: _7.MsgAddProviderDistributionPeriodRequest): _7.MsgAddProviderDistributionPeriodRequestProtoMsg;
            };
            MsgAddProviderDistributionPeriodResponse: {
                typeUrl: string;
                encode(_: _7.MsgAddProviderDistributionPeriodResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgAddProviderDistributionPeriodResponse;
                fromPartial(_: Partial<_7.MsgAddProviderDistributionPeriodResponse>): _7.MsgAddProviderDistributionPeriodResponse;
                fromAmino(_: _7.MsgAddProviderDistributionPeriodResponseAmino): _7.MsgAddProviderDistributionPeriodResponse;
                toAmino(_: _7.MsgAddProviderDistributionPeriodResponse): _7.MsgAddProviderDistributionPeriodResponseAmino;
                fromAminoMsg(object: _7.MsgAddProviderDistributionPeriodResponseAminoMsg): _7.MsgAddProviderDistributionPeriodResponse;
                fromProtoMsg(message: _7.MsgAddProviderDistributionPeriodResponseProtoMsg): _7.MsgAddProviderDistributionPeriodResponse;
                toProto(message: _7.MsgAddProviderDistributionPeriodResponse): Uint8Array;
                toProtoMsg(message: _7.MsgAddProviderDistributionPeriodResponse): _7.MsgAddProviderDistributionPeriodResponseProtoMsg;
            };
            MsgUpdateSwapFeeParamsRequest: {
                typeUrl: string;
                encode(message: _7.MsgUpdateSwapFeeParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgUpdateSwapFeeParamsRequest;
                fromPartial(object: Partial<_7.MsgUpdateSwapFeeParamsRequest>): _7.MsgUpdateSwapFeeParamsRequest;
                fromAmino(object: _7.MsgUpdateSwapFeeParamsRequestAmino): _7.MsgUpdateSwapFeeParamsRequest;
                toAmino(message: _7.MsgUpdateSwapFeeParamsRequest): _7.MsgUpdateSwapFeeParamsRequestAmino;
                fromAminoMsg(object: _7.MsgUpdateSwapFeeParamsRequestAminoMsg): _7.MsgUpdateSwapFeeParamsRequest;
                fromProtoMsg(message: _7.MsgUpdateSwapFeeParamsRequestProtoMsg): _7.MsgUpdateSwapFeeParamsRequest;
                toProto(message: _7.MsgUpdateSwapFeeParamsRequest): Uint8Array;
                toProtoMsg(message: _7.MsgUpdateSwapFeeParamsRequest): _7.MsgUpdateSwapFeeParamsRequestProtoMsg;
            };
            MsgUpdateSwapFeeParamsResponse: {
                typeUrl: string;
                encode(_: _7.MsgUpdateSwapFeeParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgUpdateSwapFeeParamsResponse;
                fromPartial(_: Partial<_7.MsgUpdateSwapFeeParamsResponse>): _7.MsgUpdateSwapFeeParamsResponse;
                fromAmino(_: _7.MsgUpdateSwapFeeParamsResponseAmino): _7.MsgUpdateSwapFeeParamsResponse;
                toAmino(_: _7.MsgUpdateSwapFeeParamsResponse): _7.MsgUpdateSwapFeeParamsResponseAmino;
                fromAminoMsg(object: _7.MsgUpdateSwapFeeParamsResponseAminoMsg): _7.MsgUpdateSwapFeeParamsResponse;
                fromProtoMsg(message: _7.MsgUpdateSwapFeeParamsResponseProtoMsg): _7.MsgUpdateSwapFeeParamsResponse;
                toProto(message: _7.MsgUpdateSwapFeeParamsResponse): Uint8Array;
                toProtoMsg(message: _7.MsgUpdateSwapFeeParamsResponse): _7.MsgUpdateSwapFeeParamsResponseProtoMsg;
            };
            MsgAddLiquidityToRewardsBucketRequest: {
                typeUrl: string;
                encode(message: _7.MsgAddLiquidityToRewardsBucketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgAddLiquidityToRewardsBucketRequest;
                fromPartial(object: Partial<_7.MsgAddLiquidityToRewardsBucketRequest>): _7.MsgAddLiquidityToRewardsBucketRequest;
                fromAmino(object: _7.MsgAddLiquidityToRewardsBucketRequestAmino): _7.MsgAddLiquidityToRewardsBucketRequest;
                toAmino(message: _7.MsgAddLiquidityToRewardsBucketRequest): _7.MsgAddLiquidityToRewardsBucketRequestAmino;
                fromAminoMsg(object: _7.MsgAddLiquidityToRewardsBucketRequestAminoMsg): _7.MsgAddLiquidityToRewardsBucketRequest;
                fromProtoMsg(message: _7.MsgAddLiquidityToRewardsBucketRequestProtoMsg): _7.MsgAddLiquidityToRewardsBucketRequest;
                toProto(message: _7.MsgAddLiquidityToRewardsBucketRequest): Uint8Array;
                toProtoMsg(message: _7.MsgAddLiquidityToRewardsBucketRequest): _7.MsgAddLiquidityToRewardsBucketRequestProtoMsg;
            };
            MsgAddLiquidityToRewardsBucketResponse: {
                typeUrl: string;
                encode(_: _7.MsgAddLiquidityToRewardsBucketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgAddLiquidityToRewardsBucketResponse;
                fromPartial(_: Partial<_7.MsgAddLiquidityToRewardsBucketResponse>): _7.MsgAddLiquidityToRewardsBucketResponse;
                fromAmino(_: _7.MsgAddLiquidityToRewardsBucketResponseAmino): _7.MsgAddLiquidityToRewardsBucketResponse;
                toAmino(_: _7.MsgAddLiquidityToRewardsBucketResponse): _7.MsgAddLiquidityToRewardsBucketResponseAmino;
                fromAminoMsg(object: _7.MsgAddLiquidityToRewardsBucketResponseAminoMsg): _7.MsgAddLiquidityToRewardsBucketResponse;
                fromProtoMsg(message: _7.MsgAddLiquidityToRewardsBucketResponseProtoMsg): _7.MsgAddLiquidityToRewardsBucketResponse;
                toProto(message: _7.MsgAddLiquidityToRewardsBucketResponse): Uint8Array;
                toProtoMsg(message: _7.MsgAddLiquidityToRewardsBucketResponse): _7.MsgAddLiquidityToRewardsBucketResponseProtoMsg;
            };
            RewardsBucket: {
                typeUrl: string;
                encode(message: _6.RewardsBucket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.RewardsBucket;
                fromPartial(object: Partial<_6.RewardsBucket>): _6.RewardsBucket;
                fromAmino(object: _6.RewardsBucketAmino): _6.RewardsBucket;
                toAmino(message: _6.RewardsBucket): _6.RewardsBucketAmino;
                fromAminoMsg(object: _6.RewardsBucketAminoMsg): _6.RewardsBucket;
                fromProtoMsg(message: _6.RewardsBucketProtoMsg): _6.RewardsBucket;
                toProto(message: _6.RewardsBucket): Uint8Array;
                toProtoMsg(message: _6.RewardsBucket): _6.RewardsBucketProtoMsg;
            };
            swapStatusFromJSON(object: any): _5.SwapStatus;
            swapStatusToJSON(object: _5.SwapStatus): string;
            SwapStatus: typeof _5.SwapStatus;
            SwapStatusSDKType: typeof _5.SwapStatus;
            SwapStatusAmino: typeof _5.SwapStatus;
            PoolReq: {
                typeUrl: string;
                encode(message: _5.PoolReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.PoolReq;
                fromPartial(object: Partial<_5.PoolReq>): _5.PoolReq;
                fromAmino(object: _5.PoolReqAmino): _5.PoolReq;
                toAmino(message: _5.PoolReq): _5.PoolReqAmino;
                fromAminoMsg(object: _5.PoolReqAminoMsg): _5.PoolReq;
                fromProtoMsg(message: _5.PoolReqProtoMsg): _5.PoolReq;
                toProto(message: _5.PoolReq): Uint8Array;
                toProtoMsg(message: _5.PoolReq): _5.PoolReqProtoMsg;
            };
            PoolRes: {
                typeUrl: string;
                encode(message: _5.PoolRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.PoolRes;
                fromPartial(object: Partial<_5.PoolRes>): _5.PoolRes;
                fromAmino(object: _5.PoolResAmino): _5.PoolRes;
                toAmino(message: _5.PoolRes): _5.PoolResAmino;
                fromAminoMsg(object: _5.PoolResAminoMsg): _5.PoolRes;
                fromProtoMsg(message: _5.PoolResProtoMsg): _5.PoolRes;
                toProto(message: _5.PoolRes): Uint8Array;
                toProtoMsg(message: _5.PoolRes): _5.PoolResProtoMsg;
            };
            PoolsReq: {
                typeUrl: string;
                encode(message: _5.PoolsReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.PoolsReq;
                fromPartial(object: Partial<_5.PoolsReq>): _5.PoolsReq;
                fromAmino(object: _5.PoolsReqAmino): _5.PoolsReq;
                toAmino(message: _5.PoolsReq): _5.PoolsReqAmino;
                fromAminoMsg(object: _5.PoolsReqAminoMsg): _5.PoolsReq;
                fromProtoMsg(message: _5.PoolsReqProtoMsg): _5.PoolsReq;
                toProto(message: _5.PoolsReq): Uint8Array;
                toProtoMsg(message: _5.PoolsReq): _5.PoolsReqProtoMsg;
            };
            PoolsRes: {
                typeUrl: string;
                encode(message: _5.PoolsRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.PoolsRes;
                fromPartial(object: Partial<_5.PoolsRes>): _5.PoolsRes;
                fromAmino(object: _5.PoolsResAmino): _5.PoolsRes;
                toAmino(message: _5.PoolsRes): _5.PoolsResAmino;
                fromAminoMsg(object: _5.PoolsResAminoMsg): _5.PoolsRes;
                fromProtoMsg(message: _5.PoolsResProtoMsg): _5.PoolsRes;
                toProto(message: _5.PoolsRes): Uint8Array;
                toProtoMsg(message: _5.PoolsRes): _5.PoolsResProtoMsg;
            };
            LiquidityProviderReq: {
                typeUrl: string;
                encode(message: _5.LiquidityProviderReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.LiquidityProviderReq;
                fromPartial(object: Partial<_5.LiquidityProviderReq>): _5.LiquidityProviderReq;
                fromAmino(object: _5.LiquidityProviderReqAmino): _5.LiquidityProviderReq;
                toAmino(message: _5.LiquidityProviderReq): _5.LiquidityProviderReqAmino;
                fromAminoMsg(object: _5.LiquidityProviderReqAminoMsg): _5.LiquidityProviderReq;
                fromProtoMsg(message: _5.LiquidityProviderReqProtoMsg): _5.LiquidityProviderReq;
                toProto(message: _5.LiquidityProviderReq): Uint8Array;
                toProtoMsg(message: _5.LiquidityProviderReq): _5.LiquidityProviderReqProtoMsg;
            };
            LiquidityProviderRes: {
                typeUrl: string;
                encode(message: _5.LiquidityProviderRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.LiquidityProviderRes;
                fromPartial(object: Partial<_5.LiquidityProviderRes>): _5.LiquidityProviderRes;
                fromAmino(object: _5.LiquidityProviderResAmino): _5.LiquidityProviderRes;
                toAmino(message: _5.LiquidityProviderRes): _5.LiquidityProviderResAmino;
                fromAminoMsg(object: _5.LiquidityProviderResAminoMsg): _5.LiquidityProviderRes;
                fromProtoMsg(message: _5.LiquidityProviderResProtoMsg): _5.LiquidityProviderRes;
                toProto(message: _5.LiquidityProviderRes): Uint8Array;
                toProtoMsg(message: _5.LiquidityProviderRes): _5.LiquidityProviderResProtoMsg;
            };
            AssetListReq: {
                typeUrl: string;
                encode(message: _5.AssetListReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.AssetListReq;
                fromPartial(object: Partial<_5.AssetListReq>): _5.AssetListReq;
                fromAmino(object: _5.AssetListReqAmino): _5.AssetListReq;
                toAmino(message: _5.AssetListReq): _5.AssetListReqAmino;
                fromAminoMsg(object: _5.AssetListReqAminoMsg): _5.AssetListReq;
                fromProtoMsg(message: _5.AssetListReqProtoMsg): _5.AssetListReq;
                toProto(message: _5.AssetListReq): Uint8Array;
                toProtoMsg(message: _5.AssetListReq): _5.AssetListReqProtoMsg;
            };
            AssetListRes: {
                typeUrl: string;
                encode(message: _5.AssetListRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.AssetListRes;
                fromPartial(object: Partial<_5.AssetListRes>): _5.AssetListRes;
                fromAmino(object: _5.AssetListResAmino): _5.AssetListRes;
                toAmino(message: _5.AssetListRes): _5.AssetListResAmino;
                fromAminoMsg(object: _5.AssetListResAminoMsg): _5.AssetListRes;
                fromProtoMsg(message: _5.AssetListResProtoMsg): _5.AssetListRes;
                toProto(message: _5.AssetListRes): Uint8Array;
                toProtoMsg(message: _5.AssetListRes): _5.AssetListResProtoMsg;
            };
            LiquidityProviderDataReq: {
                typeUrl: string;
                encode(message: _5.LiquidityProviderDataReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.LiquidityProviderDataReq;
                fromPartial(object: Partial<_5.LiquidityProviderDataReq>): _5.LiquidityProviderDataReq;
                fromAmino(object: _5.LiquidityProviderDataReqAmino): _5.LiquidityProviderDataReq;
                toAmino(message: _5.LiquidityProviderDataReq): _5.LiquidityProviderDataReqAmino;
                fromAminoMsg(object: _5.LiquidityProviderDataReqAminoMsg): _5.LiquidityProviderDataReq;
                fromProtoMsg(message: _5.LiquidityProviderDataReqProtoMsg): _5.LiquidityProviderDataReq;
                toProto(message: _5.LiquidityProviderDataReq): Uint8Array;
                toProtoMsg(message: _5.LiquidityProviderDataReq): _5.LiquidityProviderDataReqProtoMsg;
            };
            LiquidityProviderDataRes: {
                typeUrl: string;
                encode(message: _5.LiquidityProviderDataRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.LiquidityProviderDataRes;
                fromPartial(object: Partial<_5.LiquidityProviderDataRes>): _5.LiquidityProviderDataRes;
                fromAmino(object: _5.LiquidityProviderDataResAmino): _5.LiquidityProviderDataRes;
                toAmino(message: _5.LiquidityProviderDataRes): _5.LiquidityProviderDataResAmino;
                fromAminoMsg(object: _5.LiquidityProviderDataResAminoMsg): _5.LiquidityProviderDataRes;
                fromProtoMsg(message: _5.LiquidityProviderDataResProtoMsg): _5.LiquidityProviderDataRes;
                toProto(message: _5.LiquidityProviderDataRes): Uint8Array;
                toProtoMsg(message: _5.LiquidityProviderDataRes): _5.LiquidityProviderDataResProtoMsg;
            };
            LiquidityProviderListReq: {
                typeUrl: string;
                encode(message: _5.LiquidityProviderListReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.LiquidityProviderListReq;
                fromPartial(object: Partial<_5.LiquidityProviderListReq>): _5.LiquidityProviderListReq;
                fromAmino(object: _5.LiquidityProviderListReqAmino): _5.LiquidityProviderListReq;
                toAmino(message: _5.LiquidityProviderListReq): _5.LiquidityProviderListReqAmino;
                fromAminoMsg(object: _5.LiquidityProviderListReqAminoMsg): _5.LiquidityProviderListReq;
                fromProtoMsg(message: _5.LiquidityProviderListReqProtoMsg): _5.LiquidityProviderListReq;
                toProto(message: _5.LiquidityProviderListReq): Uint8Array;
                toProtoMsg(message: _5.LiquidityProviderListReq): _5.LiquidityProviderListReqProtoMsg;
            };
            LiquidityProviderListRes: {
                typeUrl: string;
                encode(message: _5.LiquidityProviderListRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.LiquidityProviderListRes;
                fromPartial(object: Partial<_5.LiquidityProviderListRes>): _5.LiquidityProviderListRes;
                fromAmino(object: _5.LiquidityProviderListResAmino): _5.LiquidityProviderListRes;
                toAmino(message: _5.LiquidityProviderListRes): _5.LiquidityProviderListResAmino;
                fromAminoMsg(object: _5.LiquidityProviderListResAminoMsg): _5.LiquidityProviderListRes;
                fromProtoMsg(message: _5.LiquidityProviderListResProtoMsg): _5.LiquidityProviderListRes;
                toProto(message: _5.LiquidityProviderListRes): Uint8Array;
                toProtoMsg(message: _5.LiquidityProviderListRes): _5.LiquidityProviderListResProtoMsg;
            };
            LiquidityProvidersReq: {
                typeUrl: string;
                encode(message: _5.LiquidityProvidersReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.LiquidityProvidersReq;
                fromPartial(object: Partial<_5.LiquidityProvidersReq>): _5.LiquidityProvidersReq;
                fromAmino(object: _5.LiquidityProvidersReqAmino): _5.LiquidityProvidersReq;
                toAmino(message: _5.LiquidityProvidersReq): _5.LiquidityProvidersReqAmino;
                fromAminoMsg(object: _5.LiquidityProvidersReqAminoMsg): _5.LiquidityProvidersReq;
                fromProtoMsg(message: _5.LiquidityProvidersReqProtoMsg): _5.LiquidityProvidersReq;
                toProto(message: _5.LiquidityProvidersReq): Uint8Array;
                toProtoMsg(message: _5.LiquidityProvidersReq): _5.LiquidityProvidersReqProtoMsg;
            };
            LiquidityProvidersRes: {
                typeUrl: string;
                encode(message: _5.LiquidityProvidersRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.LiquidityProvidersRes;
                fromPartial(object: Partial<_5.LiquidityProvidersRes>): _5.LiquidityProvidersRes;
                fromAmino(object: _5.LiquidityProvidersResAmino): _5.LiquidityProvidersRes;
                toAmino(message: _5.LiquidityProvidersRes): _5.LiquidityProvidersResAmino;
                fromAminoMsg(object: _5.LiquidityProvidersResAminoMsg): _5.LiquidityProvidersRes;
                fromProtoMsg(message: _5.LiquidityProvidersResProtoMsg): _5.LiquidityProvidersRes;
                toProto(message: _5.LiquidityProvidersRes): Uint8Array;
                toProtoMsg(message: _5.LiquidityProvidersRes): _5.LiquidityProvidersResProtoMsg;
            };
            ParamsReq: {
                typeUrl: string;
                encode(_: _5.ParamsReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.ParamsReq;
                fromPartial(_: Partial<_5.ParamsReq>): _5.ParamsReq;
                fromAmino(_: _5.ParamsReqAmino): _5.ParamsReq;
                toAmino(_: _5.ParamsReq): _5.ParamsReqAmino;
                fromAminoMsg(object: _5.ParamsReqAminoMsg): _5.ParamsReq;
                fromProtoMsg(message: _5.ParamsReqProtoMsg): _5.ParamsReq;
                toProto(message: _5.ParamsReq): Uint8Array;
                toProtoMsg(message: _5.ParamsReq): _5.ParamsReqProtoMsg;
            };
            ParamsRes: {
                typeUrl: string;
                encode(message: _5.ParamsRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.ParamsRes;
                fromPartial(object: Partial<_5.ParamsRes>): _5.ParamsRes;
                fromAmino(object: _5.ParamsResAmino): _5.ParamsRes;
                toAmino(message: _5.ParamsRes): _5.ParamsResAmino;
                fromAminoMsg(object: _5.ParamsResAminoMsg): _5.ParamsRes;
                fromProtoMsg(message: _5.ParamsResProtoMsg): _5.ParamsRes;
                toProto(message: _5.ParamsRes): Uint8Array;
                toProtoMsg(message: _5.ParamsRes): _5.ParamsResProtoMsg;
            };
            RewardParamsReq: {
                typeUrl: string;
                encode(_: _5.RewardParamsReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.RewardParamsReq;
                fromPartial(_: Partial<_5.RewardParamsReq>): _5.RewardParamsReq;
                fromAmino(_: _5.RewardParamsReqAmino): _5.RewardParamsReq;
                toAmino(_: _5.RewardParamsReq): _5.RewardParamsReqAmino;
                fromAminoMsg(object: _5.RewardParamsReqAminoMsg): _5.RewardParamsReq;
                fromProtoMsg(message: _5.RewardParamsReqProtoMsg): _5.RewardParamsReq;
                toProto(message: _5.RewardParamsReq): Uint8Array;
                toProtoMsg(message: _5.RewardParamsReq): _5.RewardParamsReqProtoMsg;
            };
            RewardParamsRes: {
                typeUrl: string;
                encode(message: _5.RewardParamsRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.RewardParamsRes;
                fromPartial(object: Partial<_5.RewardParamsRes>): _5.RewardParamsRes;
                fromAmino(object: _5.RewardParamsResAmino): _5.RewardParamsRes;
                toAmino(message: _5.RewardParamsRes): _5.RewardParamsResAmino;
                fromAminoMsg(object: _5.RewardParamsResAminoMsg): _5.RewardParamsRes;
                fromProtoMsg(message: _5.RewardParamsResProtoMsg): _5.RewardParamsRes;
                toProto(message: _5.RewardParamsRes): Uint8Array;
                toProtoMsg(message: _5.RewardParamsRes): _5.RewardParamsResProtoMsg;
            };
            PmtpParamsReq: {
                typeUrl: string;
                encode(_: _5.PmtpParamsReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.PmtpParamsReq;
                fromPartial(_: Partial<_5.PmtpParamsReq>): _5.PmtpParamsReq;
                fromAmino(_: _5.PmtpParamsReqAmino): _5.PmtpParamsReq;
                toAmino(_: _5.PmtpParamsReq): _5.PmtpParamsReqAmino;
                fromAminoMsg(object: _5.PmtpParamsReqAminoMsg): _5.PmtpParamsReq;
                fromProtoMsg(message: _5.PmtpParamsReqProtoMsg): _5.PmtpParamsReq;
                toProto(message: _5.PmtpParamsReq): Uint8Array;
                toProtoMsg(message: _5.PmtpParamsReq): _5.PmtpParamsReqProtoMsg;
            };
            PmtpParamsRes: {
                typeUrl: string;
                encode(message: _5.PmtpParamsRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.PmtpParamsRes;
                fromPartial(object: Partial<_5.PmtpParamsRes>): _5.PmtpParamsRes;
                fromAmino(object: _5.PmtpParamsResAmino): _5.PmtpParamsRes;
                toAmino(message: _5.PmtpParamsRes): _5.PmtpParamsResAmino;
                fromAminoMsg(object: _5.PmtpParamsResAminoMsg): _5.PmtpParamsRes;
                fromProtoMsg(message: _5.PmtpParamsResProtoMsg): _5.PmtpParamsRes;
                toProto(message: _5.PmtpParamsRes): Uint8Array;
                toProtoMsg(message: _5.PmtpParamsRes): _5.PmtpParamsResProtoMsg;
            };
            LiquidityProtectionParamsReq: {
                typeUrl: string;
                encode(_: _5.LiquidityProtectionParamsReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.LiquidityProtectionParamsReq;
                fromPartial(_: Partial<_5.LiquidityProtectionParamsReq>): _5.LiquidityProtectionParamsReq;
                fromAmino(_: _5.LiquidityProtectionParamsReqAmino): _5.LiquidityProtectionParamsReq;
                toAmino(_: _5.LiquidityProtectionParamsReq): _5.LiquidityProtectionParamsReqAmino;
                fromAminoMsg(object: _5.LiquidityProtectionParamsReqAminoMsg): _5.LiquidityProtectionParamsReq;
                fromProtoMsg(message: _5.LiquidityProtectionParamsReqProtoMsg): _5.LiquidityProtectionParamsReq;
                toProto(message: _5.LiquidityProtectionParamsReq): Uint8Array;
                toProtoMsg(message: _5.LiquidityProtectionParamsReq): _5.LiquidityProtectionParamsReqProtoMsg;
            };
            LiquidityProtectionParamsRes: {
                typeUrl: string;
                encode(message: _5.LiquidityProtectionParamsRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.LiquidityProtectionParamsRes;
                fromPartial(object: Partial<_5.LiquidityProtectionParamsRes>): _5.LiquidityProtectionParamsRes;
                fromAmino(object: _5.LiquidityProtectionParamsResAmino): _5.LiquidityProtectionParamsRes;
                toAmino(message: _5.LiquidityProtectionParamsRes): _5.LiquidityProtectionParamsResAmino;
                fromAminoMsg(object: _5.LiquidityProtectionParamsResAminoMsg): _5.LiquidityProtectionParamsRes;
                fromProtoMsg(message: _5.LiquidityProtectionParamsResProtoMsg): _5.LiquidityProtectionParamsRes;
                toProto(message: _5.LiquidityProtectionParamsRes): Uint8Array;
                toProtoMsg(message: _5.LiquidityProtectionParamsRes): _5.LiquidityProtectionParamsResProtoMsg;
            };
            ProviderDistributionParamsReq: {
                typeUrl: string;
                encode(_: _5.ProviderDistributionParamsReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.ProviderDistributionParamsReq;
                fromPartial(_: Partial<_5.ProviderDistributionParamsReq>): _5.ProviderDistributionParamsReq;
                fromAmino(_: _5.ProviderDistributionParamsReqAmino): _5.ProviderDistributionParamsReq;
                toAmino(_: _5.ProviderDistributionParamsReq): _5.ProviderDistributionParamsReqAmino;
                fromAminoMsg(object: _5.ProviderDistributionParamsReqAminoMsg): _5.ProviderDistributionParamsReq;
                fromProtoMsg(message: _5.ProviderDistributionParamsReqProtoMsg): _5.ProviderDistributionParamsReq;
                toProto(message: _5.ProviderDistributionParamsReq): Uint8Array;
                toProtoMsg(message: _5.ProviderDistributionParamsReq): _5.ProviderDistributionParamsReqProtoMsg;
            };
            ProviderDistributionParamsRes: {
                typeUrl: string;
                encode(message: _5.ProviderDistributionParamsRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.ProviderDistributionParamsRes;
                fromPartial(object: Partial<_5.ProviderDistributionParamsRes>): _5.ProviderDistributionParamsRes;
                fromAmino(object: _5.ProviderDistributionParamsResAmino): _5.ProviderDistributionParamsRes;
                toAmino(message: _5.ProviderDistributionParamsRes): _5.ProviderDistributionParamsResAmino;
                fromAminoMsg(object: _5.ProviderDistributionParamsResAminoMsg): _5.ProviderDistributionParamsRes;
                fromProtoMsg(message: _5.ProviderDistributionParamsResProtoMsg): _5.ProviderDistributionParamsRes;
                toProto(message: _5.ProviderDistributionParamsRes): Uint8Array;
                toProtoMsg(message: _5.ProviderDistributionParamsRes): _5.ProviderDistributionParamsResProtoMsg;
            };
            SwapFeeParamsReq: {
                typeUrl: string;
                encode(_: _5.SwapFeeParamsReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.SwapFeeParamsReq;
                fromPartial(_: Partial<_5.SwapFeeParamsReq>): _5.SwapFeeParamsReq;
                fromAmino(_: _5.SwapFeeParamsReqAmino): _5.SwapFeeParamsReq;
                toAmino(_: _5.SwapFeeParamsReq): _5.SwapFeeParamsReqAmino;
                fromAminoMsg(object: _5.SwapFeeParamsReqAminoMsg): _5.SwapFeeParamsReq;
                fromProtoMsg(message: _5.SwapFeeParamsReqProtoMsg): _5.SwapFeeParamsReq;
                toProto(message: _5.SwapFeeParamsReq): Uint8Array;
                toProtoMsg(message: _5.SwapFeeParamsReq): _5.SwapFeeParamsReqProtoMsg;
            };
            SwapFeeParamsRes: {
                typeUrl: string;
                encode(message: _5.SwapFeeParamsRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.SwapFeeParamsRes;
                fromPartial(object: Partial<_5.SwapFeeParamsRes>): _5.SwapFeeParamsRes;
                fromAmino(object: _5.SwapFeeParamsResAmino): _5.SwapFeeParamsRes;
                toAmino(message: _5.SwapFeeParamsRes): _5.SwapFeeParamsResAmino;
                fromAminoMsg(object: _5.SwapFeeParamsResAminoMsg): _5.SwapFeeParamsRes;
                fromProtoMsg(message: _5.SwapFeeParamsResProtoMsg): _5.SwapFeeParamsRes;
                toProto(message: _5.SwapFeeParamsRes): Uint8Array;
                toProtoMsg(message: _5.SwapFeeParamsRes): _5.SwapFeeParamsResProtoMsg;
            };
            PoolShareEstimateReq: {
                typeUrl: string;
                encode(message: _5.PoolShareEstimateReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.PoolShareEstimateReq;
                fromPartial(object: Partial<_5.PoolShareEstimateReq>): _5.PoolShareEstimateReq;
                fromAmino(object: _5.PoolShareEstimateReqAmino): _5.PoolShareEstimateReq;
                toAmino(message: _5.PoolShareEstimateReq): _5.PoolShareEstimateReqAmino;
                fromAminoMsg(object: _5.PoolShareEstimateReqAminoMsg): _5.PoolShareEstimateReq;
                fromProtoMsg(message: _5.PoolShareEstimateReqProtoMsg): _5.PoolShareEstimateReq;
                toProto(message: _5.PoolShareEstimateReq): Uint8Array;
                toProtoMsg(message: _5.PoolShareEstimateReq): _5.PoolShareEstimateReqProtoMsg;
            };
            PoolShareEstimateRes: {
                typeUrl: string;
                encode(message: _5.PoolShareEstimateRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.PoolShareEstimateRes;
                fromPartial(object: Partial<_5.PoolShareEstimateRes>): _5.PoolShareEstimateRes;
                fromAmino(object: _5.PoolShareEstimateResAmino): _5.PoolShareEstimateRes;
                toAmino(message: _5.PoolShareEstimateRes): _5.PoolShareEstimateResAmino;
                fromAminoMsg(object: _5.PoolShareEstimateResAminoMsg): _5.PoolShareEstimateRes;
                fromProtoMsg(message: _5.PoolShareEstimateResProtoMsg): _5.PoolShareEstimateRes;
                toProto(message: _5.PoolShareEstimateRes): Uint8Array;
                toProtoMsg(message: _5.PoolShareEstimateRes): _5.PoolShareEstimateResProtoMsg;
            };
            SwapInfo: {
                typeUrl: string;
                encode(message: _5.SwapInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.SwapInfo;
                fromPartial(object: Partial<_5.SwapInfo>): _5.SwapInfo;
                fromAmino(object: _5.SwapInfoAmino): _5.SwapInfo;
                toAmino(message: _5.SwapInfo): _5.SwapInfoAmino;
                fromAminoMsg(object: _5.SwapInfoAminoMsg): _5.SwapInfo;
                fromProtoMsg(message: _5.SwapInfoProtoMsg): _5.SwapInfo;
                toProto(message: _5.SwapInfo): Uint8Array;
                toProtoMsg(message: _5.SwapInfo): _5.SwapInfoProtoMsg;
            };
            RewardsBucketReq: {
                typeUrl: string;
                encode(message: _5.RewardsBucketReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.RewardsBucketReq;
                fromPartial(object: Partial<_5.RewardsBucketReq>): _5.RewardsBucketReq;
                fromAmino(object: _5.RewardsBucketReqAmino): _5.RewardsBucketReq;
                toAmino(message: _5.RewardsBucketReq): _5.RewardsBucketReqAmino;
                fromAminoMsg(object: _5.RewardsBucketReqAminoMsg): _5.RewardsBucketReq;
                fromProtoMsg(message: _5.RewardsBucketReqProtoMsg): _5.RewardsBucketReq;
                toProto(message: _5.RewardsBucketReq): Uint8Array;
                toProtoMsg(message: _5.RewardsBucketReq): _5.RewardsBucketReqProtoMsg;
            };
            RewardsBucketRes: {
                typeUrl: string;
                encode(message: _5.RewardsBucketRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.RewardsBucketRes;
                fromPartial(object: Partial<_5.RewardsBucketRes>): _5.RewardsBucketRes;
                fromAmino(object: _5.RewardsBucketResAmino): _5.RewardsBucketRes;
                toAmino(message: _5.RewardsBucketRes): _5.RewardsBucketResAmino;
                fromAminoMsg(object: _5.RewardsBucketResAminoMsg): _5.RewardsBucketRes;
                fromProtoMsg(message: _5.RewardsBucketResProtoMsg): _5.RewardsBucketRes;
                toProto(message: _5.RewardsBucketRes): Uint8Array;
                toProtoMsg(message: _5.RewardsBucketRes): _5.RewardsBucketResProtoMsg;
            };
            AllRewardsBucketReq: {
                typeUrl: string;
                encode(message: _5.AllRewardsBucketReq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.AllRewardsBucketReq;
                fromPartial(object: Partial<_5.AllRewardsBucketReq>): _5.AllRewardsBucketReq;
                fromAmino(object: _5.AllRewardsBucketReqAmino): _5.AllRewardsBucketReq;
                toAmino(message: _5.AllRewardsBucketReq): _5.AllRewardsBucketReqAmino;
                fromAminoMsg(object: _5.AllRewardsBucketReqAminoMsg): _5.AllRewardsBucketReq;
                fromProtoMsg(message: _5.AllRewardsBucketReqProtoMsg): _5.AllRewardsBucketReq;
                toProto(message: _5.AllRewardsBucketReq): Uint8Array;
                toProtoMsg(message: _5.AllRewardsBucketReq): _5.AllRewardsBucketReqProtoMsg;
            };
            AllRewardsBucketRes: {
                typeUrl: string;
                encode(message: _5.AllRewardsBucketRes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.AllRewardsBucketRes;
                fromPartial(object: Partial<_5.AllRewardsBucketRes>): _5.AllRewardsBucketRes;
                fromAmino(object: _5.AllRewardsBucketResAmino): _5.AllRewardsBucketRes;
                toAmino(message: _5.AllRewardsBucketRes): _5.AllRewardsBucketResAmino;
                fromAminoMsg(object: _5.AllRewardsBucketResAminoMsg): _5.AllRewardsBucketRes;
                fromProtoMsg(message: _5.AllRewardsBucketResProtoMsg): _5.AllRewardsBucketRes;
                toProto(message: _5.AllRewardsBucketRes): Uint8Array;
                toProtoMsg(message: _5.AllRewardsBucketRes): _5.AllRewardsBucketResProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _4.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Params;
                fromPartial(object: Partial<_4.Params>): _4.Params;
                fromAmino(object: _4.ParamsAmino): _4.Params;
                toAmino(message: _4.Params): _4.ParamsAmino;
                fromAminoMsg(object: _4.ParamsAminoMsg): _4.Params;
                fromProtoMsg(message: _4.ParamsProtoMsg): _4.Params;
                toProto(message: _4.Params): Uint8Array;
                toProtoMsg(message: _4.Params): _4.ParamsProtoMsg;
            };
            RewardParams: {
                typeUrl: string;
                encode(message: _4.RewardParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.RewardParams;
                fromPartial(object: Partial<_4.RewardParams>): _4.RewardParams;
                fromAmino(object: _4.RewardParamsAmino): _4.RewardParams;
                toAmino(message: _4.RewardParams): _4.RewardParamsAmino;
                fromAminoMsg(object: _4.RewardParamsAminoMsg): _4.RewardParams;
                fromProtoMsg(message: _4.RewardParamsProtoMsg): _4.RewardParams;
                toProto(message: _4.RewardParams): Uint8Array;
                toProtoMsg(message: _4.RewardParams): _4.RewardParamsProtoMsg;
            };
            PmtpRateParams: {
                typeUrl: string;
                encode(message: _4.PmtpRateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.PmtpRateParams;
                fromPartial(object: Partial<_4.PmtpRateParams>): _4.PmtpRateParams;
                fromAmino(object: _4.PmtpRateParamsAmino): _4.PmtpRateParams;
                toAmino(message: _4.PmtpRateParams): _4.PmtpRateParamsAmino;
                fromAminoMsg(object: _4.PmtpRateParamsAminoMsg): _4.PmtpRateParams;
                fromProtoMsg(message: _4.PmtpRateParamsProtoMsg): _4.PmtpRateParams;
                toProto(message: _4.PmtpRateParams): Uint8Array;
                toProtoMsg(message: _4.PmtpRateParams): _4.PmtpRateParamsProtoMsg;
            };
            PmtpParams: {
                typeUrl: string;
                encode(message: _4.PmtpParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.PmtpParams;
                fromPartial(object: Partial<_4.PmtpParams>): _4.PmtpParams;
                fromAmino(object: _4.PmtpParamsAmino): _4.PmtpParams;
                toAmino(message: _4.PmtpParams): _4.PmtpParamsAmino;
                fromAminoMsg(object: _4.PmtpParamsAminoMsg): _4.PmtpParams;
                fromProtoMsg(message: _4.PmtpParamsProtoMsg): _4.PmtpParams;
                toProto(message: _4.PmtpParams): Uint8Array;
                toProtoMsg(message: _4.PmtpParams): _4.PmtpParamsProtoMsg;
            };
            RewardPeriod: {
                typeUrl: string;
                encode(message: _4.RewardPeriod, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.RewardPeriod;
                fromPartial(object: Partial<_4.RewardPeriod>): _4.RewardPeriod;
                fromAmino(object: _4.RewardPeriodAmino): _4.RewardPeriod;
                toAmino(message: _4.RewardPeriod): _4.RewardPeriodAmino;
                fromAminoMsg(object: _4.RewardPeriodAminoMsg): _4.RewardPeriod;
                fromProtoMsg(message: _4.RewardPeriodProtoMsg): _4.RewardPeriod;
                toProto(message: _4.RewardPeriod): Uint8Array;
                toProtoMsg(message: _4.RewardPeriod): _4.RewardPeriodProtoMsg;
            };
            PoolMultiplier: {
                typeUrl: string;
                encode(message: _4.PoolMultiplier, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.PoolMultiplier;
                fromPartial(object: Partial<_4.PoolMultiplier>): _4.PoolMultiplier;
                fromAmino(object: _4.PoolMultiplierAmino): _4.PoolMultiplier;
                toAmino(message: _4.PoolMultiplier): _4.PoolMultiplierAmino;
                fromAminoMsg(object: _4.PoolMultiplierAminoMsg): _4.PoolMultiplier;
                fromProtoMsg(message: _4.PoolMultiplierProtoMsg): _4.PoolMultiplier;
                toProto(message: _4.PoolMultiplier): Uint8Array;
                toProtoMsg(message: _4.PoolMultiplier): _4.PoolMultiplierProtoMsg;
            };
            LiquidityProtectionParams: {
                typeUrl: string;
                encode(message: _4.LiquidityProtectionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.LiquidityProtectionParams;
                fromPartial(object: Partial<_4.LiquidityProtectionParams>): _4.LiquidityProtectionParams;
                fromAmino(object: _4.LiquidityProtectionParamsAmino): _4.LiquidityProtectionParams;
                toAmino(message: _4.LiquidityProtectionParams): _4.LiquidityProtectionParamsAmino;
                fromAminoMsg(object: _4.LiquidityProtectionParamsAminoMsg): _4.LiquidityProtectionParams;
                fromProtoMsg(message: _4.LiquidityProtectionParamsProtoMsg): _4.LiquidityProtectionParams;
                toProto(message: _4.LiquidityProtectionParams): Uint8Array;
                toProtoMsg(message: _4.LiquidityProtectionParams): _4.LiquidityProtectionParamsProtoMsg;
            };
            LiquidityProtectionRateParams: {
                typeUrl: string;
                encode(message: _4.LiquidityProtectionRateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.LiquidityProtectionRateParams;
                fromPartial(object: Partial<_4.LiquidityProtectionRateParams>): _4.LiquidityProtectionRateParams;
                fromAmino(object: _4.LiquidityProtectionRateParamsAmino): _4.LiquidityProtectionRateParams;
                toAmino(message: _4.LiquidityProtectionRateParams): _4.LiquidityProtectionRateParamsAmino;
                fromAminoMsg(object: _4.LiquidityProtectionRateParamsAminoMsg): _4.LiquidityProtectionRateParams;
                fromProtoMsg(message: _4.LiquidityProtectionRateParamsProtoMsg): _4.LiquidityProtectionRateParams;
                toProto(message: _4.LiquidityProtectionRateParams): Uint8Array;
                toProtoMsg(message: _4.LiquidityProtectionRateParams): _4.LiquidityProtectionRateParamsProtoMsg;
            };
            ProviderDistributionPeriod: {
                typeUrl: string;
                encode(message: _4.ProviderDistributionPeriod, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ProviderDistributionPeriod;
                fromPartial(object: Partial<_4.ProviderDistributionPeriod>): _4.ProviderDistributionPeriod;
                fromAmino(object: _4.ProviderDistributionPeriodAmino): _4.ProviderDistributionPeriod;
                toAmino(message: _4.ProviderDistributionPeriod): _4.ProviderDistributionPeriodAmino;
                fromAminoMsg(object: _4.ProviderDistributionPeriodAminoMsg): _4.ProviderDistributionPeriod;
                fromProtoMsg(message: _4.ProviderDistributionPeriodProtoMsg): _4.ProviderDistributionPeriod;
                toProto(message: _4.ProviderDistributionPeriod): Uint8Array;
                toProtoMsg(message: _4.ProviderDistributionPeriod): _4.ProviderDistributionPeriodProtoMsg;
            };
            ProviderDistributionParams: {
                typeUrl: string;
                encode(message: _4.ProviderDistributionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ProviderDistributionParams;
                fromPartial(object: Partial<_4.ProviderDistributionParams>): _4.ProviderDistributionParams;
                fromAmino(object: _4.ProviderDistributionParamsAmino): _4.ProviderDistributionParams;
                toAmino(message: _4.ProviderDistributionParams): _4.ProviderDistributionParamsAmino;
                fromAminoMsg(object: _4.ProviderDistributionParamsAminoMsg): _4.ProviderDistributionParams;
                fromProtoMsg(message: _4.ProviderDistributionParamsProtoMsg): _4.ProviderDistributionParams;
                toProto(message: _4.ProviderDistributionParams): Uint8Array;
                toProtoMsg(message: _4.ProviderDistributionParams): _4.ProviderDistributionParamsProtoMsg;
            };
            SwapFeeParams: {
                typeUrl: string;
                encode(message: _4.SwapFeeParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.SwapFeeParams;
                fromPartial(object: Partial<_4.SwapFeeParams>): _4.SwapFeeParams;
                fromAmino(object: _4.SwapFeeParamsAmino): _4.SwapFeeParams;
                toAmino(message: _4.SwapFeeParams): _4.SwapFeeParamsAmino;
                fromAminoMsg(object: _4.SwapFeeParamsAminoMsg): _4.SwapFeeParams;
                fromProtoMsg(message: _4.SwapFeeParamsProtoMsg): _4.SwapFeeParams;
                toProto(message: _4.SwapFeeParams): Uint8Array;
                toProtoMsg(message: _4.SwapFeeParams): _4.SwapFeeParamsProtoMsg;
            };
            SwapFeeTokenParams: {
                typeUrl: string;
                encode(message: _4.SwapFeeTokenParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.SwapFeeTokenParams;
                fromPartial(object: Partial<_4.SwapFeeTokenParams>): _4.SwapFeeTokenParams;
                fromAmino(object: _4.SwapFeeTokenParamsAmino): _4.SwapFeeTokenParams;
                toAmino(message: _4.SwapFeeTokenParams): _4.SwapFeeTokenParamsAmino;
                fromAminoMsg(object: _4.SwapFeeTokenParamsAminoMsg): _4.SwapFeeTokenParams;
                fromProtoMsg(message: _4.SwapFeeTokenParamsProtoMsg): _4.SwapFeeTokenParams;
                toProto(message: _4.SwapFeeTokenParams): Uint8Array;
                toProtoMsg(message: _4.SwapFeeTokenParams): _4.SwapFeeTokenParamsProtoMsg;
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
        };
    }
    namespace dispensation {
        const v1: {
            MsgClientImpl: typeof _145.MsgClientImpl;
            QueryClientImpl: typeof _138.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                allDistributions(request?: _9.QueryAllDistributionsRequest): Promise<_9.QueryAllDistributionsResponse>;
                recordsByDistributionName(request: _9.QueryRecordsByDistributionNameRequest): Promise<_9.QueryRecordsByDistributionNameResponse>;
                recordsByRecipient(request: _9.QueryRecordsByRecipientAddrRequest): Promise<_9.QueryRecordsByRecipientAddrResponse>;
                claimsByType(request: _9.QueryClaimsByTypeRequest): Promise<_9.QueryClaimsResponse>;
            };
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createDistribution(value: _10.MsgCreateDistribution): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createUserClaim(value: _10.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    runDistribution(value: _10.MsgRunDistribution): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDistribution(value: _10.MsgCreateDistribution): {
                        typeUrl: string;
                        value: _10.MsgCreateDistribution;
                    };
                    createUserClaim(value: _10.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: _10.MsgCreateUserClaim;
                    };
                    runDistribution(value: _10.MsgRunDistribution): {
                        typeUrl: string;
                        value: _10.MsgRunDistribution;
                    };
                };
                fromJSON: {
                    createDistribution(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateDistribution;
                    };
                    createUserClaim(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateUserClaim;
                    };
                    runDistribution(value: any): {
                        typeUrl: string;
                        value: _10.MsgRunDistribution;
                    };
                };
                fromPartial: {
                    createDistribution(value: _10.MsgCreateDistribution): {
                        typeUrl: string;
                        value: _10.MsgCreateDistribution;
                    };
                    createUserClaim(value: _10.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: _10.MsgCreateUserClaim;
                    };
                    runDistribution(value: _10.MsgRunDistribution): {
                        typeUrl: string;
                        value: _10.MsgRunDistribution;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.dispensation.v1.MsgCreateDistribution": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCreateDistribution) => _10.MsgCreateDistributionAmino;
                    fromAmino: (object: _10.MsgCreateDistributionAmino) => _10.MsgCreateDistribution;
                };
                "/sifnode.dispensation.v1.MsgCreateUserClaim": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCreateUserClaim) => _10.MsgCreateUserClaimAmino;
                    fromAmino: (object: _10.MsgCreateUserClaimAmino) => _10.MsgCreateUserClaim;
                };
                "/sifnode.dispensation.v1.MsgRunDistribution": {
                    aminoType: string;
                    toAmino: (message: _10.MsgRunDistribution) => _10.MsgRunDistributionAmino;
                    fromAmino: (object: _10.MsgRunDistributionAmino) => _10.MsgRunDistribution;
                };
            };
            distributionTypeFromJSON(object: any): _11.DistributionType;
            distributionTypeToJSON(object: _11.DistributionType): string;
            distributionStatusFromJSON(object: any): _11.DistributionStatus;
            distributionStatusToJSON(object: _11.DistributionStatus): string;
            DistributionType: typeof _11.DistributionType;
            DistributionTypeSDKType: typeof _11.DistributionType;
            DistributionTypeAmino: typeof _11.DistributionType;
            DistributionStatus: typeof _11.DistributionStatus;
            DistributionStatusSDKType: typeof _11.DistributionStatus;
            DistributionStatusAmino: typeof _11.DistributionStatus;
            GenesisState: {
                typeUrl: string;
                encode(message: _11.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
                fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
                toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
                fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
                fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
                toProto(message: _11.GenesisState): Uint8Array;
                toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
            };
            DistributionRecord: {
                typeUrl: string;
                encode(message: _11.DistributionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.DistributionRecord;
                fromPartial(object: Partial<_11.DistributionRecord>): _11.DistributionRecord;
                fromAmino(object: _11.DistributionRecordAmino): _11.DistributionRecord;
                toAmino(message: _11.DistributionRecord): _11.DistributionRecordAmino;
                fromAminoMsg(object: _11.DistributionRecordAminoMsg): _11.DistributionRecord;
                fromProtoMsg(message: _11.DistributionRecordProtoMsg): _11.DistributionRecord;
                toProto(message: _11.DistributionRecord): Uint8Array;
                toProtoMsg(message: _11.DistributionRecord): _11.DistributionRecordProtoMsg;
            };
            DistributionRecords: {
                typeUrl: string;
                encode(message: _11.DistributionRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.DistributionRecords;
                fromPartial(object: Partial<_11.DistributionRecords>): _11.DistributionRecords;
                fromAmino(object: _11.DistributionRecordsAmino): _11.DistributionRecords;
                toAmino(message: _11.DistributionRecords): _11.DistributionRecordsAmino;
                fromAminoMsg(object: _11.DistributionRecordsAminoMsg): _11.DistributionRecords;
                fromProtoMsg(message: _11.DistributionRecordsProtoMsg): _11.DistributionRecords;
                toProto(message: _11.DistributionRecords): Uint8Array;
                toProtoMsg(message: _11.DistributionRecords): _11.DistributionRecordsProtoMsg;
            };
            Distributions: {
                typeUrl: string;
                encode(message: _11.Distributions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Distributions;
                fromPartial(object: Partial<_11.Distributions>): _11.Distributions;
                fromAmino(object: _11.DistributionsAmino): _11.Distributions;
                toAmino(message: _11.Distributions): _11.DistributionsAmino;
                fromAminoMsg(object: _11.DistributionsAminoMsg): _11.Distributions;
                fromProtoMsg(message: _11.DistributionsProtoMsg): _11.Distributions;
                toProto(message: _11.Distributions): Uint8Array;
                toProtoMsg(message: _11.Distributions): _11.DistributionsProtoMsg;
            };
            Distribution: {
                typeUrl: string;
                encode(message: _11.Distribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Distribution;
                fromPartial(object: Partial<_11.Distribution>): _11.Distribution;
                fromAmino(object: _11.DistributionAmino): _11.Distribution;
                toAmino(message: _11.Distribution): _11.DistributionAmino;
                fromAminoMsg(object: _11.DistributionAminoMsg): _11.Distribution;
                fromProtoMsg(message: _11.DistributionProtoMsg): _11.Distribution;
                toProto(message: _11.Distribution): Uint8Array;
                toProtoMsg(message: _11.Distribution): _11.DistributionProtoMsg;
            };
            UserClaim: {
                typeUrl: string;
                encode(message: _11.UserClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.UserClaim;
                fromPartial(object: Partial<_11.UserClaim>): _11.UserClaim;
                fromAmino(object: _11.UserClaimAmino): _11.UserClaim;
                toAmino(message: _11.UserClaim): _11.UserClaimAmino;
                fromAminoMsg(object: _11.UserClaimAminoMsg): _11.UserClaim;
                fromProtoMsg(message: _11.UserClaimProtoMsg): _11.UserClaim;
                toProto(message: _11.UserClaim): Uint8Array;
                toProtoMsg(message: _11.UserClaim): _11.UserClaimProtoMsg;
            };
            UserClaims: {
                typeUrl: string;
                encode(message: _11.UserClaims, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.UserClaims;
                fromPartial(object: Partial<_11.UserClaims>): _11.UserClaims;
                fromAmino(object: _11.UserClaimsAmino): _11.UserClaims;
                toAmino(message: _11.UserClaims): _11.UserClaimsAmino;
                fromAminoMsg(object: _11.UserClaimsAminoMsg): _11.UserClaims;
                fromProtoMsg(message: _11.UserClaimsProtoMsg): _11.UserClaims;
                toProto(message: _11.UserClaims): Uint8Array;
                toProtoMsg(message: _11.UserClaims): _11.UserClaimsProtoMsg;
            };
            MintController: {
                typeUrl: string;
                encode(message: _11.MintController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MintController;
                fromPartial(object: Partial<_11.MintController>): _11.MintController;
                fromAmino(object: _11.MintControllerAmino): _11.MintController;
                toAmino(message: _11.MintController): _11.MintControllerAmino;
                fromAminoMsg(object: _11.MintControllerAminoMsg): _11.MintController;
                fromProtoMsg(message: _11.MintControllerProtoMsg): _11.MintController;
                toProto(message: _11.MintController): Uint8Array;
                toProtoMsg(message: _11.MintController): _11.MintControllerProtoMsg;
            };
            MsgCreateDistribution: {
                typeUrl: string;
                encode(message: _10.MsgCreateDistribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateDistribution;
                fromPartial(object: Partial<_10.MsgCreateDistribution>): _10.MsgCreateDistribution;
                fromAmino(object: _10.MsgCreateDistributionAmino): _10.MsgCreateDistribution;
                toAmino(message: _10.MsgCreateDistribution): _10.MsgCreateDistributionAmino;
                fromAminoMsg(object: _10.MsgCreateDistributionAminoMsg): _10.MsgCreateDistribution;
                fromProtoMsg(message: _10.MsgCreateDistributionProtoMsg): _10.MsgCreateDistribution;
                toProto(message: _10.MsgCreateDistribution): Uint8Array;
                toProtoMsg(message: _10.MsgCreateDistribution): _10.MsgCreateDistributionProtoMsg;
            };
            MsgCreateDistributionResponse: {
                typeUrl: string;
                encode(_: _10.MsgCreateDistributionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgCreateDistributionResponse;
                fromPartial(_: Partial<_10.MsgCreateDistributionResponse>): _10.MsgCreateDistributionResponse;
                fromAmino(_: _10.MsgCreateDistributionResponseAmino): _10.MsgCreateDistributionResponse;
                toAmino(_: _10.MsgCreateDistributionResponse): _10.MsgCreateDistributionResponseAmino;
                fromAminoMsg(object: _10.MsgCreateDistributionResponseAminoMsg): _10.MsgCreateDistributionResponse;
                fromProtoMsg(message: _10.MsgCreateDistributionResponseProtoMsg): _10.MsgCreateDistributionResponse;
                toProto(message: _10.MsgCreateDistributionResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCreateDistributionResponse): _10.MsgCreateDistributionResponseProtoMsg;
            };
            MsgCreateClaimResponse: {
                typeUrl: string;
                encode(_: _10.MsgCreateClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgCreateClaimResponse;
                fromPartial(_: Partial<_10.MsgCreateClaimResponse>): _10.MsgCreateClaimResponse;
                fromAmino(_: _10.MsgCreateClaimResponseAmino): _10.MsgCreateClaimResponse;
                toAmino(_: _10.MsgCreateClaimResponse): _10.MsgCreateClaimResponseAmino;
                fromAminoMsg(object: _10.MsgCreateClaimResponseAminoMsg): _10.MsgCreateClaimResponse;
                fromProtoMsg(message: _10.MsgCreateClaimResponseProtoMsg): _10.MsgCreateClaimResponse;
                toProto(message: _10.MsgCreateClaimResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCreateClaimResponse): _10.MsgCreateClaimResponseProtoMsg;
            };
            MsgRunDistributionResponse: {
                typeUrl: string;
                encode(_: _10.MsgRunDistributionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgRunDistributionResponse;
                fromPartial(_: Partial<_10.MsgRunDistributionResponse>): _10.MsgRunDistributionResponse;
                fromAmino(_: _10.MsgRunDistributionResponseAmino): _10.MsgRunDistributionResponse;
                toAmino(_: _10.MsgRunDistributionResponse): _10.MsgRunDistributionResponseAmino;
                fromAminoMsg(object: _10.MsgRunDistributionResponseAminoMsg): _10.MsgRunDistributionResponse;
                fromProtoMsg(message: _10.MsgRunDistributionResponseProtoMsg): _10.MsgRunDistributionResponse;
                toProto(message: _10.MsgRunDistributionResponse): Uint8Array;
                toProtoMsg(message: _10.MsgRunDistributionResponse): _10.MsgRunDistributionResponseProtoMsg;
            };
            MsgCreateUserClaim: {
                typeUrl: string;
                encode(message: _10.MsgCreateUserClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateUserClaim;
                fromPartial(object: Partial<_10.MsgCreateUserClaim>): _10.MsgCreateUserClaim;
                fromAmino(object: _10.MsgCreateUserClaimAmino): _10.MsgCreateUserClaim;
                toAmino(message: _10.MsgCreateUserClaim): _10.MsgCreateUserClaimAmino;
                fromAminoMsg(object: _10.MsgCreateUserClaimAminoMsg): _10.MsgCreateUserClaim;
                fromProtoMsg(message: _10.MsgCreateUserClaimProtoMsg): _10.MsgCreateUserClaim;
                toProto(message: _10.MsgCreateUserClaim): Uint8Array;
                toProtoMsg(message: _10.MsgCreateUserClaim): _10.MsgCreateUserClaimProtoMsg;
            };
            MsgRunDistribution: {
                typeUrl: string;
                encode(message: _10.MsgRunDistribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgRunDistribution;
                fromPartial(object: Partial<_10.MsgRunDistribution>): _10.MsgRunDistribution;
                fromAmino(object: _10.MsgRunDistributionAmino): _10.MsgRunDistribution;
                toAmino(message: _10.MsgRunDistribution): _10.MsgRunDistributionAmino;
                fromAminoMsg(object: _10.MsgRunDistributionAminoMsg): _10.MsgRunDistribution;
                fromProtoMsg(message: _10.MsgRunDistributionProtoMsg): _10.MsgRunDistribution;
                toProto(message: _10.MsgRunDistribution): Uint8Array;
                toProtoMsg(message: _10.MsgRunDistribution): _10.MsgRunDistributionProtoMsg;
            };
            QueryAllDistributionsRequest: {
                typeUrl: string;
                encode(_: _9.QueryAllDistributionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryAllDistributionsRequest;
                fromPartial(_: Partial<_9.QueryAllDistributionsRequest>): _9.QueryAllDistributionsRequest;
                fromAmino(_: _9.QueryAllDistributionsRequestAmino): _9.QueryAllDistributionsRequest;
                toAmino(_: _9.QueryAllDistributionsRequest): _9.QueryAllDistributionsRequestAmino;
                fromAminoMsg(object: _9.QueryAllDistributionsRequestAminoMsg): _9.QueryAllDistributionsRequest;
                fromProtoMsg(message: _9.QueryAllDistributionsRequestProtoMsg): _9.QueryAllDistributionsRequest;
                toProto(message: _9.QueryAllDistributionsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAllDistributionsRequest): _9.QueryAllDistributionsRequestProtoMsg;
            };
            QueryAllDistributionsResponse: {
                typeUrl: string;
                encode(message: _9.QueryAllDistributionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAllDistributionsResponse;
                fromPartial(object: Partial<_9.QueryAllDistributionsResponse>): _9.QueryAllDistributionsResponse;
                fromAmino(object: _9.QueryAllDistributionsResponseAmino): _9.QueryAllDistributionsResponse;
                toAmino(message: _9.QueryAllDistributionsResponse): _9.QueryAllDistributionsResponseAmino;
                fromAminoMsg(object: _9.QueryAllDistributionsResponseAminoMsg): _9.QueryAllDistributionsResponse;
                fromProtoMsg(message: _9.QueryAllDistributionsResponseProtoMsg): _9.QueryAllDistributionsResponse;
                toProto(message: _9.QueryAllDistributionsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAllDistributionsResponse): _9.QueryAllDistributionsResponseProtoMsg;
            };
            QueryRecordsByDistributionNameRequest: {
                typeUrl: string;
                encode(message: _9.QueryRecordsByDistributionNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryRecordsByDistributionNameRequest;
                fromPartial(object: Partial<_9.QueryRecordsByDistributionNameRequest>): _9.QueryRecordsByDistributionNameRequest;
                fromAmino(object: _9.QueryRecordsByDistributionNameRequestAmino): _9.QueryRecordsByDistributionNameRequest;
                toAmino(message: _9.QueryRecordsByDistributionNameRequest): _9.QueryRecordsByDistributionNameRequestAmino;
                fromAminoMsg(object: _9.QueryRecordsByDistributionNameRequestAminoMsg): _9.QueryRecordsByDistributionNameRequest;
                fromProtoMsg(message: _9.QueryRecordsByDistributionNameRequestProtoMsg): _9.QueryRecordsByDistributionNameRequest;
                toProto(message: _9.QueryRecordsByDistributionNameRequest): Uint8Array;
                toProtoMsg(message: _9.QueryRecordsByDistributionNameRequest): _9.QueryRecordsByDistributionNameRequestProtoMsg;
            };
            QueryRecordsByDistributionNameResponse: {
                typeUrl: string;
                encode(message: _9.QueryRecordsByDistributionNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryRecordsByDistributionNameResponse;
                fromPartial(object: Partial<_9.QueryRecordsByDistributionNameResponse>): _9.QueryRecordsByDistributionNameResponse;
                fromAmino(object: _9.QueryRecordsByDistributionNameResponseAmino): _9.QueryRecordsByDistributionNameResponse;
                toAmino(message: _9.QueryRecordsByDistributionNameResponse): _9.QueryRecordsByDistributionNameResponseAmino;
                fromAminoMsg(object: _9.QueryRecordsByDistributionNameResponseAminoMsg): _9.QueryRecordsByDistributionNameResponse;
                fromProtoMsg(message: _9.QueryRecordsByDistributionNameResponseProtoMsg): _9.QueryRecordsByDistributionNameResponse;
                toProto(message: _9.QueryRecordsByDistributionNameResponse): Uint8Array;
                toProtoMsg(message: _9.QueryRecordsByDistributionNameResponse): _9.QueryRecordsByDistributionNameResponseProtoMsg;
            };
            QueryRecordsByRecipientAddrRequest: {
                typeUrl: string;
                encode(message: _9.QueryRecordsByRecipientAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryRecordsByRecipientAddrRequest;
                fromPartial(object: Partial<_9.QueryRecordsByRecipientAddrRequest>): _9.QueryRecordsByRecipientAddrRequest;
                fromAmino(object: _9.QueryRecordsByRecipientAddrRequestAmino): _9.QueryRecordsByRecipientAddrRequest;
                toAmino(message: _9.QueryRecordsByRecipientAddrRequest): _9.QueryRecordsByRecipientAddrRequestAmino;
                fromAminoMsg(object: _9.QueryRecordsByRecipientAddrRequestAminoMsg): _9.QueryRecordsByRecipientAddrRequest;
                fromProtoMsg(message: _9.QueryRecordsByRecipientAddrRequestProtoMsg): _9.QueryRecordsByRecipientAddrRequest;
                toProto(message: _9.QueryRecordsByRecipientAddrRequest): Uint8Array;
                toProtoMsg(message: _9.QueryRecordsByRecipientAddrRequest): _9.QueryRecordsByRecipientAddrRequestProtoMsg;
            };
            QueryRecordsByRecipientAddrResponse: {
                typeUrl: string;
                encode(message: _9.QueryRecordsByRecipientAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryRecordsByRecipientAddrResponse;
                fromPartial(object: Partial<_9.QueryRecordsByRecipientAddrResponse>): _9.QueryRecordsByRecipientAddrResponse;
                fromAmino(object: _9.QueryRecordsByRecipientAddrResponseAmino): _9.QueryRecordsByRecipientAddrResponse;
                toAmino(message: _9.QueryRecordsByRecipientAddrResponse): _9.QueryRecordsByRecipientAddrResponseAmino;
                fromAminoMsg(object: _9.QueryRecordsByRecipientAddrResponseAminoMsg): _9.QueryRecordsByRecipientAddrResponse;
                fromProtoMsg(message: _9.QueryRecordsByRecipientAddrResponseProtoMsg): _9.QueryRecordsByRecipientAddrResponse;
                toProto(message: _9.QueryRecordsByRecipientAddrResponse): Uint8Array;
                toProtoMsg(message: _9.QueryRecordsByRecipientAddrResponse): _9.QueryRecordsByRecipientAddrResponseProtoMsg;
            };
            QueryClaimsByTypeRequest: {
                typeUrl: string;
                encode(message: _9.QueryClaimsByTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryClaimsByTypeRequest;
                fromPartial(object: Partial<_9.QueryClaimsByTypeRequest>): _9.QueryClaimsByTypeRequest;
                fromAmino(object: _9.QueryClaimsByTypeRequestAmino): _9.QueryClaimsByTypeRequest;
                toAmino(message: _9.QueryClaimsByTypeRequest): _9.QueryClaimsByTypeRequestAmino;
                fromAminoMsg(object: _9.QueryClaimsByTypeRequestAminoMsg): _9.QueryClaimsByTypeRequest;
                fromProtoMsg(message: _9.QueryClaimsByTypeRequestProtoMsg): _9.QueryClaimsByTypeRequest;
                toProto(message: _9.QueryClaimsByTypeRequest): Uint8Array;
                toProtoMsg(message: _9.QueryClaimsByTypeRequest): _9.QueryClaimsByTypeRequestProtoMsg;
            };
            QueryClaimsResponse: {
                typeUrl: string;
                encode(message: _9.QueryClaimsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryClaimsResponse;
                fromPartial(object: Partial<_9.QueryClaimsResponse>): _9.QueryClaimsResponse;
                fromAmino(object: _9.QueryClaimsResponseAmino): _9.QueryClaimsResponse;
                toAmino(message: _9.QueryClaimsResponse): _9.QueryClaimsResponseAmino;
                fromAminoMsg(object: _9.QueryClaimsResponseAminoMsg): _9.QueryClaimsResponse;
                fromProtoMsg(message: _9.QueryClaimsResponseProtoMsg): _9.QueryClaimsResponse;
                toProto(message: _9.QueryClaimsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryClaimsResponse): _9.QueryClaimsResponseProtoMsg;
            };
        };
    }
    namespace epochs {
        const v1: {
            QueryClientImpl: typeof _139.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                epochInfos(request?: _13.QueryEpochsInfoRequest): Promise<_13.QueryEpochsInfoResponse>;
                currentEpoch(request: _13.QueryCurrentEpochRequest): Promise<_13.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _133.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(message: _13.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryEpochsInfoRequest;
                fromPartial(object: Partial<_13.QueryEpochsInfoRequest>): _13.QueryEpochsInfoRequest;
                fromAmino(object: _13.QueryEpochsInfoRequestAmino): _13.QueryEpochsInfoRequest;
                toAmino(message: _13.QueryEpochsInfoRequest): _13.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _13.QueryEpochsInfoRequestAminoMsg): _13.QueryEpochsInfoRequest;
                fromProtoMsg(message: _13.QueryEpochsInfoRequestProtoMsg): _13.QueryEpochsInfoRequest;
                toProto(message: _13.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _13.QueryEpochsInfoRequest): _13.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _13.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_13.QueryEpochsInfoResponse>): _13.QueryEpochsInfoResponse;
                fromAmino(object: _13.QueryEpochsInfoResponseAmino): _13.QueryEpochsInfoResponse;
                toAmino(message: _13.QueryEpochsInfoResponse): _13.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _13.QueryEpochsInfoResponseAminoMsg): _13.QueryEpochsInfoResponse;
                fromProtoMsg(message: _13.QueryEpochsInfoResponseProtoMsg): _13.QueryEpochsInfoResponse;
                toProto(message: _13.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _13.QueryEpochsInfoResponse): _13.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _13.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_13.QueryCurrentEpochRequest>): _13.QueryCurrentEpochRequest;
                fromAmino(object: _13.QueryCurrentEpochRequestAmino): _13.QueryCurrentEpochRequest;
                toAmino(message: _13.QueryCurrentEpochRequest): _13.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _13.QueryCurrentEpochRequestAminoMsg): _13.QueryCurrentEpochRequest;
                fromProtoMsg(message: _13.QueryCurrentEpochRequestProtoMsg): _13.QueryCurrentEpochRequest;
                toProto(message: _13.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _13.QueryCurrentEpochRequest): _13.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _13.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_13.QueryCurrentEpochResponse>): _13.QueryCurrentEpochResponse;
                fromAmino(object: _13.QueryCurrentEpochResponseAmino): _13.QueryCurrentEpochResponse;
                toAmino(message: _13.QueryCurrentEpochResponse): _13.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _13.QueryCurrentEpochResponseAminoMsg): _13.QueryCurrentEpochResponse;
                fromProtoMsg(message: _13.QueryCurrentEpochResponseProtoMsg): _13.QueryCurrentEpochResponse;
                toProto(message: _13.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _13.QueryCurrentEpochResponse): _13.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _12.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EpochInfo;
                fromPartial(object: Partial<_12.EpochInfo>): _12.EpochInfo;
                fromAmino(object: _12.EpochInfoAmino): _12.EpochInfo;
                toAmino(message: _12.EpochInfo): _12.EpochInfoAmino;
                fromAminoMsg(object: _12.EpochInfoAminoMsg): _12.EpochInfo;
                fromProtoMsg(message: _12.EpochInfoProtoMsg): _12.EpochInfo;
                toProto(message: _12.EpochInfo): Uint8Array;
                toProtoMsg(message: _12.EpochInfo): _12.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _12.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.GenesisState;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
                fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
                toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
                fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
                fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
                toProto(message: _12.GenesisState): Uint8Array;
                toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
            };
        };
    }
    namespace ethbridge {
        const v1: {
            MsgClientImpl: typeof _146.MsgClientImpl;
            QueryClientImpl: typeof _140.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                ethProphecy(request: _15.QueryEthProphecyRequest): Promise<_15.QueryEthProphecyResponse>;
                getBlacklist(request?: _15.QueryBlacklistRequest): Promise<_15.QueryBlacklistResponse>;
                getPauseStatus(request?: _15.QueryPauseRequest): Promise<_15.QueryPauseResponse>;
            };
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    lock(value: _16.MsgLock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _16.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createEthBridgeClaim(value: _16.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateWhiteListValidator(value: _16.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateCethReceiverAccount(value: _16.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    rescueCeth(value: _16.MsgRescueCeth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBlacklist(value: _16.MsgSetBlacklist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPause(value: _16.MsgPause): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    lock(value: _16.MsgLock): {
                        typeUrl: string;
                        value: _16.MsgLock;
                    };
                    burn(value: _16.MsgBurn): {
                        typeUrl: string;
                        value: _16.MsgBurn;
                    };
                    createEthBridgeClaim(value: _16.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: _16.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: _16.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: _16.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: _16.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: _16.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: _16.MsgRescueCeth): {
                        typeUrl: string;
                        value: _16.MsgRescueCeth;
                    };
                    setBlacklist(value: _16.MsgSetBlacklist): {
                        typeUrl: string;
                        value: _16.MsgSetBlacklist;
                    };
                    setPause(value: _16.MsgPause): {
                        typeUrl: string;
                        value: _16.MsgPause;
                    };
                };
                fromJSON: {
                    lock(value: any): {
                        typeUrl: string;
                        value: _16.MsgLock;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _16.MsgBurn;
                    };
                    createEthBridgeClaim(value: any): {
                        typeUrl: string;
                        value: _16.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: any): {
                        typeUrl: string;
                        value: _16.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: any): {
                        typeUrl: string;
                        value: _16.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: any): {
                        typeUrl: string;
                        value: _16.MsgRescueCeth;
                    };
                    setBlacklist(value: any): {
                        typeUrl: string;
                        value: _16.MsgSetBlacklist;
                    };
                    setPause(value: any): {
                        typeUrl: string;
                        value: _16.MsgPause;
                    };
                };
                fromPartial: {
                    lock(value: _16.MsgLock): {
                        typeUrl: string;
                        value: _16.MsgLock;
                    };
                    burn(value: _16.MsgBurn): {
                        typeUrl: string;
                        value: _16.MsgBurn;
                    };
                    createEthBridgeClaim(value: _16.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: _16.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: _16.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: _16.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: _16.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: _16.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: _16.MsgRescueCeth): {
                        typeUrl: string;
                        value: _16.MsgRescueCeth;
                    };
                    setBlacklist(value: _16.MsgSetBlacklist): {
                        typeUrl: string;
                        value: _16.MsgSetBlacklist;
                    };
                    setPause(value: _16.MsgPause): {
                        typeUrl: string;
                        value: _16.MsgPause;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.ethbridge.v1.MsgLock": {
                    aminoType: string;
                    toAmino: (message: _16.MsgLock) => _16.MsgLockAmino;
                    fromAmino: (object: _16.MsgLockAmino) => _16.MsgLock;
                };
                "/sifnode.ethbridge.v1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _16.MsgBurn) => _16.MsgBurnAmino;
                    fromAmino: (object: _16.MsgBurnAmino) => _16.MsgBurn;
                };
                "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim": {
                    aminoType: string;
                    toAmino: (message: _16.MsgCreateEthBridgeClaim) => _16.MsgCreateEthBridgeClaimAmino;
                    fromAmino: (object: _16.MsgCreateEthBridgeClaimAmino) => _16.MsgCreateEthBridgeClaim;
                };
                "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator": {
                    aminoType: string;
                    toAmino: (message: _16.MsgUpdateWhiteListValidator) => _16.MsgUpdateWhiteListValidatorAmino;
                    fromAmino: (object: _16.MsgUpdateWhiteListValidatorAmino) => _16.MsgUpdateWhiteListValidator;
                };
                "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount": {
                    aminoType: string;
                    toAmino: (message: _16.MsgUpdateCethReceiverAccount) => _16.MsgUpdateCethReceiverAccountAmino;
                    fromAmino: (object: _16.MsgUpdateCethReceiverAccountAmino) => _16.MsgUpdateCethReceiverAccount;
                };
                "/sifnode.ethbridge.v1.MsgRescueCeth": {
                    aminoType: string;
                    toAmino: (message: _16.MsgRescueCeth) => _16.MsgRescueCethAmino;
                    fromAmino: (object: _16.MsgRescueCethAmino) => _16.MsgRescueCeth;
                };
                "/sifnode.ethbridge.v1.MsgSetBlacklist": {
                    aminoType: string;
                    toAmino: (message: _16.MsgSetBlacklist) => _16.MsgSetBlacklistAmino;
                    fromAmino: (object: _16.MsgSetBlacklistAmino) => _16.MsgSetBlacklist;
                };
                "/sifnode.ethbridge.v1.MsgPause": {
                    aminoType: string;
                    toAmino: (message: _16.MsgPause) => _16.MsgPauseAmino;
                    fromAmino: (object: _16.MsgPauseAmino) => _16.MsgPause;
                };
            };
            claimTypeFromJSON(object: any): _17.ClaimType;
            claimTypeToJSON(object: _17.ClaimType): string;
            ClaimType: typeof _17.ClaimType;
            ClaimTypeSDKType: typeof _17.ClaimType;
            ClaimTypeAmino: typeof _17.ClaimType;
            EthBridgeClaim: {
                typeUrl: string;
                encode(message: _17.EthBridgeClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EthBridgeClaim;
                fromPartial(object: Partial<_17.EthBridgeClaim>): _17.EthBridgeClaim;
                fromAmino(object: _17.EthBridgeClaimAmino): _17.EthBridgeClaim;
                toAmino(message: _17.EthBridgeClaim): _17.EthBridgeClaimAmino;
                fromAminoMsg(object: _17.EthBridgeClaimAminoMsg): _17.EthBridgeClaim;
                fromProtoMsg(message: _17.EthBridgeClaimProtoMsg): _17.EthBridgeClaim;
                toProto(message: _17.EthBridgeClaim): Uint8Array;
                toProtoMsg(message: _17.EthBridgeClaim): _17.EthBridgeClaimProtoMsg;
            };
            PeggyTokens: {
                typeUrl: string;
                encode(message: _17.PeggyTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.PeggyTokens;
                fromPartial(object: Partial<_17.PeggyTokens>): _17.PeggyTokens;
                fromAmino(object: _17.PeggyTokensAmino): _17.PeggyTokens;
                toAmino(message: _17.PeggyTokens): _17.PeggyTokensAmino;
                fromAminoMsg(object: _17.PeggyTokensAminoMsg): _17.PeggyTokens;
                fromProtoMsg(message: _17.PeggyTokensProtoMsg): _17.PeggyTokens;
                toProto(message: _17.PeggyTokens): Uint8Array;
                toProtoMsg(message: _17.PeggyTokens): _17.PeggyTokensProtoMsg;
            };
            Pause: {
                typeUrl: string;
                encode(message: _17.Pause, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Pause;
                fromPartial(object: Partial<_17.Pause>): _17.Pause;
                fromAmino(object: _17.PauseAmino): _17.Pause;
                toAmino(message: _17.Pause): _17.PauseAmino;
                fromAminoMsg(object: _17.PauseAminoMsg): _17.Pause;
                fromProtoMsg(message: _17.PauseProtoMsg): _17.Pause;
                toProto(message: _17.Pause): Uint8Array;
                toProtoMsg(message: _17.Pause): _17.PauseProtoMsg;
            };
            MsgPause: {
                typeUrl: string;
                encode(message: _16.MsgPause, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgPause;
                fromPartial(object: Partial<_16.MsgPause>): _16.MsgPause;
                fromAmino(object: _16.MsgPauseAmino): _16.MsgPause;
                toAmino(message: _16.MsgPause): _16.MsgPauseAmino;
                fromAminoMsg(object: _16.MsgPauseAminoMsg): _16.MsgPause;
                fromProtoMsg(message: _16.MsgPauseProtoMsg): _16.MsgPause;
                toProto(message: _16.MsgPause): Uint8Array;
                toProtoMsg(message: _16.MsgPause): _16.MsgPauseProtoMsg;
            };
            MsgPauseResponse: {
                typeUrl: string;
                encode(_: _16.MsgPauseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgPauseResponse;
                fromPartial(_: Partial<_16.MsgPauseResponse>): _16.MsgPauseResponse;
                fromAmino(_: _16.MsgPauseResponseAmino): _16.MsgPauseResponse;
                toAmino(_: _16.MsgPauseResponse): _16.MsgPauseResponseAmino;
                fromAminoMsg(object: _16.MsgPauseResponseAminoMsg): _16.MsgPauseResponse;
                fromProtoMsg(message: _16.MsgPauseResponseProtoMsg): _16.MsgPauseResponse;
                toProto(message: _16.MsgPauseResponse): Uint8Array;
                toProtoMsg(message: _16.MsgPauseResponse): _16.MsgPauseResponseProtoMsg;
            };
            MsgLock: {
                typeUrl: string;
                encode(message: _16.MsgLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgLock;
                fromPartial(object: Partial<_16.MsgLock>): _16.MsgLock;
                fromAmino(object: _16.MsgLockAmino): _16.MsgLock;
                toAmino(message: _16.MsgLock): _16.MsgLockAmino;
                fromAminoMsg(object: _16.MsgLockAminoMsg): _16.MsgLock;
                fromProtoMsg(message: _16.MsgLockProtoMsg): _16.MsgLock;
                toProto(message: _16.MsgLock): Uint8Array;
                toProtoMsg(message: _16.MsgLock): _16.MsgLockProtoMsg;
            };
            MsgLockResponse: {
                typeUrl: string;
                encode(_: _16.MsgLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgLockResponse;
                fromPartial(_: Partial<_16.MsgLockResponse>): _16.MsgLockResponse;
                fromAmino(_: _16.MsgLockResponseAmino): _16.MsgLockResponse;
                toAmino(_: _16.MsgLockResponse): _16.MsgLockResponseAmino;
                fromAminoMsg(object: _16.MsgLockResponseAminoMsg): _16.MsgLockResponse;
                fromProtoMsg(message: _16.MsgLockResponseProtoMsg): _16.MsgLockResponse;
                toProto(message: _16.MsgLockResponse): Uint8Array;
                toProtoMsg(message: _16.MsgLockResponse): _16.MsgLockResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _16.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgBurn;
                fromPartial(object: Partial<_16.MsgBurn>): _16.MsgBurn;
                fromAmino(object: _16.MsgBurnAmino): _16.MsgBurn;
                toAmino(message: _16.MsgBurn): _16.MsgBurnAmino;
                fromAminoMsg(object: _16.MsgBurnAminoMsg): _16.MsgBurn;
                fromProtoMsg(message: _16.MsgBurnProtoMsg): _16.MsgBurn;
                toProto(message: _16.MsgBurn): Uint8Array;
                toProtoMsg(message: _16.MsgBurn): _16.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _16.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgBurnResponse;
                fromPartial(_: Partial<_16.MsgBurnResponse>): _16.MsgBurnResponse;
                fromAmino(_: _16.MsgBurnResponseAmino): _16.MsgBurnResponse;
                toAmino(_: _16.MsgBurnResponse): _16.MsgBurnResponseAmino;
                fromAminoMsg(object: _16.MsgBurnResponseAminoMsg): _16.MsgBurnResponse;
                fromProtoMsg(message: _16.MsgBurnResponseProtoMsg): _16.MsgBurnResponse;
                toProto(message: _16.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _16.MsgBurnResponse): _16.MsgBurnResponseProtoMsg;
            };
            MsgCreateEthBridgeClaim: {
                typeUrl: string;
                encode(message: _16.MsgCreateEthBridgeClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgCreateEthBridgeClaim;
                fromPartial(object: Partial<_16.MsgCreateEthBridgeClaim>): _16.MsgCreateEthBridgeClaim;
                fromAmino(object: _16.MsgCreateEthBridgeClaimAmino): _16.MsgCreateEthBridgeClaim;
                toAmino(message: _16.MsgCreateEthBridgeClaim): _16.MsgCreateEthBridgeClaimAmino;
                fromAminoMsg(object: _16.MsgCreateEthBridgeClaimAminoMsg): _16.MsgCreateEthBridgeClaim;
                fromProtoMsg(message: _16.MsgCreateEthBridgeClaimProtoMsg): _16.MsgCreateEthBridgeClaim;
                toProto(message: _16.MsgCreateEthBridgeClaim): Uint8Array;
                toProtoMsg(message: _16.MsgCreateEthBridgeClaim): _16.MsgCreateEthBridgeClaimProtoMsg;
            };
            MsgCreateEthBridgeClaimResponse: {
                typeUrl: string;
                encode(_: _16.MsgCreateEthBridgeClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgCreateEthBridgeClaimResponse;
                fromPartial(_: Partial<_16.MsgCreateEthBridgeClaimResponse>): _16.MsgCreateEthBridgeClaimResponse;
                fromAmino(_: _16.MsgCreateEthBridgeClaimResponseAmino): _16.MsgCreateEthBridgeClaimResponse;
                toAmino(_: _16.MsgCreateEthBridgeClaimResponse): _16.MsgCreateEthBridgeClaimResponseAmino;
                fromAminoMsg(object: _16.MsgCreateEthBridgeClaimResponseAminoMsg): _16.MsgCreateEthBridgeClaimResponse;
                fromProtoMsg(message: _16.MsgCreateEthBridgeClaimResponseProtoMsg): _16.MsgCreateEthBridgeClaimResponse;
                toProto(message: _16.MsgCreateEthBridgeClaimResponse): Uint8Array;
                toProtoMsg(message: _16.MsgCreateEthBridgeClaimResponse): _16.MsgCreateEthBridgeClaimResponseProtoMsg;
            };
            MsgUpdateWhiteListValidator: {
                typeUrl: string;
                encode(message: _16.MsgUpdateWhiteListValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgUpdateWhiteListValidator;
                fromPartial(object: Partial<_16.MsgUpdateWhiteListValidator>): _16.MsgUpdateWhiteListValidator;
                fromAmino(object: _16.MsgUpdateWhiteListValidatorAmino): _16.MsgUpdateWhiteListValidator;
                toAmino(message: _16.MsgUpdateWhiteListValidator): _16.MsgUpdateWhiteListValidatorAmino;
                fromAminoMsg(object: _16.MsgUpdateWhiteListValidatorAminoMsg): _16.MsgUpdateWhiteListValidator;
                fromProtoMsg(message: _16.MsgUpdateWhiteListValidatorProtoMsg): _16.MsgUpdateWhiteListValidator;
                toProto(message: _16.MsgUpdateWhiteListValidator): Uint8Array;
                toProtoMsg(message: _16.MsgUpdateWhiteListValidator): _16.MsgUpdateWhiteListValidatorProtoMsg;
            };
            MsgUpdateWhiteListValidatorResponse: {
                typeUrl: string;
                encode(_: _16.MsgUpdateWhiteListValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgUpdateWhiteListValidatorResponse;
                fromPartial(_: Partial<_16.MsgUpdateWhiteListValidatorResponse>): _16.MsgUpdateWhiteListValidatorResponse;
                fromAmino(_: _16.MsgUpdateWhiteListValidatorResponseAmino): _16.MsgUpdateWhiteListValidatorResponse;
                toAmino(_: _16.MsgUpdateWhiteListValidatorResponse): _16.MsgUpdateWhiteListValidatorResponseAmino;
                fromAminoMsg(object: _16.MsgUpdateWhiteListValidatorResponseAminoMsg): _16.MsgUpdateWhiteListValidatorResponse;
                fromProtoMsg(message: _16.MsgUpdateWhiteListValidatorResponseProtoMsg): _16.MsgUpdateWhiteListValidatorResponse;
                toProto(message: _16.MsgUpdateWhiteListValidatorResponse): Uint8Array;
                toProtoMsg(message: _16.MsgUpdateWhiteListValidatorResponse): _16.MsgUpdateWhiteListValidatorResponseProtoMsg;
            };
            MsgUpdateCethReceiverAccount: {
                typeUrl: string;
                encode(message: _16.MsgUpdateCethReceiverAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgUpdateCethReceiverAccount;
                fromPartial(object: Partial<_16.MsgUpdateCethReceiverAccount>): _16.MsgUpdateCethReceiverAccount;
                fromAmino(object: _16.MsgUpdateCethReceiverAccountAmino): _16.MsgUpdateCethReceiverAccount;
                toAmino(message: _16.MsgUpdateCethReceiverAccount): _16.MsgUpdateCethReceiverAccountAmino;
                fromAminoMsg(object: _16.MsgUpdateCethReceiverAccountAminoMsg): _16.MsgUpdateCethReceiverAccount;
                fromProtoMsg(message: _16.MsgUpdateCethReceiverAccountProtoMsg): _16.MsgUpdateCethReceiverAccount;
                toProto(message: _16.MsgUpdateCethReceiverAccount): Uint8Array;
                toProtoMsg(message: _16.MsgUpdateCethReceiverAccount): _16.MsgUpdateCethReceiverAccountProtoMsg;
            };
            MsgUpdateCethReceiverAccountResponse: {
                typeUrl: string;
                encode(_: _16.MsgUpdateCethReceiverAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgUpdateCethReceiverAccountResponse;
                fromPartial(_: Partial<_16.MsgUpdateCethReceiverAccountResponse>): _16.MsgUpdateCethReceiverAccountResponse;
                fromAmino(_: _16.MsgUpdateCethReceiverAccountResponseAmino): _16.MsgUpdateCethReceiverAccountResponse;
                toAmino(_: _16.MsgUpdateCethReceiverAccountResponse): _16.MsgUpdateCethReceiverAccountResponseAmino;
                fromAminoMsg(object: _16.MsgUpdateCethReceiverAccountResponseAminoMsg): _16.MsgUpdateCethReceiverAccountResponse;
                fromProtoMsg(message: _16.MsgUpdateCethReceiverAccountResponseProtoMsg): _16.MsgUpdateCethReceiverAccountResponse;
                toProto(message: _16.MsgUpdateCethReceiverAccountResponse): Uint8Array;
                toProtoMsg(message: _16.MsgUpdateCethReceiverAccountResponse): _16.MsgUpdateCethReceiverAccountResponseProtoMsg;
            };
            MsgRescueCeth: {
                typeUrl: string;
                encode(message: _16.MsgRescueCeth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgRescueCeth;
                fromPartial(object: Partial<_16.MsgRescueCeth>): _16.MsgRescueCeth;
                fromAmino(object: _16.MsgRescueCethAmino): _16.MsgRescueCeth;
                toAmino(message: _16.MsgRescueCeth): _16.MsgRescueCethAmino;
                fromAminoMsg(object: _16.MsgRescueCethAminoMsg): _16.MsgRescueCeth;
                fromProtoMsg(message: _16.MsgRescueCethProtoMsg): _16.MsgRescueCeth;
                toProto(message: _16.MsgRescueCeth): Uint8Array;
                toProtoMsg(message: _16.MsgRescueCeth): _16.MsgRescueCethProtoMsg;
            };
            MsgRescueCethResponse: {
                typeUrl: string;
                encode(_: _16.MsgRescueCethResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgRescueCethResponse;
                fromPartial(_: Partial<_16.MsgRescueCethResponse>): _16.MsgRescueCethResponse;
                fromAmino(_: _16.MsgRescueCethResponseAmino): _16.MsgRescueCethResponse;
                toAmino(_: _16.MsgRescueCethResponse): _16.MsgRescueCethResponseAmino;
                fromAminoMsg(object: _16.MsgRescueCethResponseAminoMsg): _16.MsgRescueCethResponse;
                fromProtoMsg(message: _16.MsgRescueCethResponseProtoMsg): _16.MsgRescueCethResponse;
                toProto(message: _16.MsgRescueCethResponse): Uint8Array;
                toProtoMsg(message: _16.MsgRescueCethResponse): _16.MsgRescueCethResponseProtoMsg;
            };
            MsgSetBlacklist: {
                typeUrl: string;
                encode(message: _16.MsgSetBlacklist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgSetBlacklist;
                fromPartial(object: Partial<_16.MsgSetBlacklist>): _16.MsgSetBlacklist;
                fromAmino(object: _16.MsgSetBlacklistAmino): _16.MsgSetBlacklist;
                toAmino(message: _16.MsgSetBlacklist): _16.MsgSetBlacklistAmino;
                fromAminoMsg(object: _16.MsgSetBlacklistAminoMsg): _16.MsgSetBlacklist;
                fromProtoMsg(message: _16.MsgSetBlacklistProtoMsg): _16.MsgSetBlacklist;
                toProto(message: _16.MsgSetBlacklist): Uint8Array;
                toProtoMsg(message: _16.MsgSetBlacklist): _16.MsgSetBlacklistProtoMsg;
            };
            MsgSetBlacklistResponse: {
                typeUrl: string;
                encode(_: _16.MsgSetBlacklistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgSetBlacklistResponse;
                fromPartial(_: Partial<_16.MsgSetBlacklistResponse>): _16.MsgSetBlacklistResponse;
                fromAmino(_: _16.MsgSetBlacklistResponseAmino): _16.MsgSetBlacklistResponse;
                toAmino(_: _16.MsgSetBlacklistResponse): _16.MsgSetBlacklistResponseAmino;
                fromAminoMsg(object: _16.MsgSetBlacklistResponseAminoMsg): _16.MsgSetBlacklistResponse;
                fromProtoMsg(message: _16.MsgSetBlacklistResponseProtoMsg): _16.MsgSetBlacklistResponse;
                toProto(message: _16.MsgSetBlacklistResponse): Uint8Array;
                toProtoMsg(message: _16.MsgSetBlacklistResponse): _16.MsgSetBlacklistResponseProtoMsg;
            };
            QueryEthProphecyRequest: {
                typeUrl: string;
                encode(message: _15.QueryEthProphecyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryEthProphecyRequest;
                fromPartial(object: Partial<_15.QueryEthProphecyRequest>): _15.QueryEthProphecyRequest;
                fromAmino(object: _15.QueryEthProphecyRequestAmino): _15.QueryEthProphecyRequest;
                toAmino(message: _15.QueryEthProphecyRequest): _15.QueryEthProphecyRequestAmino;
                fromAminoMsg(object: _15.QueryEthProphecyRequestAminoMsg): _15.QueryEthProphecyRequest;
                fromProtoMsg(message: _15.QueryEthProphecyRequestProtoMsg): _15.QueryEthProphecyRequest;
                toProto(message: _15.QueryEthProphecyRequest): Uint8Array;
                toProtoMsg(message: _15.QueryEthProphecyRequest): _15.QueryEthProphecyRequestProtoMsg;
            };
            QueryEthProphecyResponse: {
                typeUrl: string;
                encode(message: _15.QueryEthProphecyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryEthProphecyResponse;
                fromPartial(object: Partial<_15.QueryEthProphecyResponse>): _15.QueryEthProphecyResponse;
                fromAmino(object: _15.QueryEthProphecyResponseAmino): _15.QueryEthProphecyResponse;
                toAmino(message: _15.QueryEthProphecyResponse): _15.QueryEthProphecyResponseAmino;
                fromAminoMsg(object: _15.QueryEthProphecyResponseAminoMsg): _15.QueryEthProphecyResponse;
                fromProtoMsg(message: _15.QueryEthProphecyResponseProtoMsg): _15.QueryEthProphecyResponse;
                toProto(message: _15.QueryEthProphecyResponse): Uint8Array;
                toProtoMsg(message: _15.QueryEthProphecyResponse): _15.QueryEthProphecyResponseProtoMsg;
            };
            QueryBlacklistRequest: {
                typeUrl: string;
                encode(_: _15.QueryBlacklistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.QueryBlacklistRequest;
                fromPartial(_: Partial<_15.QueryBlacklistRequest>): _15.QueryBlacklistRequest;
                fromAmino(_: _15.QueryBlacklistRequestAmino): _15.QueryBlacklistRequest;
                toAmino(_: _15.QueryBlacklistRequest): _15.QueryBlacklistRequestAmino;
                fromAminoMsg(object: _15.QueryBlacklistRequestAminoMsg): _15.QueryBlacklistRequest;
                fromProtoMsg(message: _15.QueryBlacklistRequestProtoMsg): _15.QueryBlacklistRequest;
                toProto(message: _15.QueryBlacklistRequest): Uint8Array;
                toProtoMsg(message: _15.QueryBlacklistRequest): _15.QueryBlacklistRequestProtoMsg;
            };
            QueryBlacklistResponse: {
                typeUrl: string;
                encode(message: _15.QueryBlacklistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryBlacklistResponse;
                fromPartial(object: Partial<_15.QueryBlacklistResponse>): _15.QueryBlacklistResponse;
                fromAmino(object: _15.QueryBlacklistResponseAmino): _15.QueryBlacklistResponse;
                toAmino(message: _15.QueryBlacklistResponse): _15.QueryBlacklistResponseAmino;
                fromAminoMsg(object: _15.QueryBlacklistResponseAminoMsg): _15.QueryBlacklistResponse;
                fromProtoMsg(message: _15.QueryBlacklistResponseProtoMsg): _15.QueryBlacklistResponse;
                toProto(message: _15.QueryBlacklistResponse): Uint8Array;
                toProtoMsg(message: _15.QueryBlacklistResponse): _15.QueryBlacklistResponseProtoMsg;
            };
            QueryPauseRequest: {
                typeUrl: string;
                encode(_: _15.QueryPauseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.QueryPauseRequest;
                fromPartial(_: Partial<_15.QueryPauseRequest>): _15.QueryPauseRequest;
                fromAmino(_: _15.QueryPauseRequestAmino): _15.QueryPauseRequest;
                toAmino(_: _15.QueryPauseRequest): _15.QueryPauseRequestAmino;
                fromAminoMsg(object: _15.QueryPauseRequestAminoMsg): _15.QueryPauseRequest;
                fromProtoMsg(message: _15.QueryPauseRequestProtoMsg): _15.QueryPauseRequest;
                toProto(message: _15.QueryPauseRequest): Uint8Array;
                toProtoMsg(message: _15.QueryPauseRequest): _15.QueryPauseRequestProtoMsg;
            };
            QueryPauseResponse: {
                typeUrl: string;
                encode(message: _15.QueryPauseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryPauseResponse;
                fromPartial(object: Partial<_15.QueryPauseResponse>): _15.QueryPauseResponse;
                fromAmino(object: _15.QueryPauseResponseAmino): _15.QueryPauseResponse;
                toAmino(message: _15.QueryPauseResponse): _15.QueryPauseResponseAmino;
                fromAminoMsg(object: _15.QueryPauseResponseAminoMsg): _15.QueryPauseResponse;
                fromProtoMsg(message: _15.QueryPauseResponseProtoMsg): _15.QueryPauseResponse;
                toProto(message: _15.QueryPauseResponse): Uint8Array;
                toProtoMsg(message: _15.QueryPauseResponse): _15.QueryPauseResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _14.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GenesisState;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
                fromAmino(object: _14.GenesisStateAmino): _14.GenesisState;
                toAmino(message: _14.GenesisState): _14.GenesisStateAmino;
                fromAminoMsg(object: _14.GenesisStateAminoMsg): _14.GenesisState;
                fromProtoMsg(message: _14.GenesisStateProtoMsg): _14.GenesisState;
                toProto(message: _14.GenesisState): Uint8Array;
                toProtoMsg(message: _14.GenesisState): _14.GenesisStateProtoMsg;
            };
        };
    }
    namespace margin {
        const v1: {
            MsgClientImpl: typeof _147.MsgClientImpl;
            QueryClientImpl: typeof _141.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                getMTP(request: _20.MTPRequest): Promise<_20.MTPResponse>;
                getPositions(request?: _20.PositionsRequest): Promise<_20.PositionsResponse>;
                getPositionsForAddress(request: _20.PositionsForAddressRequest): Promise<_20.PositionsForAddressResponse>;
                getPositionsByPool(request: _20.PositionsByPoolRequest): Promise<_20.PositionsByPoolResponse>;
                getParams(request?: _20.ParamsRequest): Promise<_20.ParamsResponse>;
                getStatus(request?: _20.StatusRequest): Promise<_20.StatusResponse>;
                getSQParams(request: _20.GetSQParamsRequest): Promise<_20.GetSQParamsResponse>;
                getWhitelist(request?: _20.WhitelistRequest): Promise<_20.WhitelistResponse>;
                isWhitelisted(request: _20.IsWhitelistedRequest): Promise<_20.IsWhitelistedResponse>;
            };
            LCDQueryClient: typeof _134.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    open(value: _21.MsgOpen): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    close(value: _21.MsgClose): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceClose(value: _21.MsgForceClose): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _21.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePools(value: _21.MsgUpdatePools): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRowanCollateral(value: _21.MsgUpdateRowanCollateral): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    whitelist(value: _21.MsgWhitelist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    dewhitelist(value: _21.MsgDewhitelist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    adminClose(value: _21.MsgAdminClose): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    adminCloseAll(value: _21.MsgAdminCloseAll): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    open(value: _21.MsgOpen): {
                        typeUrl: string;
                        value: _21.MsgOpen;
                    };
                    close(value: _21.MsgClose): {
                        typeUrl: string;
                        value: _21.MsgClose;
                    };
                    forceClose(value: _21.MsgForceClose): {
                        typeUrl: string;
                        value: _21.MsgForceClose;
                    };
                    updateParams(value: _21.MsgUpdateParams): {
                        typeUrl: string;
                        value: _21.MsgUpdateParams;
                    };
                    updatePools(value: _21.MsgUpdatePools): {
                        typeUrl: string;
                        value: _21.MsgUpdatePools;
                    };
                    updateRowanCollateral(value: _21.MsgUpdateRowanCollateral): {
                        typeUrl: string;
                        value: _21.MsgUpdateRowanCollateral;
                    };
                    whitelist(value: _21.MsgWhitelist): {
                        typeUrl: string;
                        value: _21.MsgWhitelist;
                    };
                    dewhitelist(value: _21.MsgDewhitelist): {
                        typeUrl: string;
                        value: _21.MsgDewhitelist;
                    };
                    adminClose(value: _21.MsgAdminClose): {
                        typeUrl: string;
                        value: _21.MsgAdminClose;
                    };
                    adminCloseAll(value: _21.MsgAdminCloseAll): {
                        typeUrl: string;
                        value: _21.MsgAdminCloseAll;
                    };
                };
                fromJSON: {
                    open(value: any): {
                        typeUrl: string;
                        value: _21.MsgOpen;
                    };
                    close(value: any): {
                        typeUrl: string;
                        value: _21.MsgClose;
                    };
                    forceClose(value: any): {
                        typeUrl: string;
                        value: _21.MsgForceClose;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _21.MsgUpdateParams;
                    };
                    updatePools(value: any): {
                        typeUrl: string;
                        value: _21.MsgUpdatePools;
                    };
                    updateRowanCollateral(value: any): {
                        typeUrl: string;
                        value: _21.MsgUpdateRowanCollateral;
                    };
                    whitelist(value: any): {
                        typeUrl: string;
                        value: _21.MsgWhitelist;
                    };
                    dewhitelist(value: any): {
                        typeUrl: string;
                        value: _21.MsgDewhitelist;
                    };
                    adminClose(value: any): {
                        typeUrl: string;
                        value: _21.MsgAdminClose;
                    };
                    adminCloseAll(value: any): {
                        typeUrl: string;
                        value: _21.MsgAdminCloseAll;
                    };
                };
                fromPartial: {
                    open(value: _21.MsgOpen): {
                        typeUrl: string;
                        value: _21.MsgOpen;
                    };
                    close(value: _21.MsgClose): {
                        typeUrl: string;
                        value: _21.MsgClose;
                    };
                    forceClose(value: _21.MsgForceClose): {
                        typeUrl: string;
                        value: _21.MsgForceClose;
                    };
                    updateParams(value: _21.MsgUpdateParams): {
                        typeUrl: string;
                        value: _21.MsgUpdateParams;
                    };
                    updatePools(value: _21.MsgUpdatePools): {
                        typeUrl: string;
                        value: _21.MsgUpdatePools;
                    };
                    updateRowanCollateral(value: _21.MsgUpdateRowanCollateral): {
                        typeUrl: string;
                        value: _21.MsgUpdateRowanCollateral;
                    };
                    whitelist(value: _21.MsgWhitelist): {
                        typeUrl: string;
                        value: _21.MsgWhitelist;
                    };
                    dewhitelist(value: _21.MsgDewhitelist): {
                        typeUrl: string;
                        value: _21.MsgDewhitelist;
                    };
                    adminClose(value: _21.MsgAdminClose): {
                        typeUrl: string;
                        value: _21.MsgAdminClose;
                    };
                    adminCloseAll(value: _21.MsgAdminCloseAll): {
                        typeUrl: string;
                        value: _21.MsgAdminCloseAll;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.margin.v1.MsgOpen": {
                    aminoType: string;
                    toAmino: (message: _21.MsgOpen) => _21.MsgOpenAmino;
                    fromAmino: (object: _21.MsgOpenAmino) => _21.MsgOpen;
                };
                "/sifnode.margin.v1.MsgClose": {
                    aminoType: string;
                    toAmino: (message: _21.MsgClose) => _21.MsgCloseAmino;
                    fromAmino: (object: _21.MsgCloseAmino) => _21.MsgClose;
                };
                "/sifnode.margin.v1.MsgForceClose": {
                    aminoType: string;
                    toAmino: (message: _21.MsgForceClose) => _21.MsgForceCloseAmino;
                    fromAmino: (object: _21.MsgForceCloseAmino) => _21.MsgForceClose;
                };
                "/sifnode.margin.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _21.MsgUpdateParams) => _21.MsgUpdateParamsAmino;
                    fromAmino: (object: _21.MsgUpdateParamsAmino) => _21.MsgUpdateParams;
                };
                "/sifnode.margin.v1.MsgUpdatePools": {
                    aminoType: string;
                    toAmino: (message: _21.MsgUpdatePools) => _21.MsgUpdatePoolsAmino;
                    fromAmino: (object: _21.MsgUpdatePoolsAmino) => _21.MsgUpdatePools;
                };
                "/sifnode.margin.v1.MsgUpdateRowanCollateral": {
                    aminoType: string;
                    toAmino: (message: _21.MsgUpdateRowanCollateral) => _21.MsgUpdateRowanCollateralAmino;
                    fromAmino: (object: _21.MsgUpdateRowanCollateralAmino) => _21.MsgUpdateRowanCollateral;
                };
                "/sifnode.margin.v1.MsgWhitelist": {
                    aminoType: string;
                    toAmino: (message: _21.MsgWhitelist) => _21.MsgWhitelistAmino;
                    fromAmino: (object: _21.MsgWhitelistAmino) => _21.MsgWhitelist;
                };
                "/sifnode.margin.v1.MsgDewhitelist": {
                    aminoType: string;
                    toAmino: (message: _21.MsgDewhitelist) => _21.MsgDewhitelistAmino;
                    fromAmino: (object: _21.MsgDewhitelistAmino) => _21.MsgDewhitelist;
                };
                "/sifnode.margin.v1.MsgAdminClose": {
                    aminoType: string;
                    toAmino: (message: _21.MsgAdminClose) => _21.MsgAdminCloseAmino;
                    fromAmino: (object: _21.MsgAdminCloseAmino) => _21.MsgAdminClose;
                };
                "/sifnode.margin.v1.MsgAdminCloseAll": {
                    aminoType: string;
                    toAmino: (message: _21.MsgAdminCloseAll) => _21.MsgAdminCloseAllAmino;
                    fromAmino: (object: _21.MsgAdminCloseAllAmino) => _21.MsgAdminCloseAll;
                };
            };
            positionFromJSON(object: any): _22.Position;
            positionToJSON(object: _22.Position): string;
            Position: typeof _22.Position;
            PositionSDKType: typeof _22.Position;
            PositionAmino: typeof _22.Position;
            MTP: {
                typeUrl: string;
                encode(message: _22.MTP, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MTP;
                fromPartial(object: Partial<_22.MTP>): _22.MTP;
                fromAmino(object: _22.MTPAmino): _22.MTP;
                toAmino(message: _22.MTP): _22.MTPAmino;
                fromAminoMsg(object: _22.MTPAminoMsg): _22.MTP;
                fromProtoMsg(message: _22.MTPProtoMsg): _22.MTP;
                toProto(message: _22.MTP): Uint8Array;
                toProtoMsg(message: _22.MTP): _22.MTPProtoMsg;
            };
            MsgOpen: {
                typeUrl: string;
                encode(message: _21.MsgOpen, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgOpen;
                fromPartial(object: Partial<_21.MsgOpen>): _21.MsgOpen;
                fromAmino(object: _21.MsgOpenAmino): _21.MsgOpen;
                toAmino(message: _21.MsgOpen): _21.MsgOpenAmino;
                fromAminoMsg(object: _21.MsgOpenAminoMsg): _21.MsgOpen;
                fromProtoMsg(message: _21.MsgOpenProtoMsg): _21.MsgOpen;
                toProto(message: _21.MsgOpen): Uint8Array;
                toProtoMsg(message: _21.MsgOpen): _21.MsgOpenProtoMsg;
            };
            MsgOpenResponse: {
                typeUrl: string;
                encode(_: _21.MsgOpenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgOpenResponse;
                fromPartial(_: Partial<_21.MsgOpenResponse>): _21.MsgOpenResponse;
                fromAmino(_: _21.MsgOpenResponseAmino): _21.MsgOpenResponse;
                toAmino(_: _21.MsgOpenResponse): _21.MsgOpenResponseAmino;
                fromAminoMsg(object: _21.MsgOpenResponseAminoMsg): _21.MsgOpenResponse;
                fromProtoMsg(message: _21.MsgOpenResponseProtoMsg): _21.MsgOpenResponse;
                toProto(message: _21.MsgOpenResponse): Uint8Array;
                toProtoMsg(message: _21.MsgOpenResponse): _21.MsgOpenResponseProtoMsg;
            };
            MsgClose: {
                typeUrl: string;
                encode(message: _21.MsgClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgClose;
                fromPartial(object: Partial<_21.MsgClose>): _21.MsgClose;
                fromAmino(object: _21.MsgCloseAmino): _21.MsgClose;
                toAmino(message: _21.MsgClose): _21.MsgCloseAmino;
                fromAminoMsg(object: _21.MsgCloseAminoMsg): _21.MsgClose;
                fromProtoMsg(message: _21.MsgCloseProtoMsg): _21.MsgClose;
                toProto(message: _21.MsgClose): Uint8Array;
                toProtoMsg(message: _21.MsgClose): _21.MsgCloseProtoMsg;
            };
            MsgCloseResponse: {
                typeUrl: string;
                encode(_: _21.MsgCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgCloseResponse;
                fromPartial(_: Partial<_21.MsgCloseResponse>): _21.MsgCloseResponse;
                fromAmino(_: _21.MsgCloseResponseAmino): _21.MsgCloseResponse;
                toAmino(_: _21.MsgCloseResponse): _21.MsgCloseResponseAmino;
                fromAminoMsg(object: _21.MsgCloseResponseAminoMsg): _21.MsgCloseResponse;
                fromProtoMsg(message: _21.MsgCloseResponseProtoMsg): _21.MsgCloseResponse;
                toProto(message: _21.MsgCloseResponse): Uint8Array;
                toProtoMsg(message: _21.MsgCloseResponse): _21.MsgCloseResponseProtoMsg;
            };
            MsgForceClose: {
                typeUrl: string;
                encode(message: _21.MsgForceClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgForceClose;
                fromPartial(object: Partial<_21.MsgForceClose>): _21.MsgForceClose;
                fromAmino(object: _21.MsgForceCloseAmino): _21.MsgForceClose;
                toAmino(message: _21.MsgForceClose): _21.MsgForceCloseAmino;
                fromAminoMsg(object: _21.MsgForceCloseAminoMsg): _21.MsgForceClose;
                fromProtoMsg(message: _21.MsgForceCloseProtoMsg): _21.MsgForceClose;
                toProto(message: _21.MsgForceClose): Uint8Array;
                toProtoMsg(message: _21.MsgForceClose): _21.MsgForceCloseProtoMsg;
            };
            MsgForceCloseResponse: {
                typeUrl: string;
                encode(_: _21.MsgForceCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgForceCloseResponse;
                fromPartial(_: Partial<_21.MsgForceCloseResponse>): _21.MsgForceCloseResponse;
                fromAmino(_: _21.MsgForceCloseResponseAmino): _21.MsgForceCloseResponse;
                toAmino(_: _21.MsgForceCloseResponse): _21.MsgForceCloseResponseAmino;
                fromAminoMsg(object: _21.MsgForceCloseResponseAminoMsg): _21.MsgForceCloseResponse;
                fromProtoMsg(message: _21.MsgForceCloseResponseProtoMsg): _21.MsgForceCloseResponse;
                toProto(message: _21.MsgForceCloseResponse): Uint8Array;
                toProtoMsg(message: _21.MsgForceCloseResponse): _21.MsgForceCloseResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _21.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgUpdateParams;
                fromPartial(object: Partial<_21.MsgUpdateParams>): _21.MsgUpdateParams;
                fromAmino(object: _21.MsgUpdateParamsAmino): _21.MsgUpdateParams;
                toAmino(message: _21.MsgUpdateParams): _21.MsgUpdateParamsAmino;
                fromAminoMsg(object: _21.MsgUpdateParamsAminoMsg): _21.MsgUpdateParams;
                fromProtoMsg(message: _21.MsgUpdateParamsProtoMsg): _21.MsgUpdateParams;
                toProto(message: _21.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _21.MsgUpdateParams): _21.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _21.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_21.MsgUpdateParamsResponse>): _21.MsgUpdateParamsResponse;
                fromAmino(_: _21.MsgUpdateParamsResponseAmino): _21.MsgUpdateParamsResponse;
                toAmino(_: _21.MsgUpdateParamsResponse): _21.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _21.MsgUpdateParamsResponseAminoMsg): _21.MsgUpdateParamsResponse;
                fromProtoMsg(message: _21.MsgUpdateParamsResponseProtoMsg): _21.MsgUpdateParamsResponse;
                toProto(message: _21.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _21.MsgUpdateParamsResponse): _21.MsgUpdateParamsResponseProtoMsg;
            };
            MsgUpdatePools: {
                typeUrl: string;
                encode(message: _21.MsgUpdatePools, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgUpdatePools;
                fromPartial(object: Partial<_21.MsgUpdatePools>): _21.MsgUpdatePools;
                fromAmino(object: _21.MsgUpdatePoolsAmino): _21.MsgUpdatePools;
                toAmino(message: _21.MsgUpdatePools): _21.MsgUpdatePoolsAmino;
                fromAminoMsg(object: _21.MsgUpdatePoolsAminoMsg): _21.MsgUpdatePools;
                fromProtoMsg(message: _21.MsgUpdatePoolsProtoMsg): _21.MsgUpdatePools;
                toProto(message: _21.MsgUpdatePools): Uint8Array;
                toProtoMsg(message: _21.MsgUpdatePools): _21.MsgUpdatePoolsProtoMsg;
            };
            MsgUpdatePoolsResponse: {
                typeUrl: string;
                encode(_: _21.MsgUpdatePoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgUpdatePoolsResponse;
                fromPartial(_: Partial<_21.MsgUpdatePoolsResponse>): _21.MsgUpdatePoolsResponse;
                fromAmino(_: _21.MsgUpdatePoolsResponseAmino): _21.MsgUpdatePoolsResponse;
                toAmino(_: _21.MsgUpdatePoolsResponse): _21.MsgUpdatePoolsResponseAmino;
                fromAminoMsg(object: _21.MsgUpdatePoolsResponseAminoMsg): _21.MsgUpdatePoolsResponse;
                fromProtoMsg(message: _21.MsgUpdatePoolsResponseProtoMsg): _21.MsgUpdatePoolsResponse;
                toProto(message: _21.MsgUpdatePoolsResponse): Uint8Array;
                toProtoMsg(message: _21.MsgUpdatePoolsResponse): _21.MsgUpdatePoolsResponseProtoMsg;
            };
            MsgUpdateRowanCollateral: {
                typeUrl: string;
                encode(message: _21.MsgUpdateRowanCollateral, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgUpdateRowanCollateral;
                fromPartial(object: Partial<_21.MsgUpdateRowanCollateral>): _21.MsgUpdateRowanCollateral;
                fromAmino(object: _21.MsgUpdateRowanCollateralAmino): _21.MsgUpdateRowanCollateral;
                toAmino(message: _21.MsgUpdateRowanCollateral): _21.MsgUpdateRowanCollateralAmino;
                fromAminoMsg(object: _21.MsgUpdateRowanCollateralAminoMsg): _21.MsgUpdateRowanCollateral;
                fromProtoMsg(message: _21.MsgUpdateRowanCollateralProtoMsg): _21.MsgUpdateRowanCollateral;
                toProto(message: _21.MsgUpdateRowanCollateral): Uint8Array;
                toProtoMsg(message: _21.MsgUpdateRowanCollateral): _21.MsgUpdateRowanCollateralProtoMsg;
            };
            MsgUpdateRowanCollateralResponse: {
                typeUrl: string;
                encode(_: _21.MsgUpdateRowanCollateralResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgUpdateRowanCollateralResponse;
                fromPartial(_: Partial<_21.MsgUpdateRowanCollateralResponse>): _21.MsgUpdateRowanCollateralResponse;
                fromAmino(_: _21.MsgUpdateRowanCollateralResponseAmino): _21.MsgUpdateRowanCollateralResponse;
                toAmino(_: _21.MsgUpdateRowanCollateralResponse): _21.MsgUpdateRowanCollateralResponseAmino;
                fromAminoMsg(object: _21.MsgUpdateRowanCollateralResponseAminoMsg): _21.MsgUpdateRowanCollateralResponse;
                fromProtoMsg(message: _21.MsgUpdateRowanCollateralResponseProtoMsg): _21.MsgUpdateRowanCollateralResponse;
                toProto(message: _21.MsgUpdateRowanCollateralResponse): Uint8Array;
                toProtoMsg(message: _21.MsgUpdateRowanCollateralResponse): _21.MsgUpdateRowanCollateralResponseProtoMsg;
            };
            MsgWhitelist: {
                typeUrl: string;
                encode(message: _21.MsgWhitelist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgWhitelist;
                fromPartial(object: Partial<_21.MsgWhitelist>): _21.MsgWhitelist;
                fromAmino(object: _21.MsgWhitelistAmino): _21.MsgWhitelist;
                toAmino(message: _21.MsgWhitelist): _21.MsgWhitelistAmino;
                fromAminoMsg(object: _21.MsgWhitelistAminoMsg): _21.MsgWhitelist;
                fromProtoMsg(message: _21.MsgWhitelistProtoMsg): _21.MsgWhitelist;
                toProto(message: _21.MsgWhitelist): Uint8Array;
                toProtoMsg(message: _21.MsgWhitelist): _21.MsgWhitelistProtoMsg;
            };
            MsgWhitelistResponse: {
                typeUrl: string;
                encode(_: _21.MsgWhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgWhitelistResponse;
                fromPartial(_: Partial<_21.MsgWhitelistResponse>): _21.MsgWhitelistResponse;
                fromAmino(_: _21.MsgWhitelistResponseAmino): _21.MsgWhitelistResponse;
                toAmino(_: _21.MsgWhitelistResponse): _21.MsgWhitelistResponseAmino;
                fromAminoMsg(object: _21.MsgWhitelistResponseAminoMsg): _21.MsgWhitelistResponse;
                fromProtoMsg(message: _21.MsgWhitelistResponseProtoMsg): _21.MsgWhitelistResponse;
                toProto(message: _21.MsgWhitelistResponse): Uint8Array;
                toProtoMsg(message: _21.MsgWhitelistResponse): _21.MsgWhitelistResponseProtoMsg;
            };
            MsgDewhitelist: {
                typeUrl: string;
                encode(message: _21.MsgDewhitelist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgDewhitelist;
                fromPartial(object: Partial<_21.MsgDewhitelist>): _21.MsgDewhitelist;
                fromAmino(object: _21.MsgDewhitelistAmino): _21.MsgDewhitelist;
                toAmino(message: _21.MsgDewhitelist): _21.MsgDewhitelistAmino;
                fromAminoMsg(object: _21.MsgDewhitelistAminoMsg): _21.MsgDewhitelist;
                fromProtoMsg(message: _21.MsgDewhitelistProtoMsg): _21.MsgDewhitelist;
                toProto(message: _21.MsgDewhitelist): Uint8Array;
                toProtoMsg(message: _21.MsgDewhitelist): _21.MsgDewhitelistProtoMsg;
            };
            MsgDewhitelistResponse: {
                typeUrl: string;
                encode(_: _21.MsgDewhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgDewhitelistResponse;
                fromPartial(_: Partial<_21.MsgDewhitelistResponse>): _21.MsgDewhitelistResponse;
                fromAmino(_: _21.MsgDewhitelistResponseAmino): _21.MsgDewhitelistResponse;
                toAmino(_: _21.MsgDewhitelistResponse): _21.MsgDewhitelistResponseAmino;
                fromAminoMsg(object: _21.MsgDewhitelistResponseAminoMsg): _21.MsgDewhitelistResponse;
                fromProtoMsg(message: _21.MsgDewhitelistResponseProtoMsg): _21.MsgDewhitelistResponse;
                toProto(message: _21.MsgDewhitelistResponse): Uint8Array;
                toProtoMsg(message: _21.MsgDewhitelistResponse): _21.MsgDewhitelistResponseProtoMsg;
            };
            MsgAdminCloseAll: {
                typeUrl: string;
                encode(message: _21.MsgAdminCloseAll, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgAdminCloseAll;
                fromPartial(object: Partial<_21.MsgAdminCloseAll>): _21.MsgAdminCloseAll;
                fromAmino(object: _21.MsgAdminCloseAllAmino): _21.MsgAdminCloseAll;
                toAmino(message: _21.MsgAdminCloseAll): _21.MsgAdminCloseAllAmino;
                fromAminoMsg(object: _21.MsgAdminCloseAllAminoMsg): _21.MsgAdminCloseAll;
                fromProtoMsg(message: _21.MsgAdminCloseAllProtoMsg): _21.MsgAdminCloseAll;
                toProto(message: _21.MsgAdminCloseAll): Uint8Array;
                toProtoMsg(message: _21.MsgAdminCloseAll): _21.MsgAdminCloseAllProtoMsg;
            };
            MsgAdminCloseAllResponse: {
                typeUrl: string;
                encode(_: _21.MsgAdminCloseAllResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgAdminCloseAllResponse;
                fromPartial(_: Partial<_21.MsgAdminCloseAllResponse>): _21.MsgAdminCloseAllResponse;
                fromAmino(_: _21.MsgAdminCloseAllResponseAmino): _21.MsgAdminCloseAllResponse;
                toAmino(_: _21.MsgAdminCloseAllResponse): _21.MsgAdminCloseAllResponseAmino;
                fromAminoMsg(object: _21.MsgAdminCloseAllResponseAminoMsg): _21.MsgAdminCloseAllResponse;
                fromProtoMsg(message: _21.MsgAdminCloseAllResponseProtoMsg): _21.MsgAdminCloseAllResponse;
                toProto(message: _21.MsgAdminCloseAllResponse): Uint8Array;
                toProtoMsg(message: _21.MsgAdminCloseAllResponse): _21.MsgAdminCloseAllResponseProtoMsg;
            };
            MsgAdminClose: {
                typeUrl: string;
                encode(message: _21.MsgAdminClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgAdminClose;
                fromPartial(object: Partial<_21.MsgAdminClose>): _21.MsgAdminClose;
                fromAmino(object: _21.MsgAdminCloseAmino): _21.MsgAdminClose;
                toAmino(message: _21.MsgAdminClose): _21.MsgAdminCloseAmino;
                fromAminoMsg(object: _21.MsgAdminCloseAminoMsg): _21.MsgAdminClose;
                fromProtoMsg(message: _21.MsgAdminCloseProtoMsg): _21.MsgAdminClose;
                toProto(message: _21.MsgAdminClose): Uint8Array;
                toProtoMsg(message: _21.MsgAdminClose): _21.MsgAdminCloseProtoMsg;
            };
            MsgAdminCloseResponse: {
                typeUrl: string;
                encode(_: _21.MsgAdminCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgAdminCloseResponse;
                fromPartial(_: Partial<_21.MsgAdminCloseResponse>): _21.MsgAdminCloseResponse;
                fromAmino(_: _21.MsgAdminCloseResponseAmino): _21.MsgAdminCloseResponse;
                toAmino(_: _21.MsgAdminCloseResponse): _21.MsgAdminCloseResponseAmino;
                fromAminoMsg(object: _21.MsgAdminCloseResponseAminoMsg): _21.MsgAdminCloseResponse;
                fromProtoMsg(message: _21.MsgAdminCloseResponseProtoMsg): _21.MsgAdminCloseResponse;
                toProto(message: _21.MsgAdminCloseResponse): Uint8Array;
                toProtoMsg(message: _21.MsgAdminCloseResponse): _21.MsgAdminCloseResponseProtoMsg;
            };
            MTPRequest: {
                typeUrl: string;
                encode(message: _20.MTPRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MTPRequest;
                fromPartial(object: Partial<_20.MTPRequest>): _20.MTPRequest;
                fromAmino(object: _20.MTPRequestAmino): _20.MTPRequest;
                toAmino(message: _20.MTPRequest): _20.MTPRequestAmino;
                fromAminoMsg(object: _20.MTPRequestAminoMsg): _20.MTPRequest;
                fromProtoMsg(message: _20.MTPRequestProtoMsg): _20.MTPRequest;
                toProto(message: _20.MTPRequest): Uint8Array;
                toProtoMsg(message: _20.MTPRequest): _20.MTPRequestProtoMsg;
            };
            MTPResponse: {
                typeUrl: string;
                encode(message: _20.MTPResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MTPResponse;
                fromPartial(object: Partial<_20.MTPResponse>): _20.MTPResponse;
                fromAmino(object: _20.MTPResponseAmino): _20.MTPResponse;
                toAmino(message: _20.MTPResponse): _20.MTPResponseAmino;
                fromAminoMsg(object: _20.MTPResponseAminoMsg): _20.MTPResponse;
                fromProtoMsg(message: _20.MTPResponseProtoMsg): _20.MTPResponse;
                toProto(message: _20.MTPResponse): Uint8Array;
                toProtoMsg(message: _20.MTPResponse): _20.MTPResponseProtoMsg;
            };
            PositionsForAddressRequest: {
                typeUrl: string;
                encode(message: _20.PositionsForAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.PositionsForAddressRequest;
                fromPartial(object: Partial<_20.PositionsForAddressRequest>): _20.PositionsForAddressRequest;
                fromAmino(object: _20.PositionsForAddressRequestAmino): _20.PositionsForAddressRequest;
                toAmino(message: _20.PositionsForAddressRequest): _20.PositionsForAddressRequestAmino;
                fromAminoMsg(object: _20.PositionsForAddressRequestAminoMsg): _20.PositionsForAddressRequest;
                fromProtoMsg(message: _20.PositionsForAddressRequestProtoMsg): _20.PositionsForAddressRequest;
                toProto(message: _20.PositionsForAddressRequest): Uint8Array;
                toProtoMsg(message: _20.PositionsForAddressRequest): _20.PositionsForAddressRequestProtoMsg;
            };
            PositionsForAddressResponse: {
                typeUrl: string;
                encode(message: _20.PositionsForAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.PositionsForAddressResponse;
                fromPartial(object: Partial<_20.PositionsForAddressResponse>): _20.PositionsForAddressResponse;
                fromAmino(object: _20.PositionsForAddressResponseAmino): _20.PositionsForAddressResponse;
                toAmino(message: _20.PositionsForAddressResponse): _20.PositionsForAddressResponseAmino;
                fromAminoMsg(object: _20.PositionsForAddressResponseAminoMsg): _20.PositionsForAddressResponse;
                fromProtoMsg(message: _20.PositionsForAddressResponseProtoMsg): _20.PositionsForAddressResponse;
                toProto(message: _20.PositionsForAddressResponse): Uint8Array;
                toProtoMsg(message: _20.PositionsForAddressResponse): _20.PositionsForAddressResponseProtoMsg;
            };
            PositionsByPoolRequest: {
                typeUrl: string;
                encode(message: _20.PositionsByPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.PositionsByPoolRequest;
                fromPartial(object: Partial<_20.PositionsByPoolRequest>): _20.PositionsByPoolRequest;
                fromAmino(object: _20.PositionsByPoolRequestAmino): _20.PositionsByPoolRequest;
                toAmino(message: _20.PositionsByPoolRequest): _20.PositionsByPoolRequestAmino;
                fromAminoMsg(object: _20.PositionsByPoolRequestAminoMsg): _20.PositionsByPoolRequest;
                fromProtoMsg(message: _20.PositionsByPoolRequestProtoMsg): _20.PositionsByPoolRequest;
                toProto(message: _20.PositionsByPoolRequest): Uint8Array;
                toProtoMsg(message: _20.PositionsByPoolRequest): _20.PositionsByPoolRequestProtoMsg;
            };
            PositionsByPoolResponse: {
                typeUrl: string;
                encode(message: _20.PositionsByPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.PositionsByPoolResponse;
                fromPartial(object: Partial<_20.PositionsByPoolResponse>): _20.PositionsByPoolResponse;
                fromAmino(object: _20.PositionsByPoolResponseAmino): _20.PositionsByPoolResponse;
                toAmino(message: _20.PositionsByPoolResponse): _20.PositionsByPoolResponseAmino;
                fromAminoMsg(object: _20.PositionsByPoolResponseAminoMsg): _20.PositionsByPoolResponse;
                fromProtoMsg(message: _20.PositionsByPoolResponseProtoMsg): _20.PositionsByPoolResponse;
                toProto(message: _20.PositionsByPoolResponse): Uint8Array;
                toProtoMsg(message: _20.PositionsByPoolResponse): _20.PositionsByPoolResponseProtoMsg;
            };
            PositionsRequest: {
                typeUrl: string;
                encode(message: _20.PositionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.PositionsRequest;
                fromPartial(object: Partial<_20.PositionsRequest>): _20.PositionsRequest;
                fromAmino(object: _20.PositionsRequestAmino): _20.PositionsRequest;
                toAmino(message: _20.PositionsRequest): _20.PositionsRequestAmino;
                fromAminoMsg(object: _20.PositionsRequestAminoMsg): _20.PositionsRequest;
                fromProtoMsg(message: _20.PositionsRequestProtoMsg): _20.PositionsRequest;
                toProto(message: _20.PositionsRequest): Uint8Array;
                toProtoMsg(message: _20.PositionsRequest): _20.PositionsRequestProtoMsg;
            };
            PositionsResponse: {
                typeUrl: string;
                encode(message: _20.PositionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.PositionsResponse;
                fromPartial(object: Partial<_20.PositionsResponse>): _20.PositionsResponse;
                fromAmino(object: _20.PositionsResponseAmino): _20.PositionsResponse;
                toAmino(message: _20.PositionsResponse): _20.PositionsResponseAmino;
                fromAminoMsg(object: _20.PositionsResponseAminoMsg): _20.PositionsResponse;
                fromProtoMsg(message: _20.PositionsResponseProtoMsg): _20.PositionsResponse;
                toProto(message: _20.PositionsResponse): Uint8Array;
                toProtoMsg(message: _20.PositionsResponse): _20.PositionsResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _20.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.ParamsRequest;
                fromPartial(_: Partial<_20.ParamsRequest>): _20.ParamsRequest;
                fromAmino(_: _20.ParamsRequestAmino): _20.ParamsRequest;
                toAmino(_: _20.ParamsRequest): _20.ParamsRequestAmino;
                fromAminoMsg(object: _20.ParamsRequestAminoMsg): _20.ParamsRequest;
                fromProtoMsg(message: _20.ParamsRequestProtoMsg): _20.ParamsRequest;
                toProto(message: _20.ParamsRequest): Uint8Array;
                toProtoMsg(message: _20.ParamsRequest): _20.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _20.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.ParamsResponse;
                fromPartial(object: Partial<_20.ParamsResponse>): _20.ParamsResponse;
                fromAmino(object: _20.ParamsResponseAmino): _20.ParamsResponse;
                toAmino(message: _20.ParamsResponse): _20.ParamsResponseAmino;
                fromAminoMsg(object: _20.ParamsResponseAminoMsg): _20.ParamsResponse;
                fromProtoMsg(message: _20.ParamsResponseProtoMsg): _20.ParamsResponse;
                toProto(message: _20.ParamsResponse): Uint8Array;
                toProtoMsg(message: _20.ParamsResponse): _20.ParamsResponseProtoMsg;
            };
            StatusRequest: {
                typeUrl: string;
                encode(_: _20.StatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.StatusRequest;
                fromPartial(_: Partial<_20.StatusRequest>): _20.StatusRequest;
                fromAmino(_: _20.StatusRequestAmino): _20.StatusRequest;
                toAmino(_: _20.StatusRequest): _20.StatusRequestAmino;
                fromAminoMsg(object: _20.StatusRequestAminoMsg): _20.StatusRequest;
                fromProtoMsg(message: _20.StatusRequestProtoMsg): _20.StatusRequest;
                toProto(message: _20.StatusRequest): Uint8Array;
                toProtoMsg(message: _20.StatusRequest): _20.StatusRequestProtoMsg;
            };
            StatusResponse: {
                typeUrl: string;
                encode(message: _20.StatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.StatusResponse;
                fromPartial(object: Partial<_20.StatusResponse>): _20.StatusResponse;
                fromAmino(object: _20.StatusResponseAmino): _20.StatusResponse;
                toAmino(message: _20.StatusResponse): _20.StatusResponseAmino;
                fromAminoMsg(object: _20.StatusResponseAminoMsg): _20.StatusResponse;
                fromProtoMsg(message: _20.StatusResponseProtoMsg): _20.StatusResponse;
                toProto(message: _20.StatusResponse): Uint8Array;
                toProtoMsg(message: _20.StatusResponse): _20.StatusResponseProtoMsg;
            };
            WhitelistRequest: {
                typeUrl: string;
                encode(message: _20.WhitelistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.WhitelistRequest;
                fromPartial(object: Partial<_20.WhitelistRequest>): _20.WhitelistRequest;
                fromAmino(object: _20.WhitelistRequestAmino): _20.WhitelistRequest;
                toAmino(message: _20.WhitelistRequest): _20.WhitelistRequestAmino;
                fromAminoMsg(object: _20.WhitelistRequestAminoMsg): _20.WhitelistRequest;
                fromProtoMsg(message: _20.WhitelistRequestProtoMsg): _20.WhitelistRequest;
                toProto(message: _20.WhitelistRequest): Uint8Array;
                toProtoMsg(message: _20.WhitelistRequest): _20.WhitelistRequestProtoMsg;
            };
            WhitelistResponse: {
                typeUrl: string;
                encode(message: _20.WhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.WhitelistResponse;
                fromPartial(object: Partial<_20.WhitelistResponse>): _20.WhitelistResponse;
                fromAmino(object: _20.WhitelistResponseAmino): _20.WhitelistResponse;
                toAmino(message: _20.WhitelistResponse): _20.WhitelistResponseAmino;
                fromAminoMsg(object: _20.WhitelistResponseAminoMsg): _20.WhitelistResponse;
                fromProtoMsg(message: _20.WhitelistResponseProtoMsg): _20.WhitelistResponse;
                toProto(message: _20.WhitelistResponse): Uint8Array;
                toProtoMsg(message: _20.WhitelistResponse): _20.WhitelistResponseProtoMsg;
            };
            GetSQParamsRequest: {
                typeUrl: string;
                encode(message: _20.GetSQParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.GetSQParamsRequest;
                fromPartial(object: Partial<_20.GetSQParamsRequest>): _20.GetSQParamsRequest;
                fromAmino(object: _20.GetSQParamsRequestAmino): _20.GetSQParamsRequest;
                toAmino(message: _20.GetSQParamsRequest): _20.GetSQParamsRequestAmino;
                fromAminoMsg(object: _20.GetSQParamsRequestAminoMsg): _20.GetSQParamsRequest;
                fromProtoMsg(message: _20.GetSQParamsRequestProtoMsg): _20.GetSQParamsRequest;
                toProto(message: _20.GetSQParamsRequest): Uint8Array;
                toProtoMsg(message: _20.GetSQParamsRequest): _20.GetSQParamsRequestProtoMsg;
            };
            GetSQParamsResponse: {
                typeUrl: string;
                encode(message: _20.GetSQParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.GetSQParamsResponse;
                fromPartial(object: Partial<_20.GetSQParamsResponse>): _20.GetSQParamsResponse;
                fromAmino(object: _20.GetSQParamsResponseAmino): _20.GetSQParamsResponse;
                toAmino(message: _20.GetSQParamsResponse): _20.GetSQParamsResponseAmino;
                fromAminoMsg(object: _20.GetSQParamsResponseAminoMsg): _20.GetSQParamsResponse;
                fromProtoMsg(message: _20.GetSQParamsResponseProtoMsg): _20.GetSQParamsResponse;
                toProto(message: _20.GetSQParamsResponse): Uint8Array;
                toProtoMsg(message: _20.GetSQParamsResponse): _20.GetSQParamsResponseProtoMsg;
            };
            IsWhitelistedRequest: {
                typeUrl: string;
                encode(message: _20.IsWhitelistedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.IsWhitelistedRequest;
                fromPartial(object: Partial<_20.IsWhitelistedRequest>): _20.IsWhitelistedRequest;
                fromAmino(object: _20.IsWhitelistedRequestAmino): _20.IsWhitelistedRequest;
                toAmino(message: _20.IsWhitelistedRequest): _20.IsWhitelistedRequestAmino;
                fromAminoMsg(object: _20.IsWhitelistedRequestAminoMsg): _20.IsWhitelistedRequest;
                fromProtoMsg(message: _20.IsWhitelistedRequestProtoMsg): _20.IsWhitelistedRequest;
                toProto(message: _20.IsWhitelistedRequest): Uint8Array;
                toProtoMsg(message: _20.IsWhitelistedRequest): _20.IsWhitelistedRequestProtoMsg;
            };
            IsWhitelistedResponse: {
                typeUrl: string;
                encode(message: _20.IsWhitelistedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.IsWhitelistedResponse;
                fromPartial(object: Partial<_20.IsWhitelistedResponse>): _20.IsWhitelistedResponse;
                fromAmino(object: _20.IsWhitelistedResponseAmino): _20.IsWhitelistedResponse;
                toAmino(message: _20.IsWhitelistedResponse): _20.IsWhitelistedResponseAmino;
                fromAminoMsg(object: _20.IsWhitelistedResponseAminoMsg): _20.IsWhitelistedResponse;
                fromProtoMsg(message: _20.IsWhitelistedResponseProtoMsg): _20.IsWhitelistedResponse;
                toProto(message: _20.IsWhitelistedResponse): Uint8Array;
                toProtoMsg(message: _20.IsWhitelistedResponse): _20.IsWhitelistedResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _19.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.Params;
                fromPartial(object: Partial<_19.Params>): _19.Params;
                fromAmino(object: _19.ParamsAmino): _19.Params;
                toAmino(message: _19.Params): _19.ParamsAmino;
                fromAminoMsg(object: _19.ParamsAminoMsg): _19.Params;
                fromProtoMsg(message: _19.ParamsProtoMsg): _19.Params;
                toProto(message: _19.Params): Uint8Array;
                toProtoMsg(message: _19.Params): _19.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _18.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
                fromAmino(object: _18.GenesisStateAmino): _18.GenesisState;
                toAmino(message: _18.GenesisState): _18.GenesisStateAmino;
                fromAminoMsg(object: _18.GenesisStateAminoMsg): _18.GenesisState;
                fromProtoMsg(message: _18.GenesisStateProtoMsg): _18.GenesisState;
                toProto(message: _18.GenesisState): Uint8Array;
                toProtoMsg(message: _18.GenesisState): _18.GenesisStateProtoMsg;
            };
        };
    }
    namespace oracle {
        const v1: {
            statusTextFromJSON(object: any): _24.StatusText;
            statusTextToJSON(object: _24.StatusText): string;
            StatusText: typeof _24.StatusText;
            StatusTextSDKType: typeof _24.StatusText;
            StatusTextAmino: typeof _24.StatusText;
            Claim: {
                typeUrl: string;
                encode(message: _24.Claim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Claim;
                fromPartial(object: Partial<_24.Claim>): _24.Claim;
                fromAmino(object: _24.ClaimAmino): _24.Claim;
                toAmino(message: _24.Claim): _24.ClaimAmino;
                fromAminoMsg(object: _24.ClaimAminoMsg): _24.Claim;
                fromProtoMsg(message: _24.ClaimProtoMsg): _24.Claim;
                toProto(message: _24.Claim): Uint8Array;
                toProtoMsg(message: _24.Claim): _24.ClaimProtoMsg;
            };
            DBProphecy: {
                typeUrl: string;
                encode(message: _24.DBProphecy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.DBProphecy;
                fromPartial(object: Partial<_24.DBProphecy>): _24.DBProphecy;
                fromAmino(object: _24.DBProphecyAmino): _24.DBProphecy;
                toAmino(message: _24.DBProphecy): _24.DBProphecyAmino;
                fromAminoMsg(object: _24.DBProphecyAminoMsg): _24.DBProphecy;
                fromProtoMsg(message: _24.DBProphecyProtoMsg): _24.DBProphecy;
                toProto(message: _24.DBProphecy): Uint8Array;
                toProtoMsg(message: _24.DBProphecy): _24.DBProphecyProtoMsg;
            };
            Status: {
                typeUrl: string;
                encode(message: _24.Status, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Status;
                fromPartial(object: Partial<_24.Status>): _24.Status;
                fromAmino(object: _24.StatusAmino): _24.Status;
                toAmino(message: _24.Status): _24.StatusAmino;
                fromAminoMsg(object: _24.StatusAminoMsg): _24.Status;
                fromProtoMsg(message: _24.StatusProtoMsg): _24.Status;
                toProto(message: _24.Status): Uint8Array;
                toProtoMsg(message: _24.Status): _24.StatusProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _23.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.GenesisState;
                fromPartial(object: Partial<_23.GenesisState>): _23.GenesisState;
                fromAmino(object: _23.GenesisStateAmino): _23.GenesisState;
                toAmino(message: _23.GenesisState): _23.GenesisStateAmino;
                fromAminoMsg(object: _23.GenesisStateAminoMsg): _23.GenesisState;
                fromProtoMsg(message: _23.GenesisStateProtoMsg): _23.GenesisState;
                toProto(message: _23.GenesisState): Uint8Array;
                toProtoMsg(message: _23.GenesisState): _23.GenesisStateProtoMsg;
            };
        };
    }
    namespace tokenregistry {
        const v1: {
            MsgClientImpl: typeof _148.MsgClientImpl;
            QueryClientImpl: typeof _142.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                entries(request?: _26.QueryEntriesRequest): Promise<_26.QueryEntriesResponse>;
            };
            LCDQueryClient: typeof _135.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    register(value: _27.MsgRegister): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deregister(value: _27.MsgDeregister): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setRegistry(value: _27.MsgSetRegistry): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    register(value: _27.MsgRegister): {
                        typeUrl: string;
                        value: _27.MsgRegister;
                    };
                    deregister(value: _27.MsgDeregister): {
                        typeUrl: string;
                        value: _27.MsgDeregister;
                    };
                    setRegistry(value: _27.MsgSetRegistry): {
                        typeUrl: string;
                        value: _27.MsgSetRegistry;
                    };
                };
                fromJSON: {
                    register(value: any): {
                        typeUrl: string;
                        value: _27.MsgRegister;
                    };
                    deregister(value: any): {
                        typeUrl: string;
                        value: _27.MsgDeregister;
                    };
                    setRegistry(value: any): {
                        typeUrl: string;
                        value: _27.MsgSetRegistry;
                    };
                };
                fromPartial: {
                    register(value: _27.MsgRegister): {
                        typeUrl: string;
                        value: _27.MsgRegister;
                    };
                    deregister(value: _27.MsgDeregister): {
                        typeUrl: string;
                        value: _27.MsgDeregister;
                    };
                    setRegistry(value: _27.MsgSetRegistry): {
                        typeUrl: string;
                        value: _27.MsgSetRegistry;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.tokenregistry.v1.MsgRegister": {
                    aminoType: string;
                    toAmino: (message: _27.MsgRegister) => _27.MsgRegisterAmino;
                    fromAmino: (object: _27.MsgRegisterAmino) => _27.MsgRegister;
                };
                "/sifnode.tokenregistry.v1.MsgDeregister": {
                    aminoType: string;
                    toAmino: (message: _27.MsgDeregister) => _27.MsgDeregisterAmino;
                    fromAmino: (object: _27.MsgDeregisterAmino) => _27.MsgDeregister;
                };
                "/sifnode.tokenregistry.v1.MsgSetRegistry": {
                    aminoType: string;
                    toAmino: (message: _27.MsgSetRegistry) => _27.MsgSetRegistryAmino;
                    fromAmino: (object: _27.MsgSetRegistryAmino) => _27.MsgSetRegistry;
                };
            };
            permissionFromJSON(object: any): _28.Permission;
            permissionToJSON(object: _28.Permission): string;
            Permission: typeof _28.Permission;
            PermissionSDKType: typeof _28.Permission;
            PermissionAmino: typeof _28.Permission;
            SifnodeTokenRegistry: {
                typeUrl: string;
                encode(message: _28.SifnodeTokenRegistry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.SifnodeTokenRegistry;
                fromPartial(object: Partial<_28.SifnodeTokenRegistry>): _28.SifnodeTokenRegistry;
                fromAmino(object: _28.SifnodeTokenRegistryAmino): _28.SifnodeTokenRegistry;
                toAmino(message: _28.SifnodeTokenRegistry): _28.SifnodeTokenRegistryAmino;
                fromAminoMsg(object: _28.SifnodeTokenRegistryAminoMsg): _28.SifnodeTokenRegistry;
                fromProtoMsg(message: _28.SifnodeTokenRegistryProtoMsg): _28.SifnodeTokenRegistry;
                toProto(message: _28.SifnodeTokenRegistry): Uint8Array;
                toProtoMsg(message: _28.SifnodeTokenRegistry): _28.SifnodeTokenRegistryProtoMsg;
            };
            RegistryEntry: {
                typeUrl: string;
                encode(message: _28.RegistryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.RegistryEntry;
                fromPartial(object: Partial<_28.RegistryEntry>): _28.RegistryEntry;
                fromAmino(object: _28.RegistryEntryAmino): _28.RegistryEntry;
                toAmino(message: _28.RegistryEntry): _28.RegistryEntryAmino;
                fromAminoMsg(object: _28.RegistryEntryAminoMsg): _28.RegistryEntry;
                fromProtoMsg(message: _28.RegistryEntryProtoMsg): _28.RegistryEntry;
                toProto(message: _28.RegistryEntry): Uint8Array;
                toProtoMsg(message: _28.RegistryEntry): _28.RegistryEntryProtoMsg;
            };
            MsgRegister: {
                typeUrl: string;
                encode(message: _27.MsgRegister, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgRegister;
                fromPartial(object: Partial<_27.MsgRegister>): _27.MsgRegister;
                fromAmino(object: _27.MsgRegisterAmino): _27.MsgRegister;
                toAmino(message: _27.MsgRegister): _27.MsgRegisterAmino;
                fromAminoMsg(object: _27.MsgRegisterAminoMsg): _27.MsgRegister;
                fromProtoMsg(message: _27.MsgRegisterProtoMsg): _27.MsgRegister;
                toProto(message: _27.MsgRegister): Uint8Array;
                toProtoMsg(message: _27.MsgRegister): _27.MsgRegisterProtoMsg;
            };
            MsgRegisterResponse: {
                typeUrl: string;
                encode(_: _27.MsgRegisterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgRegisterResponse;
                fromPartial(_: Partial<_27.MsgRegisterResponse>): _27.MsgRegisterResponse;
                fromAmino(_: _27.MsgRegisterResponseAmino): _27.MsgRegisterResponse;
                toAmino(_: _27.MsgRegisterResponse): _27.MsgRegisterResponseAmino;
                fromAminoMsg(object: _27.MsgRegisterResponseAminoMsg): _27.MsgRegisterResponse;
                fromProtoMsg(message: _27.MsgRegisterResponseProtoMsg): _27.MsgRegisterResponse;
                toProto(message: _27.MsgRegisterResponse): Uint8Array;
                toProtoMsg(message: _27.MsgRegisterResponse): _27.MsgRegisterResponseProtoMsg;
            };
            MsgSetRegistry: {
                typeUrl: string;
                encode(message: _27.MsgSetRegistry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgSetRegistry;
                fromPartial(object: Partial<_27.MsgSetRegistry>): _27.MsgSetRegistry;
                fromAmino(object: _27.MsgSetRegistryAmino): _27.MsgSetRegistry;
                toAmino(message: _27.MsgSetRegistry): _27.MsgSetRegistryAmino;
                fromAminoMsg(object: _27.MsgSetRegistryAminoMsg): _27.MsgSetRegistry;
                fromProtoMsg(message: _27.MsgSetRegistryProtoMsg): _27.MsgSetRegistry;
                toProto(message: _27.MsgSetRegistry): Uint8Array;
                toProtoMsg(message: _27.MsgSetRegistry): _27.MsgSetRegistryProtoMsg;
            };
            MsgSetRegistryResponse: {
                typeUrl: string;
                encode(_: _27.MsgSetRegistryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgSetRegistryResponse;
                fromPartial(_: Partial<_27.MsgSetRegistryResponse>): _27.MsgSetRegistryResponse;
                fromAmino(_: _27.MsgSetRegistryResponseAmino): _27.MsgSetRegistryResponse;
                toAmino(_: _27.MsgSetRegistryResponse): _27.MsgSetRegistryResponseAmino;
                fromAminoMsg(object: _27.MsgSetRegistryResponseAminoMsg): _27.MsgSetRegistryResponse;
                fromProtoMsg(message: _27.MsgSetRegistryResponseProtoMsg): _27.MsgSetRegistryResponse;
                toProto(message: _27.MsgSetRegistryResponse): Uint8Array;
                toProtoMsg(message: _27.MsgSetRegistryResponse): _27.MsgSetRegistryResponseProtoMsg;
            };
            MsgDeregister: {
                typeUrl: string;
                encode(message: _27.MsgDeregister, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgDeregister;
                fromPartial(object: Partial<_27.MsgDeregister>): _27.MsgDeregister;
                fromAmino(object: _27.MsgDeregisterAmino): _27.MsgDeregister;
                toAmino(message: _27.MsgDeregister): _27.MsgDeregisterAmino;
                fromAminoMsg(object: _27.MsgDeregisterAminoMsg): _27.MsgDeregister;
                fromProtoMsg(message: _27.MsgDeregisterProtoMsg): _27.MsgDeregister;
                toProto(message: _27.MsgDeregister): Uint8Array;
                toProtoMsg(message: _27.MsgDeregister): _27.MsgDeregisterProtoMsg;
            };
            MsgDeregisterResponse: {
                typeUrl: string;
                encode(_: _27.MsgDeregisterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgDeregisterResponse;
                fromPartial(_: Partial<_27.MsgDeregisterResponse>): _27.MsgDeregisterResponse;
                fromAmino(_: _27.MsgDeregisterResponseAmino): _27.MsgDeregisterResponse;
                toAmino(_: _27.MsgDeregisterResponse): _27.MsgDeregisterResponseAmino;
                fromAminoMsg(object: _27.MsgDeregisterResponseAminoMsg): _27.MsgDeregisterResponse;
                fromProtoMsg(message: _27.MsgDeregisterResponseProtoMsg): _27.MsgDeregisterResponse;
                toProto(message: _27.MsgDeregisterResponse): Uint8Array;
                toProtoMsg(message: _27.MsgDeregisterResponse): _27.MsgDeregisterResponseProtoMsg;
            };
            QueryEntriesResponse: {
                typeUrl: string;
                encode(message: _26.QueryEntriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryEntriesResponse;
                fromPartial(object: Partial<_26.QueryEntriesResponse>): _26.QueryEntriesResponse;
                fromAmino(object: _26.QueryEntriesResponseAmino): _26.QueryEntriesResponse;
                toAmino(message: _26.QueryEntriesResponse): _26.QueryEntriesResponseAmino;
                fromAminoMsg(object: _26.QueryEntriesResponseAminoMsg): _26.QueryEntriesResponse;
                fromProtoMsg(message: _26.QueryEntriesResponseProtoMsg): _26.QueryEntriesResponse;
                toProto(message: _26.QueryEntriesResponse): Uint8Array;
                toProtoMsg(message: _26.QueryEntriesResponse): _26.QueryEntriesResponseProtoMsg;
            };
            QueryEntriesRequest: {
                typeUrl: string;
                encode(_: _26.QueryEntriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryEntriesRequest;
                fromPartial(_: Partial<_26.QueryEntriesRequest>): _26.QueryEntriesRequest;
                fromAmino(_: _26.QueryEntriesRequestAmino): _26.QueryEntriesRequest;
                toAmino(_: _26.QueryEntriesRequest): _26.QueryEntriesRequestAmino;
                fromAminoMsg(object: _26.QueryEntriesRequestAminoMsg): _26.QueryEntriesRequest;
                fromProtoMsg(message: _26.QueryEntriesRequestProtoMsg): _26.QueryEntriesRequest;
                toProto(message: _26.QueryEntriesRequest): Uint8Array;
                toProtoMsg(message: _26.QueryEntriesRequest): _26.QueryEntriesRequestProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _25.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
                fromAmino(object: _25.GenesisStateAmino): _25.GenesisState;
                toAmino(message: _25.GenesisState): _25.GenesisStateAmino;
                fromAminoMsg(object: _25.GenesisStateAminoMsg): _25.GenesisState;
                fromProtoMsg(message: _25.GenesisStateProtoMsg): _25.GenesisState;
                toProto(message: _25.GenesisState): Uint8Array;
                toProtoMsg(message: _25.GenesisState): _25.GenesisStateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            sifnode: {
                admin: {
                    v1: _143.MsgClientImpl;
                };
                clp: {
                    v1: _144.MsgClientImpl;
                };
                dispensation: {
                    v1: _145.MsgClientImpl;
                };
                ethbridge: {
                    v1: _146.MsgClientImpl;
                };
                margin: {
                    v1: _147.MsgClientImpl;
                };
                tokenregistry: {
                    v1: _148.MsgClientImpl;
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
            sifnode: {
                admin: {
                    v1: {
                        listAccounts(request?: _0.ListAccountsRequest): Promise<_0.ListAccountsResponse>;
                        getParams(request?: _0.GetParamsRequest): Promise<_0.GetParamsResponse>;
                    };
                };
                clp: {
                    v1: {
                        getPool(request: _5.PoolReq): Promise<_5.PoolRes>;
                        getPools(request?: _5.PoolsReq): Promise<_5.PoolsRes>;
                        getLiquidityProvider(request: _5.LiquidityProviderReq): Promise<_5.LiquidityProviderRes>;
                        getLiquidityProviderData(request: _5.LiquidityProviderDataReq): Promise<_5.LiquidityProviderDataRes>;
                        getAssetList(request: _5.AssetListReq): Promise<_5.AssetListRes>;
                        getLiquidityProviders(request?: _5.LiquidityProvidersReq): Promise<_5.LiquidityProvidersRes>;
                        getLiquidityProviderList(request: _5.LiquidityProviderListReq): Promise<_5.LiquidityProviderListRes>;
                        getParams(request?: _5.ParamsReq): Promise<_5.ParamsRes>;
                        getRewardParams(request?: _5.RewardParamsReq): Promise<_5.RewardParamsRes>;
                        getPmtpParams(request?: _5.PmtpParamsReq): Promise<_5.PmtpParamsRes>;
                        getLiquidityProtectionParams(request?: _5.LiquidityProtectionParamsReq): Promise<_5.LiquidityProtectionParamsRes>;
                        getProviderDistributionParams(request?: _5.ProviderDistributionParamsReq): Promise<_5.ProviderDistributionParamsRes>;
                        getSwapFeeParams(request?: _5.SwapFeeParamsReq): Promise<_5.SwapFeeParamsRes>;
                        getPoolShareEstimate(request: _5.PoolShareEstimateReq): Promise<_5.PoolShareEstimateRes>;
                        getRewardsBucket(request: _5.RewardsBucketReq): Promise<_5.RewardsBucketRes>;
                        getRewardsBucketAll(request?: _5.AllRewardsBucketReq): Promise<_5.AllRewardsBucketRes>;
                    };
                };
                dispensation: {
                    v1: {
                        allDistributions(request?: _9.QueryAllDistributionsRequest): Promise<_9.QueryAllDistributionsResponse>;
                        recordsByDistributionName(request: _9.QueryRecordsByDistributionNameRequest): Promise<_9.QueryRecordsByDistributionNameResponse>;
                        recordsByRecipient(request: _9.QueryRecordsByRecipientAddrRequest): Promise<_9.QueryRecordsByRecipientAddrResponse>;
                        claimsByType(request: _9.QueryClaimsByTypeRequest): Promise<_9.QueryClaimsResponse>;
                    };
                };
                epochs: {
                    v1: {
                        epochInfos(request?: _13.QueryEpochsInfoRequest): Promise<_13.QueryEpochsInfoResponse>;
                        currentEpoch(request: _13.QueryCurrentEpochRequest): Promise<_13.QueryCurrentEpochResponse>;
                    };
                };
                ethbridge: {
                    v1: {
                        ethProphecy(request: _15.QueryEthProphecyRequest): Promise<_15.QueryEthProphecyResponse>;
                        getBlacklist(request?: _15.QueryBlacklistRequest): Promise<_15.QueryBlacklistResponse>;
                        getPauseStatus(request?: _15.QueryPauseRequest): Promise<_15.QueryPauseResponse>;
                    };
                };
                margin: {
                    v1: {
                        getMTP(request: _20.MTPRequest): Promise<_20.MTPResponse>;
                        getPositions(request?: _20.PositionsRequest): Promise<_20.PositionsResponse>;
                        getPositionsForAddress(request: _20.PositionsForAddressRequest): Promise<_20.PositionsForAddressResponse>;
                        getPositionsByPool(request: _20.PositionsByPoolRequest): Promise<_20.PositionsByPoolResponse>;
                        getParams(request?: _20.ParamsRequest): Promise<_20.ParamsResponse>;
                        getStatus(request?: _20.StatusRequest): Promise<_20.StatusResponse>;
                        getSQParams(request: _20.GetSQParamsRequest): Promise<_20.GetSQParamsResponse>;
                        getWhitelist(request?: _20.WhitelistRequest): Promise<_20.WhitelistResponse>;
                        isWhitelisted(request: _20.IsWhitelistedRequest): Promise<_20.IsWhitelistedResponse>;
                    };
                };
                tokenregistry: {
                    v1: {
                        entries(request?: _26.QueryEntriesRequest): Promise<_26.QueryEntriesResponse>;
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
            sifnode: {
                clp: {
                    v1: _132.LCDQueryClient;
                };
                epochs: {
                    v1: _133.LCDQueryClient;
                };
                margin: {
                    v1: _134.LCDQueryClient;
                };
                tokenregistry: {
                    v1: _135.LCDQueryClient;
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
