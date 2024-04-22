import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the x/deployment package */
export interface Params {
  deploymentMinDeposit: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsAmino {
  deployment_min_deposit?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/akash.deployment.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
  deployment_min_deposit: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    deploymentMinDeposit: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/akash.deployment.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deploymentMinDeposit !== undefined) {
      Coin.encode(message.deploymentMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      deploymentMinDeposit: isSet(object.deploymentMinDeposit) ? Coin.fromJSON(object.deploymentMinDeposit) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.deploymentMinDeposit = object.deploymentMinDeposit !== undefined && object.deploymentMinDeposit !== null ? Coin.fromPartial(object.deploymentMinDeposit) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.deployment_min_deposit !== undefined && object.deployment_min_deposit !== null) {
      message.deploymentMinDeposit = Coin.fromAmino(object.deployment_min_deposit);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.deployment_min_deposit = message.deploymentMinDeposit ? Coin.toAmino(message.deploymentMinDeposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};