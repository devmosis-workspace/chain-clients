import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Issuer {
  address: string;
  denoms: string[];
}
export interface IssuerSDKType {
  address: string;
  denoms: string[];
}
export interface Issuers {
  issuers: Issuer[];
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
  encode(message: Issuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseIssuers(): Issuers {
  return {
    issuers: []
  };
}
export const Issuers = {
  encode(message: Issuers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};