import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgIncreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgReclaimLockedFunds, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/injective.exchange.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: MsgDeposit) => import("./tx").MsgDepositAmino;
        fromAmino: (object: import("./tx").MsgDepositAmino) => MsgDeposit;
    };
    "/injective.exchange.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: MsgWithdraw) => import("./tx").MsgWithdrawAmino;
        fromAmino: (object: import("./tx").MsgWithdrawAmino) => MsgWithdraw;
    };
    "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
        aminoType: string;
        toAmino: (message: MsgInstantSpotMarketLaunch) => import("./tx").MsgInstantSpotMarketLaunchAmino;
        fromAmino: (object: import("./tx").MsgInstantSpotMarketLaunchAmino) => MsgInstantSpotMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
        aminoType: string;
        toAmino: (message: MsgInstantPerpetualMarketLaunch) => import("./tx").MsgInstantPerpetualMarketLaunchAmino;
        fromAmino: (object: import("./tx").MsgInstantPerpetualMarketLaunchAmino) => MsgInstantPerpetualMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
        aminoType: string;
        toAmino: (message: MsgInstantExpiryFuturesMarketLaunch) => import("./tx").MsgInstantExpiryFuturesMarketLaunchAmino;
        fromAmino: (object: import("./tx").MsgInstantExpiryFuturesMarketLaunchAmino) => MsgInstantExpiryFuturesMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
        aminoType: string;
        toAmino: (message: MsgCreateSpotLimitOrder) => import("./tx").MsgCreateSpotLimitOrderAmino;
        fromAmino: (object: import("./tx").MsgCreateSpotLimitOrderAmino) => MsgCreateSpotLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
        aminoType: string;
        toAmino: (message: MsgBatchCreateSpotLimitOrders) => import("./tx").MsgBatchCreateSpotLimitOrdersAmino;
        fromAmino: (object: import("./tx").MsgBatchCreateSpotLimitOrdersAmino) => MsgBatchCreateSpotLimitOrders;
    };
    "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
        aminoType: string;
        toAmino: (message: MsgCreateSpotMarketOrder) => import("./tx").MsgCreateSpotMarketOrderAmino;
        fromAmino: (object: import("./tx").MsgCreateSpotMarketOrderAmino) => MsgCreateSpotMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
        aminoType: string;
        toAmino: (message: MsgCancelSpotOrder) => import("./tx").MsgCancelSpotOrderAmino;
        fromAmino: (object: import("./tx").MsgCancelSpotOrderAmino) => MsgCancelSpotOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
        aminoType: string;
        toAmino: (message: MsgBatchCancelSpotOrders) => import("./tx").MsgBatchCancelSpotOrdersAmino;
        fromAmino: (object: import("./tx").MsgBatchCancelSpotOrdersAmino) => MsgBatchCancelSpotOrders;
    };
    "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
        aminoType: string;
        toAmino: (message: MsgBatchUpdateOrders) => import("./tx").MsgBatchUpdateOrdersAmino;
        fromAmino: (object: import("./tx").MsgBatchUpdateOrdersAmino) => MsgBatchUpdateOrders;
    };
    "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract": {
        aminoType: string;
        toAmino: (message: MsgPrivilegedExecuteContract) => import("./tx").MsgPrivilegedExecuteContractAmino;
        fromAmino: (object: import("./tx").MsgPrivilegedExecuteContractAmino) => MsgPrivilegedExecuteContract;
    };
    "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
        aminoType: string;
        toAmino: (message: MsgCreateDerivativeLimitOrder) => import("./tx").MsgCreateDerivativeLimitOrderAmino;
        fromAmino: (object: import("./tx").MsgCreateDerivativeLimitOrderAmino) => MsgCreateDerivativeLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
        aminoType: string;
        toAmino: (message: MsgBatchCreateDerivativeLimitOrders) => import("./tx").MsgBatchCreateDerivativeLimitOrdersAmino;
        fromAmino: (object: import("./tx").MsgBatchCreateDerivativeLimitOrdersAmino) => MsgBatchCreateDerivativeLimitOrders;
    };
    "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
        aminoType: string;
        toAmino: (message: MsgCreateDerivativeMarketOrder) => import("./tx").MsgCreateDerivativeMarketOrderAmino;
        fromAmino: (object: import("./tx").MsgCreateDerivativeMarketOrderAmino) => MsgCreateDerivativeMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
        aminoType: string;
        toAmino: (message: MsgCancelDerivativeOrder) => import("./tx").MsgCancelDerivativeOrderAmino;
        fromAmino: (object: import("./tx").MsgCancelDerivativeOrderAmino) => MsgCancelDerivativeOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
        aminoType: string;
        toAmino: (message: MsgBatchCancelDerivativeOrders) => import("./tx").MsgBatchCancelDerivativeOrdersAmino;
        fromAmino: (object: import("./tx").MsgBatchCancelDerivativeOrdersAmino) => MsgBatchCancelDerivativeOrders;
    };
    "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
        aminoType: string;
        toAmino: (message: MsgInstantBinaryOptionsMarketLaunch) => import("./tx").MsgInstantBinaryOptionsMarketLaunchAmino;
        fromAmino: (object: import("./tx").MsgInstantBinaryOptionsMarketLaunchAmino) => MsgInstantBinaryOptionsMarketLaunch;
    };
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
        aminoType: string;
        toAmino: (message: MsgCreateBinaryOptionsLimitOrder) => import("./tx").MsgCreateBinaryOptionsLimitOrderAmino;
        fromAmino: (object: import("./tx").MsgCreateBinaryOptionsLimitOrderAmino) => MsgCreateBinaryOptionsLimitOrder;
    };
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
        aminoType: string;
        toAmino: (message: MsgCreateBinaryOptionsMarketOrder) => import("./tx").MsgCreateBinaryOptionsMarketOrderAmino;
        fromAmino: (object: import("./tx").MsgCreateBinaryOptionsMarketOrderAmino) => MsgCreateBinaryOptionsMarketOrder;
    };
    "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
        aminoType: string;
        toAmino: (message: MsgCancelBinaryOptionsOrder) => import("./tx").MsgCancelBinaryOptionsOrderAmino;
        fromAmino: (object: import("./tx").MsgCancelBinaryOptionsOrderAmino) => MsgCancelBinaryOptionsOrder;
    };
    "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
        aminoType: string;
        toAmino: (message: MsgBatchCancelBinaryOptionsOrders) => import("./tx").MsgBatchCancelBinaryOptionsOrdersAmino;
        fromAmino: (object: import("./tx").MsgBatchCancelBinaryOptionsOrdersAmino) => MsgBatchCancelBinaryOptionsOrders;
    };
    "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
        aminoType: string;
        toAmino: (message: MsgSubaccountTransfer) => import("./tx").MsgSubaccountTransferAmino;
        fromAmino: (object: import("./tx").MsgSubaccountTransferAmino) => MsgSubaccountTransfer;
    };
    "/injective.exchange.v1beta1.MsgExternalTransfer": {
        aminoType: string;
        toAmino: (message: MsgExternalTransfer) => import("./tx").MsgExternalTransferAmino;
        fromAmino: (object: import("./tx").MsgExternalTransferAmino) => MsgExternalTransfer;
    };
    "/injective.exchange.v1beta1.MsgLiquidatePosition": {
        aminoType: string;
        toAmino: (message: MsgLiquidatePosition) => import("./tx").MsgLiquidatePositionAmino;
        fromAmino: (object: import("./tx").MsgLiquidatePositionAmino) => MsgLiquidatePosition;
    };
    "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
        aminoType: string;
        toAmino: (message: MsgIncreasePositionMargin) => import("./tx").MsgIncreasePositionMarginAmino;
        fromAmino: (object: import("./tx").MsgIncreasePositionMarginAmino) => MsgIncreasePositionMargin;
    };
    "/injective.exchange.v1beta1.MsgRewardsOptOut": {
        aminoType: string;
        toAmino: (message: MsgRewardsOptOut) => import("./tx").MsgRewardsOptOutAmino;
        fromAmino: (object: import("./tx").MsgRewardsOptOutAmino) => MsgRewardsOptOut;
    };
    "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
        aminoType: string;
        toAmino: (message: MsgAdminUpdateBinaryOptionsMarket) => import("./tx").MsgAdminUpdateBinaryOptionsMarketAmino;
        fromAmino: (object: import("./tx").MsgAdminUpdateBinaryOptionsMarketAmino) => MsgAdminUpdateBinaryOptionsMarket;
    };
    "/injective.exchange.v1beta1.MsgReclaimLockedFunds": {
        aminoType: string;
        toAmino: (message: MsgReclaimLockedFunds) => import("./tx").MsgReclaimLockedFundsAmino;
        fromAmino: (object: import("./tx").MsgReclaimLockedFundsAmino) => MsgReclaimLockedFunds;
    };
    "/injective.exchange.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
