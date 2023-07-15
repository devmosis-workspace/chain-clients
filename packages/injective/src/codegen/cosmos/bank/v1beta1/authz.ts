import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorization {
  spendLimit: Coin[];
  /**
   * allow_list specifies an optional list of addresses to whom the grantee can send tokens on behalf of the
   * granter. If omitted, any recipient is allowed.
   * 
   * Since: cosmos-sdk 0.47
   */
  allowList: string[];
}
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorizationSDKType {
  spend_limit: CoinSDKType[];
  allow_list: string[];
}
function createBaseSendAuthorization(): SendAuthorization {
  return {
    spendLimit: [],
    allowList: []
  };
}
export const SendAuthorization = {
  encode(message: SendAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowList) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): SendAuthorization {
    return {
      spendLimit: Array.isArray(object?.spendLimit) ? object.spendLimit.map((e: any) => Coin.fromJSON(e)) : [],
      allowList: Array.isArray(object?.allowList) ? object.allowList.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<SendAuthorization>): SendAuthorization {
    const message = createBaseSendAuthorization();
    message.spendLimit = object.spendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.allowList = object.allowList?.map(e => e) || [];
    return message;
  }
};