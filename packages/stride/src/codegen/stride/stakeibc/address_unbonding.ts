import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface AddressUnbonding {
  address: string;
  receiver: string;
  unbondingEstimatedTime: string;
  amount: string;
  denom: string;
  claimIsPending: boolean;
  epochNumber: Long;
}
export interface AddressUnbondingSDKType {
  address: string;
  receiver: string;
  unbonding_estimated_time: string;
  amount: string;
  denom: string;
  claim_is_pending: boolean;
  epoch_number: Long;
}
function createBaseAddressUnbonding(): AddressUnbonding {
  return {
    address: "",
    receiver: "",
    unbondingEstimatedTime: "",
    amount: "",
    denom: "",
    claimIsPending: false,
    epochNumber: Long.UZERO
  };
}
export const AddressUnbonding = {
  encode(message: AddressUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.unbondingEstimatedTime !== "") {
      writer.uint32(26).string(message.unbondingEstimatedTime);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    if (message.claimIsPending === true) {
      writer.uint32(64).bool(message.claimIsPending);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(72).uint64(message.epochNumber);
    }
    return writer;
  },
  fromJSON(object: any): AddressUnbonding {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      unbondingEstimatedTime: isSet(object.unbondingEstimatedTime) ? String(object.unbondingEstimatedTime) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      claimIsPending: isSet(object.claimIsPending) ? Boolean(object.claimIsPending) : false,
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.UZERO
    };
  },
  fromPartial(object: Partial<AddressUnbonding>): AddressUnbonding {
    const message = createBaseAddressUnbonding();
    message.address = object.address ?? "";
    message.receiver = object.receiver ?? "";
    message.unbondingEstimatedTime = object.unbondingEstimatedTime ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.claimIsPending = object.claimIsPending ?? false;
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    return message;
  }
};