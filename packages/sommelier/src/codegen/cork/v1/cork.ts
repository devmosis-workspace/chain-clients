import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Cork {
  /** call body containing the ABI encoded bytes to send to the contract */
  encodedContractCall: Uint8Array;
  /** address of the contract to send the call */
  targetContractAddress: string;
}
export interface CorkSDKType {
  encoded_contract_call: Uint8Array;
  target_contract_address: string;
}
export interface ValidatorCork {
  cork?: Cork;
  validator: string;
}
export interface ValidatorCorkSDKType {
  cork?: CorkSDKType;
  validator: string;
}
export interface ScheduledCork {
  cork?: Cork;
  blockHeight: Long;
  validator: string;
}
export interface ScheduledCorkSDKType {
  cork?: CorkSDKType;
  block_height: Long;
  validator: string;
}
export interface CellarIDSet {
  ids: string[];
}
export interface CellarIDSetSDKType {
  ids: string[];
}
function createBaseCork(): Cork {
  return {
    encodedContractCall: new Uint8Array(),
    targetContractAddress: ""
  };
}
export const Cork = {
  encode(message: Cork, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encodedContractCall.length !== 0) {
      writer.uint32(10).bytes(message.encodedContractCall);
    }
    if (message.targetContractAddress !== "") {
      writer.uint32(18).string(message.targetContractAddress);
    }
    return writer;
  },
  fromJSON(object: any): Cork {
    return {
      encodedContractCall: isSet(object.encodedContractCall) ? bytesFromBase64(object.encodedContractCall) : new Uint8Array(),
      targetContractAddress: isSet(object.targetContractAddress) ? String(object.targetContractAddress) : ""
    };
  },
  fromPartial(object: Partial<Cork>): Cork {
    const message = createBaseCork();
    message.encodedContractCall = object.encodedContractCall ?? new Uint8Array();
    message.targetContractAddress = object.targetContractAddress ?? "";
    return message;
  }
};
function createBaseValidatorCork(): ValidatorCork {
  return {
    cork: undefined,
    validator: ""
  };
}
export const ValidatorCork = {
  encode(message: ValidatorCork, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorCork {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  fromPartial(object: Partial<ValidatorCork>): ValidatorCork {
    const message = createBaseValidatorCork();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.validator = object.validator ?? "";
    return message;
  }
};
function createBaseScheduledCork(): ScheduledCork {
  return {
    cork: undefined,
    blockHeight: Long.UZERO,
    validator: ""
  };
}
export const ScheduledCork = {
  encode(message: ScheduledCork, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },
  fromJSON(object: any): ScheduledCork {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  fromPartial(object: Partial<ScheduledCork>): ScheduledCork {
    const message = createBaseScheduledCork();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.validator = object.validator ?? "";
    return message;
  }
};
function createBaseCellarIDSet(): CellarIDSet {
  return {
    ids: []
  };
}
export const CellarIDSet = {
  encode(message: CellarIDSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): CellarIDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<CellarIDSet>): CellarIDSet {
    const message = createBaseCellarIDSet();
    message.ids = object.ids?.map(e => e) || [];
    return message;
  }
};