import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorization {
  /**
   * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
   * the purpose of deployment.
   */
  spendLimit?: Coin;
}
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorizationSDKType {
  spend_limit?: CoinSDKType;
}
function createBaseDepositDeploymentAuthorization(): DepositDeploymentAuthorization {
  return {
    spendLimit: undefined
  };
}
export const DepositDeploymentAuthorization = {
  encode(message: DepositDeploymentAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spendLimit !== undefined) {
      Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DepositDeploymentAuthorization {
    return {
      spendLimit: isSet(object.spendLimit) ? Coin.fromJSON(object.spendLimit) : undefined
    };
  },
  fromPartial(object: Partial<DepositDeploymentAuthorization>): DepositDeploymentAuthorization {
    const message = createBaseDepositDeploymentAuthorization();
    message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? Coin.fromPartial(object.spendLimit) : undefined;
    return message;
  }
};