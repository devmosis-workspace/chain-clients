import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorization {
  $typeUrl?: "/akash.deployment.v1beta2.DepositDeploymentAuthorization";
  /**
   * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
   * the purpose of deployment.
   */
  spendLimit: Coin;
}
export interface DepositDeploymentAuthorizationProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization";
  value: Uint8Array;
}
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorizationAmino {
  /**
   * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
   * the purpose of deployment.
   */
  spend_limit?: CoinAmino;
}
export interface DepositDeploymentAuthorizationAminoMsg {
  type: "/akash.deployment.v1beta2.DepositDeploymentAuthorization";
  value: DepositDeploymentAuthorizationAmino;
}
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorizationSDKType {
  $typeUrl?: "/akash.deployment.v1beta2.DepositDeploymentAuthorization";
  spend_limit: CoinSDKType;
}
function createBaseDepositDeploymentAuthorization(): DepositDeploymentAuthorization {
  return {
    $typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
    spendLimit: Coin.fromPartial({})
  };
}
export const DepositDeploymentAuthorization = {
  typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
  encode(message: DepositDeploymentAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DepositDeploymentAuthorizationAmino): DepositDeploymentAuthorization {
    const message = createBaseDepositDeploymentAuthorization();
    if (object.spend_limit !== undefined && object.spend_limit !== null) {
      message.spendLimit = Coin.fromAmino(object.spend_limit);
    }
    return message;
  },
  toAmino(message: DepositDeploymentAuthorization): DepositDeploymentAuthorizationAmino {
    const obj: any = {};
    obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositDeploymentAuthorizationAminoMsg): DepositDeploymentAuthorization {
    return DepositDeploymentAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositDeploymentAuthorizationProtoMsg): DepositDeploymentAuthorization {
    return DepositDeploymentAuthorization.decode(message.value);
  },
  toProto(message: DepositDeploymentAuthorization): Uint8Array {
    return DepositDeploymentAuthorization.encode(message).finish();
  },
  toProtoMsg(message: DepositDeploymentAuthorization): DepositDeploymentAuthorizationProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
      value: DepositDeploymentAuthorization.encode(message).finish()
    };
  }
};