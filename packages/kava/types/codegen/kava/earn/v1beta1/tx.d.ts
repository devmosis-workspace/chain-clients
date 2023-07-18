import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { StrategyType } from "./strategy";
import { VaultShare, VaultShareSDKType } from "./vault";
import * as _m0 from "protobufjs/minimal";
/** MsgDeposit represents a message for depositing assedts into a vault */
export interface MsgDeposit {
    /** depositor represents the address to deposit funds from */
    depositor: string;
    /**
     * Amount represents the token to deposit. The vault corresponds to the denom
     * of the amount coin.
     */
    amount?: Coin;
    /** Strategy is the vault strategy to use. */
    strategy: StrategyType;
}
/** MsgDeposit represents a message for depositing assedts into a vault */
export interface MsgDepositSDKType {
    depositor: string;
    amount?: CoinSDKType;
    strategy: StrategyType;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
    shares?: VaultShare;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
    shares?: VaultShareSDKType;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a vault */
export interface MsgWithdraw {
    /** from represents the address we are withdrawing for */
    from: string;
    /**
     * Amount represents the token to withdraw. The vault corresponds to the denom
     * of the amount coin.
     */
    amount?: Coin;
    /** Strategy is the vault strategy to use. */
    strategy: StrategyType;
}
/** MsgWithdraw represents a message for withdrawing liquidity from a vault */
export interface MsgWithdrawSDKType {
    from: string;
    amount?: CoinSDKType;
    strategy: StrategyType;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
    shares?: VaultShare;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
    shares?: VaultShareSDKType;
}
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeposit;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(message: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDepositResponse;
    fromPartial(object: Partial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdraw;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgWithdrawResponse: {
    encode(message: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdrawResponse;
    fromPartial(object: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
