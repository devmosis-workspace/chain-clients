import { Rpc } from "../../../helpers";
import { MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse, MsgInstantSpotMarketLaunch, MsgInstantSpotMarketLaunchResponse, MsgInstantPerpetualMarketLaunch, MsgInstantPerpetualMarketLaunchResponse, MsgInstantExpiryFuturesMarketLaunch, MsgInstantExpiryFuturesMarketLaunchResponse, MsgCreateSpotLimitOrder, MsgCreateSpotLimitOrderResponse, MsgBatchCreateSpotLimitOrders, MsgBatchCreateSpotLimitOrdersResponse, MsgCreateSpotMarketOrder, MsgCreateSpotMarketOrderResponse, MsgCancelSpotOrder, MsgCancelSpotOrderResponse, MsgBatchCancelSpotOrders, MsgBatchCancelSpotOrdersResponse, MsgBatchUpdateOrders, MsgBatchUpdateOrdersResponse, MsgPrivilegedExecuteContract, MsgPrivilegedExecuteContractResponse, MsgCreateDerivativeLimitOrder, MsgCreateDerivativeLimitOrderResponse, MsgBatchCreateDerivativeLimitOrders, MsgBatchCreateDerivativeLimitOrdersResponse, MsgCreateDerivativeMarketOrder, MsgCreateDerivativeMarketOrderResponse, MsgCancelDerivativeOrder, MsgCancelDerivativeOrderResponse, MsgBatchCancelDerivativeOrders, MsgBatchCancelDerivativeOrdersResponse, MsgInstantBinaryOptionsMarketLaunch, MsgInstantBinaryOptionsMarketLaunchResponse, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsLimitOrderResponse, MsgCreateBinaryOptionsMarketOrder, MsgCreateBinaryOptionsMarketOrderResponse, MsgCancelBinaryOptionsOrder, MsgCancelBinaryOptionsOrderResponse, MsgBatchCancelBinaryOptionsOrders, MsgBatchCancelBinaryOptionsOrdersResponse, MsgSubaccountTransfer, MsgSubaccountTransferResponse, MsgExternalTransfer, MsgExternalTransferResponse, MsgLiquidatePosition, MsgLiquidatePositionResponse, MsgIncreasePositionMargin, MsgIncreasePositionMarginResponse, MsgRewardsOptOut, MsgRewardsOptOutResponse, MsgAdminUpdateBinaryOptionsMarket, MsgAdminUpdateBinaryOptionsMarketResponse, MsgReclaimLockedFunds, MsgReclaimLockedFundsResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the exchange Msg service. */
export interface Msg {
    /**
     * Deposit defines a method for transferring coins from the sender's bank
     * balance into the subaccount's exchange deposits
     */
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    /**
     * Withdraw defines a method for withdrawing coins from a subaccount's
     * deposits to the user's bank balance
     */
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    /**
     * InstantSpotMarketLaunch defines method for creating a spot market by paying
     * listing fee without governance
     */
    instantSpotMarketLaunch(request: MsgInstantSpotMarketLaunch): Promise<MsgInstantSpotMarketLaunchResponse>;
    /**
     * InstantPerpetualMarketLaunch defines a method for creating a new perpetual
     * futures market by paying listing fee without governance
     */
    instantPerpetualMarketLaunch(request: MsgInstantPerpetualMarketLaunch): Promise<MsgInstantPerpetualMarketLaunchResponse>;
    /**
     * InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
     * futures market by paying listing fee without governance
     */
    instantExpiryFuturesMarketLaunch(request: MsgInstantExpiryFuturesMarketLaunch): Promise<MsgInstantExpiryFuturesMarketLaunchResponse>;
    /** CreateSpotLimitOrder defines a method for creating a new spot limit order. */
    createSpotLimitOrder(request: MsgCreateSpotLimitOrder): Promise<MsgCreateSpotLimitOrderResponse>;
    /**
     * BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
     * limit orders.
     */
    batchCreateSpotLimitOrders(request: MsgBatchCreateSpotLimitOrders): Promise<MsgBatchCreateSpotLimitOrdersResponse>;
    /**
     * CreateSpotMarketOrder defines a method for creating a new spot market
     * order.
     */
    createSpotMarketOrder(request: MsgCreateSpotMarketOrder): Promise<MsgCreateSpotMarketOrderResponse>;
    /** MsgCancelSpotOrder defines a method for cancelling a spot order. */
    cancelSpotOrder(request: MsgCancelSpotOrder): Promise<MsgCancelSpotOrderResponse>;
    /**
     * BatchCancelSpotOrders defines a method for cancelling a batch of spot
     * orders in a given market.
     */
    batchCancelSpotOrders(request: MsgBatchCancelSpotOrders): Promise<MsgBatchCancelSpotOrdersResponse>;
    /** BatchUpdateOrders defines a method for updating a batch of orders. */
    batchUpdateOrders(request: MsgBatchUpdateOrders): Promise<MsgBatchUpdateOrdersResponse>;
    /**
     * PrivilegedExecuteContract defines a method for executing a Cosmwasm
     * contract from the exchange module with privileged capabilities.
     */
    privilegedExecuteContract(request: MsgPrivilegedExecuteContract): Promise<MsgPrivilegedExecuteContractResponse>;
    /**
     * CreateDerivativeLimitOrder defines a method for creating a new derivative
     * limit order.
     */
    createDerivativeLimitOrder(request: MsgCreateDerivativeLimitOrder): Promise<MsgCreateDerivativeLimitOrderResponse>;
    /**
     * BatchCreateDerivativeLimitOrders defines a method for creating a new batch
     * of derivative limit orders.
     */
    batchCreateDerivativeLimitOrders(request: MsgBatchCreateDerivativeLimitOrders): Promise<MsgBatchCreateDerivativeLimitOrdersResponse>;
    /**
     * MsgCreateDerivativeLimitOrder defines a method for creating a new
     * derivative market order.
     */
    createDerivativeMarketOrder(request: MsgCreateDerivativeMarketOrder): Promise<MsgCreateDerivativeMarketOrderResponse>;
    /**
     * MsgCancelDerivativeOrder defines a method for cancelling a derivative
     * order.
     */
    cancelDerivativeOrder(request: MsgCancelDerivativeOrder): Promise<MsgCancelDerivativeOrderResponse>;
    /**
     * MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
     * derivative limit orders.
     */
    batchCancelDerivativeOrders(request: MsgBatchCancelDerivativeOrders): Promise<MsgBatchCancelDerivativeOrdersResponse>;
    /**
     * InstantBinaryOptionsMarketLaunch defines method for creating a binary
     * options market by paying listing fee without governance
     */
    instantBinaryOptionsMarketLaunch(request: MsgInstantBinaryOptionsMarketLaunch): Promise<MsgInstantBinaryOptionsMarketLaunchResponse>;
    /**
     * CreateBinaryOptionsLimitOrder defines a method for creating a new binary
     * options limit order.
     */
    createBinaryOptionsLimitOrder(request: MsgCreateBinaryOptionsLimitOrder): Promise<MsgCreateBinaryOptionsLimitOrderResponse>;
    /**
     * CreateBinaryOptionsMarketOrder defines a method for creating a new binary
     * options market order.
     */
    createBinaryOptionsMarketOrder(request: MsgCreateBinaryOptionsMarketOrder): Promise<MsgCreateBinaryOptionsMarketOrderResponse>;
    /**
     * MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
     * options order.
     */
    cancelBinaryOptionsOrder(request: MsgCancelBinaryOptionsOrder): Promise<MsgCancelBinaryOptionsOrderResponse>;
    /**
     * BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
     * binary options limit orders.
     */
    batchCancelBinaryOptionsOrders(request: MsgBatchCancelBinaryOptionsOrders): Promise<MsgBatchCancelBinaryOptionsOrdersResponse>;
    /** SubaccountTransfer defines a method for transfer between subaccounts */
    subaccountTransfer(request: MsgSubaccountTransfer): Promise<MsgSubaccountTransferResponse>;
    /** ExternalTransfer defines a method for transfer between external accounts */
    externalTransfer(request: MsgExternalTransfer): Promise<MsgExternalTransferResponse>;
    /** LiquidatePosition defines a method for liquidating a position */
    liquidatePosition(request: MsgLiquidatePosition): Promise<MsgLiquidatePositionResponse>;
    /** IncreasePositionMargin defines a method for increasing margin of a position */
    increasePositionMargin(request: MsgIncreasePositionMargin): Promise<MsgIncreasePositionMarginResponse>;
    /** RewardsOptOut defines a method for opting out of rewards */
    rewardsOptOut(request: MsgRewardsOptOut): Promise<MsgRewardsOptOutResponse>;
    /**
     * AdminUpdateBinaryOptionsMarket defines method for updating a binary options
     * market by admin
     */
    adminUpdateBinaryOptionsMarket(request: MsgAdminUpdateBinaryOptionsMarket): Promise<MsgAdminUpdateBinaryOptionsMarketResponse>;
    reclaimLockedFunds(request: MsgReclaimLockedFunds): Promise<MsgReclaimLockedFundsResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    instantSpotMarketLaunch(request: MsgInstantSpotMarketLaunch): Promise<MsgInstantSpotMarketLaunchResponse>;
    instantPerpetualMarketLaunch(request: MsgInstantPerpetualMarketLaunch): Promise<MsgInstantPerpetualMarketLaunchResponse>;
    instantExpiryFuturesMarketLaunch(request: MsgInstantExpiryFuturesMarketLaunch): Promise<MsgInstantExpiryFuturesMarketLaunchResponse>;
    createSpotLimitOrder(request: MsgCreateSpotLimitOrder): Promise<MsgCreateSpotLimitOrderResponse>;
    batchCreateSpotLimitOrders(request: MsgBatchCreateSpotLimitOrders): Promise<MsgBatchCreateSpotLimitOrdersResponse>;
    createSpotMarketOrder(request: MsgCreateSpotMarketOrder): Promise<MsgCreateSpotMarketOrderResponse>;
    cancelSpotOrder(request: MsgCancelSpotOrder): Promise<MsgCancelSpotOrderResponse>;
    batchCancelSpotOrders(request: MsgBatchCancelSpotOrders): Promise<MsgBatchCancelSpotOrdersResponse>;
    batchUpdateOrders(request: MsgBatchUpdateOrders): Promise<MsgBatchUpdateOrdersResponse>;
    privilegedExecuteContract(request: MsgPrivilegedExecuteContract): Promise<MsgPrivilegedExecuteContractResponse>;
    createDerivativeLimitOrder(request: MsgCreateDerivativeLimitOrder): Promise<MsgCreateDerivativeLimitOrderResponse>;
    batchCreateDerivativeLimitOrders(request: MsgBatchCreateDerivativeLimitOrders): Promise<MsgBatchCreateDerivativeLimitOrdersResponse>;
    createDerivativeMarketOrder(request: MsgCreateDerivativeMarketOrder): Promise<MsgCreateDerivativeMarketOrderResponse>;
    cancelDerivativeOrder(request: MsgCancelDerivativeOrder): Promise<MsgCancelDerivativeOrderResponse>;
    batchCancelDerivativeOrders(request: MsgBatchCancelDerivativeOrders): Promise<MsgBatchCancelDerivativeOrdersResponse>;
    instantBinaryOptionsMarketLaunch(request: MsgInstantBinaryOptionsMarketLaunch): Promise<MsgInstantBinaryOptionsMarketLaunchResponse>;
    createBinaryOptionsLimitOrder(request: MsgCreateBinaryOptionsLimitOrder): Promise<MsgCreateBinaryOptionsLimitOrderResponse>;
    createBinaryOptionsMarketOrder(request: MsgCreateBinaryOptionsMarketOrder): Promise<MsgCreateBinaryOptionsMarketOrderResponse>;
    cancelBinaryOptionsOrder(request: MsgCancelBinaryOptionsOrder): Promise<MsgCancelBinaryOptionsOrderResponse>;
    batchCancelBinaryOptionsOrders(request: MsgBatchCancelBinaryOptionsOrders): Promise<MsgBatchCancelBinaryOptionsOrdersResponse>;
    subaccountTransfer(request: MsgSubaccountTransfer): Promise<MsgSubaccountTransferResponse>;
    externalTransfer(request: MsgExternalTransfer): Promise<MsgExternalTransferResponse>;
    liquidatePosition(request: MsgLiquidatePosition): Promise<MsgLiquidatePositionResponse>;
    increasePositionMargin(request: MsgIncreasePositionMargin): Promise<MsgIncreasePositionMarginResponse>;
    rewardsOptOut(request: MsgRewardsOptOut): Promise<MsgRewardsOptOutResponse>;
    adminUpdateBinaryOptionsMarket(request: MsgAdminUpdateBinaryOptionsMarket): Promise<MsgAdminUpdateBinaryOptionsMarketResponse>;
    reclaimLockedFunds(request: MsgReclaimLockedFunds): Promise<MsgReclaimLockedFundsResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
