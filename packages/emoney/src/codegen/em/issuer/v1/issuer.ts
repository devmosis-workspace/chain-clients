import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Issuer {
  address: string;
  denoms: string[];
}
export interface IssuerProtoMsg {
  typeUrl: "/em.issuer.v1.Issuer";
  value: Uint8Array;
}
export interface IssuerAmino {
  address: string;
  denoms: string[];
}
export interface IssuerAminoMsg {
  type: "/em.issuer.v1.Issuer";
  value: IssuerAmino;
}
export interface IssuerSDKType {
  address: string;
  denoms: string[];
}
export interface Issuers {
  issuers: Issuer[];
}
export interface IssuersProtoMsg {
  typeUrl: "/em.issuer.v1.Issuers";
  value: Uint8Array;
}
export interface IssuersAmino {
  issuers: IssuerAmino[];
}
export interface IssuersAminoMsg {
  type: "/em.issuer.v1.Issuers";
  value: IssuersAmino;
}
export interface IssuersSDKType {
  issuers: IssuerSDKType[];
}
function createBaseIssuer(): Issuer {
  return {
    address: "",
    denoms: []
  };
}
export const Issuer = {
  typeUrl: "/em.issuer.v1.Issuer",
  encode(message: Issuer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.denoms) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Issuer {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Issuer>): Issuer {
    const message = createBaseIssuer();
    message.address = object.address ?? "";
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: IssuerAmino): Issuer {
    return {
      address: object.address,
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => e) : []
    };
  },
  toAmino(message: Issuer): IssuerAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },
  fromAminoMsg(object: IssuerAminoMsg): Issuer {
    return Issuer.fromAmino(object.value);
  },
  fromProtoMsg(message: IssuerProtoMsg): Issuer {
    return Issuer.decode(message.value);
  },
  toProto(message: Issuer): Uint8Array {
    return Issuer.encode(message).finish();
  },
  toProtoMsg(message: Issuer): IssuerProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.Issuer",
      value: Issuer.encode(message).finish()
    };
  }
};
function createBaseIssuers(): Issuers {
  return {
    issuers: []
  };
}
export const Issuers = {
  typeUrl: "/em.issuer.v1.Issuers",
  encode(message: Issuers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.issuers) {
      Issuer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Issuers {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => Issuer.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Issuers>): Issuers {
    const message = createBaseIssuers();
    message.issuers = object.issuers?.map(e => Issuer.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IssuersAmino): Issuers {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => Issuer.fromAmino(e)) : []
    };
  },
  toAmino(message: Issuers): IssuersAmino {
    const obj: any = {};
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e ? Issuer.toAmino(e) : undefined);
    } else {
      obj.issuers = [];
    }
    return obj;
  },
  fromAminoMsg(object: IssuersAminoMsg): Issuers {
    return Issuers.fromAmino(object.value);
  },
  fromProtoMsg(message: IssuersProtoMsg): Issuers {
    return Issuers.decode(message.value);
  },
  toProto(message: Issuers): Uint8Array {
    return Issuers.encode(message).finish();
  },
  toProtoMsg(message: Issuers): IssuersProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.Issuers",
      value: Issuers.encode(message).finish()
    };
  }
};