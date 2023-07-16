import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgSafetyFundSpend defines the message for sending tokens from the safety
 * fund to a designated recipient.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgSafetyFundSpend {
    /**
     * Authority is the account executing the safety fund spend.
     * It should be the gov module account.
     */
    authority: string;
    /** Recipient is the account to receive the funds */
    recipient: string;
    /** Amount is the coins that are to be released from the safety funds */
    amount: Coin[];
}
/**
 * MsgSafetyFundSpend defines the message for sending tokens from the safety
 * fund to a designated recipient.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgSafetyFundSpendSDKType {
    authority: string;
    recipient: string;
    amount: CoinSDKType[];
}
/**
 * MsgSafetyFundSpendResponse defines the response to executing a
 * MsgSafetyFundSpend message.
 */
export interface MsgSafetyFundSpendResponse {
}
/**
 * MsgSafetyFundSpendResponse defines the response to executing a
 * MsgSafetyFundSpend message.
 */
export interface MsgSafetyFundSpendResponseSDKType {
}
export declare const MsgSafetyFundSpend: {
    encode(message: MsgSafetyFundSpend, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSafetyFundSpend;
    fromPartial(object: Partial<MsgSafetyFundSpend>): MsgSafetyFundSpend;
};
export declare const MsgSafetyFundSpendResponse: {
    encode(_: MsgSafetyFundSpendResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSafetyFundSpendResponse;
    fromPartial(_: Partial<MsgSafetyFundSpendResponse>): MsgSafetyFundSpendResponse;
};
