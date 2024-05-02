import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Provider {
  address: string;
  name: string;
  identity: string;
  website: string;
  description: string;
}
export interface ProviderProtoMsg {
  typeUrl: "/sentinel.provider.v1.Provider";
  value: Uint8Array;
}
export interface ProviderAmino {
  address?: string;
  name?: string;
  identity?: string;
  website?: string;
  description?: string;
}
export interface ProviderAminoMsg {
  type: "/sentinel.provider.v1.Provider";
  value: ProviderAmino;
}
export interface ProviderSDKType {
  address: string;
  name: string;
  identity: string;
  website: string;
  description: string;
}
function createBaseProvider(): Provider {
  return {
    address: "",
    name: "",
    identity: "",
    website: "",
    description: ""
  };
}
export const Provider = {
  typeUrl: "/sentinel.provider.v1.Provider",
  encode(message: Provider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): Provider {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      name: isSet(object.name) ? String(object.name) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<Provider>): Provider {
    const message = createBaseProvider();
    message.address = object.address ?? "";
    message.name = object.name ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: ProviderAmino): Provider {
    const message = createBaseProvider();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: Provider): ProviderAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.name = message.name === "" ? undefined : message.name;
    obj.identity = message.identity === "" ? undefined : message.identity;
    obj.website = message.website === "" ? undefined : message.website;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: ProviderAminoMsg): Provider {
    return Provider.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderProtoMsg): Provider {
    return Provider.decode(message.value);
  },
  toProto(message: Provider): Uint8Array {
    return Provider.encode(message).finish();
  },
  toProtoMsg(message: Provider): ProviderProtoMsg {
    return {
      typeUrl: "/sentinel.provider.v1.Provider",
      value: Provider.encode(message).finish()
    };
  }
};