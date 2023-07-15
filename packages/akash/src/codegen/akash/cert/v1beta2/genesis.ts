import { Certificate, CertificateSDKType } from "./cert";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificate {
  owner: string;
  certificate?: Certificate;
}
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificateSDKType {
  owner: string;
  certificate?: CertificateSDKType;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisState {
  certificates: GenesisCertificate[];
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisStateSDKType {
  certificates: GenesisCertificateSDKType[];
}
function createBaseGenesisCertificate(): GenesisCertificate {
  return {
    owner: "",
    certificate: undefined
  };
}
export const GenesisCertificate = {
  encode(message: GenesisCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.certificate !== undefined) {
      Certificate.encode(message.certificate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisCertificate {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      certificate: isSet(object.certificate) ? Certificate.fromJSON(object.certificate) : undefined
    };
  },
  fromPartial(object: Partial<GenesisCertificate>): GenesisCertificate {
    const message = createBaseGenesisCertificate();
    message.owner = object.owner ?? "";
    message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    certificates: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.certificates) {
      GenesisCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => GenesisCertificate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.certificates = object.certificates?.map(e => GenesisCertificate.fromPartial(e)) || [];
    return message;
  }
};