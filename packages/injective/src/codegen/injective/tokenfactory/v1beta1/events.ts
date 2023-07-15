import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface EventCreateTFDenom {
  account: string;
  denom: string;
}
export interface EventCreateTFDenomSDKType {
  account: string;
  denom: string;
}
export interface EventMintTFDenom {
  recipientAddress: string;
  amount?: Coin;
}
export interface EventMintTFDenomSDKType {
  recipient_address: string;
  amount?: CoinSDKType;
}
export interface EventBurnTFDenom {
  burnerAddress: string;
  amount?: Coin;
}
export interface EventBurnTFDenomSDKType {
  burner_address: string;
  amount?: CoinSDKType;
}
export interface EventChangeTFAdmin {
  denom: string;
  newAdminAddress: string;
}
export interface EventChangeTFAdminSDKType {
  denom: string;
  new_admin_address: string;
}
export interface EventSetTFDenomMetadata {
  denom: string;
  metadata?: Metadata;
}
export interface EventSetTFDenomMetadataSDKType {
  denom: string;
  metadata?: MetadataSDKType;
}
function createBaseEventCreateTFDenom(): EventCreateTFDenom {
  return {
    account: "",
    denom: ""
  };
}
export const EventCreateTFDenom = {
  encode(message: EventCreateTFDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateTFDenom {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<EventCreateTFDenom>): EventCreateTFDenom {
    const message = createBaseEventCreateTFDenom();
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseEventMintTFDenom(): EventMintTFDenom {
  return {
    recipientAddress: "",
    amount: undefined
  };
}
export const EventMintTFDenom = {
  encode(message: EventMintTFDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipientAddress !== "") {
      writer.uint32(10).string(message.recipientAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventMintTFDenom {
    return {
      recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<EventMintTFDenom>): EventMintTFDenom {
    const message = createBaseEventMintTFDenom();
    message.recipientAddress = object.recipientAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseEventBurnTFDenom(): EventBurnTFDenom {
  return {
    burnerAddress: "",
    amount: undefined
  };
}
export const EventBurnTFDenom = {
  encode(message: EventBurnTFDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burnerAddress !== "") {
      writer.uint32(10).string(message.burnerAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventBurnTFDenom {
    return {
      burnerAddress: isSet(object.burnerAddress) ? String(object.burnerAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<EventBurnTFDenom>): EventBurnTFDenom {
    const message = createBaseEventBurnTFDenom();
    message.burnerAddress = object.burnerAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseEventChangeTFAdmin(): EventChangeTFAdmin {
  return {
    denom: "",
    newAdminAddress: ""
  };
}
export const EventChangeTFAdmin = {
  encode(message: EventChangeTFAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.newAdminAddress !== "") {
      writer.uint32(18).string(message.newAdminAddress);
    }
    return writer;
  },
  fromJSON(object: any): EventChangeTFAdmin {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      newAdminAddress: isSet(object.newAdminAddress) ? String(object.newAdminAddress) : ""
    };
  },
  fromPartial(object: Partial<EventChangeTFAdmin>): EventChangeTFAdmin {
    const message = createBaseEventChangeTFAdmin();
    message.denom = object.denom ?? "";
    message.newAdminAddress = object.newAdminAddress ?? "";
    return message;
  }
};
function createBaseEventSetTFDenomMetadata(): EventSetTFDenomMetadata {
  return {
    denom: "",
    metadata: undefined
  };
}
export const EventSetTFDenomMetadata = {
  encode(message: EventSetTFDenomMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventSetTFDenomMetadata {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined
    };
  },
  fromPartial(object: Partial<EventSetTFDenomMetadata>): EventSetTFDenomMetadata {
    const message = createBaseEventSetTFDenomMetadata();
    message.denom = object.denom ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};