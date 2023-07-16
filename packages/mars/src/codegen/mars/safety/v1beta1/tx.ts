import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
export interface MsgSafetyFundSpendResponse {}
/**
 * MsgSafetyFundSpendResponse defines the response to executing a
 * MsgSafetyFundSpend message.
 */
export interface MsgSafetyFundSpendResponseSDKType {}
function createBaseMsgSafetyFundSpend(): MsgSafetyFundSpend {
  return {
    authority: "",
    recipient: "",
    amount: []
  };
}
export const MsgSafetyFundSpend = {
  encode(message: MsgSafetyFundSpend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSafetyFundSpend {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSafetyFundSpend>): MsgSafetyFundSpend {
    const message = createBaseMsgSafetyFundSpend();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgSafetyFundSpendResponse(): MsgSafetyFundSpendResponse {
  return {};
}
export const MsgSafetyFundSpendResponse = {
  encode(_: MsgSafetyFundSpendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSafetyFundSpendResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSafetyFundSpendResponse>): MsgSafetyFundSpendResponse {
    const message = createBaseMsgSafetyFundSpendResponse();
    return message;
  }
};