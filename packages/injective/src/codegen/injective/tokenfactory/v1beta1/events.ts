import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataAmino, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface EventCreateTFDenom {
  account: string;
  denom: string;
}
export interface EventCreateTFDenomProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventCreateTFDenom";
  value: Uint8Array;
}
export interface EventCreateTFDenomAmino {
  account: string;
  denom: string;
}
export interface EventCreateTFDenomAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventCreateTFDenom";
  value: EventCreateTFDenomAmino;
}
export interface EventCreateTFDenomSDKType {
  account: string;
  denom: string;
}
export interface EventMintTFDenom {
  recipientAddress: string;
  amount: Coin;
}
export interface EventMintTFDenomProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventMintTFDenom";
  value: Uint8Array;
}
export interface EventMintTFDenomAmino {
  recipient_address: string;
  amount?: CoinAmino;
}
export interface EventMintTFDenomAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventMintTFDenom";
  value: EventMintTFDenomAmino;
}
export interface EventMintTFDenomSDKType {
  recipient_address: string;
  amount: CoinSDKType;
}
export interface EventBurnTFDenom {
  burnerAddress: string;
  amount: Coin;
}
export interface EventBurnTFDenomProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventBurnTFDenom";
  value: Uint8Array;
}
export interface EventBurnTFDenomAmino {
  burner_address: string;
  amount?: CoinAmino;
}
export interface EventBurnTFDenomAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventBurnTFDenom";
  value: EventBurnTFDenomAmino;
}
export interface EventBurnTFDenomSDKType {
  burner_address: string;
  amount: CoinSDKType;
}
export interface EventChangeTFAdmin {
  denom: string;
  newAdminAddress: string;
}
export interface EventChangeTFAdminProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventChangeTFAdmin";
  value: Uint8Array;
}
export interface EventChangeTFAdminAmino {
  denom: string;
  new_admin_address: string;
}
export interface EventChangeTFAdminAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventChangeTFAdmin";
  value: EventChangeTFAdminAmino;
}
export interface EventChangeTFAdminSDKType {
  denom: string;
  new_admin_address: string;
}
export interface EventSetTFDenomMetadata {
  denom: string;
  metadata: Metadata;
}
export interface EventSetTFDenomMetadataProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventSetTFDenomMetadata";
  value: Uint8Array;
}
export interface EventSetTFDenomMetadataAmino {
  denom: string;
  metadata?: MetadataAmino;
}
export interface EventSetTFDenomMetadataAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventSetTFDenomMetadata";
  value: EventSetTFDenomMetadataAmino;
}
export interface EventSetTFDenomMetadataSDKType {
  denom: string;
  metadata: MetadataSDKType;
}
function createBaseEventCreateTFDenom(): EventCreateTFDenom {
  return {
    account: "",
    denom: ""
  };
}
export const EventCreateTFDenom = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventCreateTFDenom",
  encode(message: EventCreateTFDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventCreateTFDenomAmino): EventCreateTFDenom {
    return {
      account: object.account,
      denom: object.denom
    };
  },
  toAmino(message: EventCreateTFDenom): EventCreateTFDenomAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: EventCreateTFDenomAminoMsg): EventCreateTFDenom {
    return EventCreateTFDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateTFDenomProtoMsg): EventCreateTFDenom {
    return EventCreateTFDenom.decode(message.value);
  },
  toProto(message: EventCreateTFDenom): Uint8Array {
    return EventCreateTFDenom.encode(message).finish();
  },
  toProtoMsg(message: EventCreateTFDenom): EventCreateTFDenomProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventCreateTFDenom",
      value: EventCreateTFDenom.encode(message).finish()
    };
  }
};
function createBaseEventMintTFDenom(): EventMintTFDenom {
  return {
    recipientAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const EventMintTFDenom = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventMintTFDenom",
  encode(message: EventMintTFDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventMintTFDenomAmino): EventMintTFDenom {
    return {
      recipientAddress: object.recipient_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: EventMintTFDenom): EventMintTFDenomAmino {
    const obj: any = {};
    obj.recipient_address = message.recipientAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventMintTFDenomAminoMsg): EventMintTFDenom {
    return EventMintTFDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMintTFDenomProtoMsg): EventMintTFDenom {
    return EventMintTFDenom.decode(message.value);
  },
  toProto(message: EventMintTFDenom): Uint8Array {
    return EventMintTFDenom.encode(message).finish();
  },
  toProtoMsg(message: EventMintTFDenom): EventMintTFDenomProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventMintTFDenom",
      value: EventMintTFDenom.encode(message).finish()
    };
  }
};
function createBaseEventBurnTFDenom(): EventBurnTFDenom {
  return {
    burnerAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const EventBurnTFDenom = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventBurnTFDenom",
  encode(message: EventBurnTFDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventBurnTFDenomAmino): EventBurnTFDenom {
    return {
      burnerAddress: object.burner_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: EventBurnTFDenom): EventBurnTFDenomAmino {
    const obj: any = {};
    obj.burner_address = message.burnerAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBurnTFDenomAminoMsg): EventBurnTFDenom {
    return EventBurnTFDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBurnTFDenomProtoMsg): EventBurnTFDenom {
    return EventBurnTFDenom.decode(message.value);
  },
  toProto(message: EventBurnTFDenom): Uint8Array {
    return EventBurnTFDenom.encode(message).finish();
  },
  toProtoMsg(message: EventBurnTFDenom): EventBurnTFDenomProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventBurnTFDenom",
      value: EventBurnTFDenom.encode(message).finish()
    };
  }
};
function createBaseEventChangeTFAdmin(): EventChangeTFAdmin {
  return {
    denom: "",
    newAdminAddress: ""
  };
}
export const EventChangeTFAdmin = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventChangeTFAdmin",
  encode(message: EventChangeTFAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventChangeTFAdminAmino): EventChangeTFAdmin {
    return {
      denom: object.denom,
      newAdminAddress: object.new_admin_address
    };
  },
  toAmino(message: EventChangeTFAdmin): EventChangeTFAdminAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.new_admin_address = message.newAdminAddress;
    return obj;
  },
  fromAminoMsg(object: EventChangeTFAdminAminoMsg): EventChangeTFAdmin {
    return EventChangeTFAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: EventChangeTFAdminProtoMsg): EventChangeTFAdmin {
    return EventChangeTFAdmin.decode(message.value);
  },
  toProto(message: EventChangeTFAdmin): Uint8Array {
    return EventChangeTFAdmin.encode(message).finish();
  },
  toProtoMsg(message: EventChangeTFAdmin): EventChangeTFAdminProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventChangeTFAdmin",
      value: EventChangeTFAdmin.encode(message).finish()
    };
  }
};
function createBaseEventSetTFDenomMetadata(): EventSetTFDenomMetadata {
  return {
    denom: "",
    metadata: Metadata.fromPartial({})
  };
}
export const EventSetTFDenomMetadata = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventSetTFDenomMetadata",
  encode(message: EventSetTFDenomMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventSetTFDenomMetadataAmino): EventSetTFDenomMetadata {
    return {
      denom: object.denom,
      metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined
    };
  },
  toAmino(message: EventSetTFDenomMetadata): EventSetTFDenomMetadataAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetTFDenomMetadataAminoMsg): EventSetTFDenomMetadata {
    return EventSetTFDenomMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetTFDenomMetadataProtoMsg): EventSetTFDenomMetadata {
    return EventSetTFDenomMetadata.decode(message.value);
  },
  toProto(message: EventSetTFDenomMetadata): Uint8Array {
    return EventSetTFDenomMetadata.encode(message).finish();
  },
  toProtoMsg(message: EventSetTFDenomMetadata): EventSetTFDenomMetadataProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventSetTFDenomMetadata",
      value: EventSetTFDenomMetadata.encode(message).finish()
    };
  }
};