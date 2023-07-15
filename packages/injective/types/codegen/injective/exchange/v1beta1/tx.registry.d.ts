import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgPrivilegedExecuteContract, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgIncreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket, MsgReclaimLockedFunds, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: Uint8Array;
        };
        instantSpotMarketLaunch(value: MsgInstantSpotMarketLaunch): {
            typeUrl: string;
            value: Uint8Array;
        };
        instantPerpetualMarketLaunch(value: MsgInstantPerpetualMarketLaunch): {
            typeUrl: string;
            value: Uint8Array;
        };
        instantExpiryFuturesMarketLaunch(value: MsgInstantExpiryFuturesMarketLaunch): {
            typeUrl: string;
            value: Uint8Array;
        };
        createSpotLimitOrder(value: MsgCreateSpotLimitOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        batchCreateSpotLimitOrders(value: MsgBatchCreateSpotLimitOrders): {
            typeUrl: string;
            value: Uint8Array;
        };
        createSpotMarketOrder(value: MsgCreateSpotMarketOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelSpotOrder(value: MsgCancelSpotOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        batchCancelSpotOrders(value: MsgBatchCancelSpotOrders): {
            typeUrl: string;
            value: Uint8Array;
        };
        batchUpdateOrders(value: MsgBatchUpdateOrders): {
            typeUrl: string;
            value: Uint8Array;
        };
        privilegedExecuteContract(value: MsgPrivilegedExecuteContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        createDerivativeLimitOrder(value: MsgCreateDerivativeLimitOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        batchCreateDerivativeLimitOrders(value: MsgBatchCreateDerivativeLimitOrders): {
            typeUrl: string;
            value: Uint8Array;
        };
        createDerivativeMarketOrder(value: MsgCreateDerivativeMarketOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelDerivativeOrder(value: MsgCancelDerivativeOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        batchCancelDerivativeOrders(value: MsgBatchCancelDerivativeOrders): {
            typeUrl: string;
            value: Uint8Array;
        };
        instantBinaryOptionsMarketLaunch(value: MsgInstantBinaryOptionsMarketLaunch): {
            typeUrl: string;
            value: Uint8Array;
        };
        createBinaryOptionsLimitOrder(value: MsgCreateBinaryOptionsLimitOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        createBinaryOptionsMarketOrder(value: MsgCreateBinaryOptionsMarketOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelBinaryOptionsOrder(value: MsgCancelBinaryOptionsOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        batchCancelBinaryOptionsOrders(value: MsgBatchCancelBinaryOptionsOrders): {
            typeUrl: string;
            value: Uint8Array;
        };
        subaccountTransfer(value: MsgSubaccountTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
        externalTransfer(value: MsgExternalTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
        liquidatePosition(value: MsgLiquidatePosition): {
            typeUrl: string;
            value: Uint8Array;
        };
        increasePositionMargin(value: MsgIncreasePositionMargin): {
            typeUrl: string;
            value: Uint8Array;
        };
        rewardsOptOut(value: MsgRewardsOptOut): {
            typeUrl: string;
            value: Uint8Array;
        };
        adminUpdateBinaryOptionsMarket(value: MsgAdminUpdateBinaryOptionsMarket): {
            typeUrl: string;
            value: Uint8Array;
        };
        reclaimLockedFunds(value: MsgReclaimLockedFunds): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        instantSpotMarketLaunch(value: MsgInstantSpotMarketLaunch): {
            typeUrl: string;
            value: MsgInstantSpotMarketLaunch;
        };
        instantPerpetualMarketLaunch(value: MsgInstantPerpetualMarketLaunch): {
            typeUrl: string;
            value: MsgInstantPerpetualMarketLaunch;
        };
        instantExpiryFuturesMarketLaunch(value: MsgInstantExpiryFuturesMarketLaunch): {
            typeUrl: string;
            value: MsgInstantExpiryFuturesMarketLaunch;
        };
        createSpotLimitOrder(value: MsgCreateSpotLimitOrder): {
            typeUrl: string;
            value: MsgCreateSpotLimitOrder;
        };
        batchCreateSpotLimitOrders(value: MsgBatchCreateSpotLimitOrders): {
            typeUrl: string;
            value: MsgBatchCreateSpotLimitOrders;
        };
        createSpotMarketOrder(value: MsgCreateSpotMarketOrder): {
            typeUrl: string;
            value: MsgCreateSpotMarketOrder;
        };
        cancelSpotOrder(value: MsgCancelSpotOrder): {
            typeUrl: string;
            value: MsgCancelSpotOrder;
        };
        batchCancelSpotOrders(value: MsgBatchCancelSpotOrders): {
            typeUrl: string;
            value: MsgBatchCancelSpotOrders;
        };
        batchUpdateOrders(value: MsgBatchUpdateOrders): {
            typeUrl: string;
            value: MsgBatchUpdateOrders;
        };
        privilegedExecuteContract(value: MsgPrivilegedExecuteContract): {
            typeUrl: string;
            value: MsgPrivilegedExecuteContract;
        };
        createDerivativeLimitOrder(value: MsgCreateDerivativeLimitOrder): {
            typeUrl: string;
            value: MsgCreateDerivativeLimitOrder;
        };
        batchCreateDerivativeLimitOrders(value: MsgBatchCreateDerivativeLimitOrders): {
            typeUrl: string;
            value: MsgBatchCreateDerivativeLimitOrders;
        };
        createDerivativeMarketOrder(value: MsgCreateDerivativeMarketOrder): {
            typeUrl: string;
            value: MsgCreateDerivativeMarketOrder;
        };
        cancelDerivativeOrder(value: MsgCancelDerivativeOrder): {
            typeUrl: string;
            value: MsgCancelDerivativeOrder;
        };
        batchCancelDerivativeOrders(value: MsgBatchCancelDerivativeOrders): {
            typeUrl: string;
            value: MsgBatchCancelDerivativeOrders;
        };
        instantBinaryOptionsMarketLaunch(value: MsgInstantBinaryOptionsMarketLaunch): {
            typeUrl: string;
            value: MsgInstantBinaryOptionsMarketLaunch;
        };
        createBinaryOptionsLimitOrder(value: MsgCreateBinaryOptionsLimitOrder): {
            typeUrl: string;
            value: MsgCreateBinaryOptionsLimitOrder;
        };
        createBinaryOptionsMarketOrder(value: MsgCreateBinaryOptionsMarketOrder): {
            typeUrl: string;
            value: MsgCreateBinaryOptionsMarketOrder;
        };
        cancelBinaryOptionsOrder(value: MsgCancelBinaryOptionsOrder): {
            typeUrl: string;
            value: MsgCancelBinaryOptionsOrder;
        };
        batchCancelBinaryOptionsOrders(value: MsgBatchCancelBinaryOptionsOrders): {
            typeUrl: string;
            value: MsgBatchCancelBinaryOptionsOrders;
        };
        subaccountTransfer(value: MsgSubaccountTransfer): {
            typeUrl: string;
            value: MsgSubaccountTransfer;
        };
        externalTransfer(value: MsgExternalTransfer): {
            typeUrl: string;
            value: MsgExternalTransfer;
        };
        liquidatePosition(value: MsgLiquidatePosition): {
            typeUrl: string;
            value: MsgLiquidatePosition;
        };
        increasePositionMargin(value: MsgIncreasePositionMargin): {
            typeUrl: string;
            value: MsgIncreasePositionMargin;
        };
        rewardsOptOut(value: MsgRewardsOptOut): {
            typeUrl: string;
            value: MsgRewardsOptOut;
        };
        adminUpdateBinaryOptionsMarket(value: MsgAdminUpdateBinaryOptionsMarket): {
            typeUrl: string;
            value: MsgAdminUpdateBinaryOptionsMarket;
        };
        reclaimLockedFunds(value: MsgReclaimLockedFunds): {
            typeUrl: string;
            value: MsgReclaimLockedFunds;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        deposit(value: any): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: any): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        instantSpotMarketLaunch(value: any): {
            typeUrl: string;
            value: MsgInstantSpotMarketLaunch;
        };
        instantPerpetualMarketLaunch(value: any): {
            typeUrl: string;
            value: MsgInstantPerpetualMarketLaunch;
        };
        instantExpiryFuturesMarketLaunch(value: any): {
            typeUrl: string;
            value: MsgInstantExpiryFuturesMarketLaunch;
        };
        createSpotLimitOrder(value: any): {
            typeUrl: string;
            value: MsgCreateSpotLimitOrder;
        };
        batchCreateSpotLimitOrders(value: any): {
            typeUrl: string;
            value: MsgBatchCreateSpotLimitOrders;
        };
        createSpotMarketOrder(value: any): {
            typeUrl: string;
            value: MsgCreateSpotMarketOrder;
        };
        cancelSpotOrder(value: any): {
            typeUrl: string;
            value: MsgCancelSpotOrder;
        };
        batchCancelSpotOrders(value: any): {
            typeUrl: string;
            value: MsgBatchCancelSpotOrders;
        };
        batchUpdateOrders(value: any): {
            typeUrl: string;
            value: MsgBatchUpdateOrders;
        };
        privilegedExecuteContract(value: any): {
            typeUrl: string;
            value: MsgPrivilegedExecuteContract;
        };
        createDerivativeLimitOrder(value: any): {
            typeUrl: string;
            value: MsgCreateDerivativeLimitOrder;
        };
        batchCreateDerivativeLimitOrders(value: any): {
            typeUrl: string;
            value: MsgBatchCreateDerivativeLimitOrders;
        };
        createDerivativeMarketOrder(value: any): {
            typeUrl: string;
            value: MsgCreateDerivativeMarketOrder;
        };
        cancelDerivativeOrder(value: any): {
            typeUrl: string;
            value: MsgCancelDerivativeOrder;
        };
        batchCancelDerivativeOrders(value: any): {
            typeUrl: string;
            value: MsgBatchCancelDerivativeOrders;
        };
        instantBinaryOptionsMarketLaunch(value: any): {
            typeUrl: string;
            value: MsgInstantBinaryOptionsMarketLaunch;
        };
        createBinaryOptionsLimitOrder(value: any): {
            typeUrl: string;
            value: MsgCreateBinaryOptionsLimitOrder;
        };
        createBinaryOptionsMarketOrder(value: any): {
            typeUrl: string;
            value: MsgCreateBinaryOptionsMarketOrder;
        };
        cancelBinaryOptionsOrder(value: any): {
            typeUrl: string;
            value: MsgCancelBinaryOptionsOrder;
        };
        batchCancelBinaryOptionsOrders(value: any): {
            typeUrl: string;
            value: MsgBatchCancelBinaryOptionsOrders;
        };
        subaccountTransfer(value: any): {
            typeUrl: string;
            value: MsgSubaccountTransfer;
        };
        externalTransfer(value: any): {
            typeUrl: string;
            value: MsgExternalTransfer;
        };
        liquidatePosition(value: any): {
            typeUrl: string;
            value: MsgLiquidatePosition;
        };
        increasePositionMargin(value: any): {
            typeUrl: string;
            value: MsgIncreasePositionMargin;
        };
        rewardsOptOut(value: any): {
            typeUrl: string;
            value: MsgRewardsOptOut;
        };
        adminUpdateBinaryOptionsMarket(value: any): {
            typeUrl: string;
            value: MsgAdminUpdateBinaryOptionsMarket;
        };
        reclaimLockedFunds(value: any): {
            typeUrl: string;
            value: MsgReclaimLockedFunds;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        instantSpotMarketLaunch(value: MsgInstantSpotMarketLaunch): {
            typeUrl: string;
            value: MsgInstantSpotMarketLaunch;
        };
        instantPerpetualMarketLaunch(value: MsgInstantPerpetualMarketLaunch): {
            typeUrl: string;
            value: MsgInstantPerpetualMarketLaunch;
        };
        instantExpiryFuturesMarketLaunch(value: MsgInstantExpiryFuturesMarketLaunch): {
            typeUrl: string;
            value: MsgInstantExpiryFuturesMarketLaunch;
        };
        createSpotLimitOrder(value: MsgCreateSpotLimitOrder): {
            typeUrl: string;
            value: MsgCreateSpotLimitOrder;
        };
        batchCreateSpotLimitOrders(value: MsgBatchCreateSpotLimitOrders): {
            typeUrl: string;
            value: MsgBatchCreateSpotLimitOrders;
        };
        createSpotMarketOrder(value: MsgCreateSpotMarketOrder): {
            typeUrl: string;
            value: MsgCreateSpotMarketOrder;
        };
        cancelSpotOrder(value: MsgCancelSpotOrder): {
            typeUrl: string;
            value: MsgCancelSpotOrder;
        };
        batchCancelSpotOrders(value: MsgBatchCancelSpotOrders): {
            typeUrl: string;
            value: MsgBatchCancelSpotOrders;
        };
        batchUpdateOrders(value: MsgBatchUpdateOrders): {
            typeUrl: string;
            value: MsgBatchUpdateOrders;
        };
        privilegedExecuteContract(value: MsgPrivilegedExecuteContract): {
            typeUrl: string;
            value: MsgPrivilegedExecuteContract;
        };
        createDerivativeLimitOrder(value: MsgCreateDerivativeLimitOrder): {
            typeUrl: string;
            value: MsgCreateDerivativeLimitOrder;
        };
        batchCreateDerivativeLimitOrders(value: MsgBatchCreateDerivativeLimitOrders): {
            typeUrl: string;
            value: MsgBatchCreateDerivativeLimitOrders;
        };
        createDerivativeMarketOrder(value: MsgCreateDerivativeMarketOrder): {
            typeUrl: string;
            value: MsgCreateDerivativeMarketOrder;
        };
        cancelDerivativeOrder(value: MsgCancelDerivativeOrder): {
            typeUrl: string;
            value: MsgCancelDerivativeOrder;
        };
        batchCancelDerivativeOrders(value: MsgBatchCancelDerivativeOrders): {
            typeUrl: string;
            value: MsgBatchCancelDerivativeOrders;
        };
        instantBinaryOptionsMarketLaunch(value: MsgInstantBinaryOptionsMarketLaunch): {
            typeUrl: string;
            value: MsgInstantBinaryOptionsMarketLaunch;
        };
        createBinaryOptionsLimitOrder(value: MsgCreateBinaryOptionsLimitOrder): {
            typeUrl: string;
            value: MsgCreateBinaryOptionsLimitOrder;
        };
        createBinaryOptionsMarketOrder(value: MsgCreateBinaryOptionsMarketOrder): {
            typeUrl: string;
            value: MsgCreateBinaryOptionsMarketOrder;
        };
        cancelBinaryOptionsOrder(value: MsgCancelBinaryOptionsOrder): {
            typeUrl: string;
            value: MsgCancelBinaryOptionsOrder;
        };
        batchCancelBinaryOptionsOrders(value: MsgBatchCancelBinaryOptionsOrders): {
            typeUrl: string;
            value: MsgBatchCancelBinaryOptionsOrders;
        };
        subaccountTransfer(value: MsgSubaccountTransfer): {
            typeUrl: string;
            value: MsgSubaccountTransfer;
        };
        externalTransfer(value: MsgExternalTransfer): {
            typeUrl: string;
            value: MsgExternalTransfer;
        };
        liquidatePosition(value: MsgLiquidatePosition): {
            typeUrl: string;
            value: MsgLiquidatePosition;
        };
        increasePositionMargin(value: MsgIncreasePositionMargin): {
            typeUrl: string;
            value: MsgIncreasePositionMargin;
        };
        rewardsOptOut(value: MsgRewardsOptOut): {
            typeUrl: string;
            value: MsgRewardsOptOut;
        };
        adminUpdateBinaryOptionsMarket(value: MsgAdminUpdateBinaryOptionsMarket): {
            typeUrl: string;
            value: MsgAdminUpdateBinaryOptionsMarket;
        };
        reclaimLockedFunds(value: MsgReclaimLockedFunds): {
            typeUrl: string;
            value: MsgReclaimLockedFunds;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
