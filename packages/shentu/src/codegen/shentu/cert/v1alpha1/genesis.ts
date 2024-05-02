import { Certifier, CertifierAmino, CertifierSDKType, Platform, PlatformAmino, PlatformSDKType, Certificate, CertificateAmino, CertificateSDKType, Library, LibraryAmino, LibrarySDKType } from "./cert";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  certifiers: Certifier[];
  platforms: Platform[];
  certificates: Certificate[];
  libraries: Library[];
  nextCertificateId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/shentu.cert.v1alpha1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  certifiers?: CertifierAmino[];
  platforms?: PlatformAmino[];
  certificates?: CertificateAmino[];
  libraries?: LibraryAmino[];
  next_certificate_id?: string;
}
export interface GenesisStateAminoMsg {
  type: "/shentu.cert.v1alpha1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  certifiers: CertifierSDKType[];
  platforms: PlatformSDKType[];
  certificates: CertificateSDKType[];
  libraries: LibrarySDKType[];
  next_certificate_id: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    certifiers: [],
    platforms: [],
    certificates: [],
    libraries: [],
    nextCertificateId: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/shentu.cert.v1alpha1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.certifiers) {
      Certifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.platforms) {
      Platform.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.certificates) {
      Certificate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.libraries) {
      Library.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextCertificateId !== BigInt(0)) {
      writer.uint32(40).uint64(message.nextCertificateId);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      certifiers: Array.isArray(object?.certifiers) ? object.certifiers.map((e: any) => Certifier.fromJSON(e)) : [],
      platforms: Array.isArray(object?.platforms) ? object.platforms.map((e: any) => Platform.fromJSON(e)) : [],
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => Certificate.fromJSON(e)) : [],
      libraries: Array.isArray(object?.libraries) ? object.libraries.map((e: any) => Library.fromJSON(e)) : [],
      nextCertificateId: isSet(object.nextCertificateId) ? BigInt(object.nextCertificateId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.certifiers = object.certifiers?.map(e => Certifier.fromPartial(e)) || [];
    message.platforms = object.platforms?.map(e => Platform.fromPartial(e)) || [];
    message.certificates = object.certificates?.map(e => Certificate.fromPartial(e)) || [];
    message.libraries = object.libraries?.map(e => Library.fromPartial(e)) || [];
    message.nextCertificateId = object.nextCertificateId !== undefined && object.nextCertificateId !== null ? BigInt(object.nextCertificateId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.certifiers = object.certifiers?.map(e => Certifier.fromAmino(e)) || [];
    message.platforms = object.platforms?.map(e => Platform.fromAmino(e)) || [];
    message.certificates = object.certificates?.map(e => Certificate.fromAmino(e)) || [];
    message.libraries = object.libraries?.map(e => Library.fromAmino(e)) || [];
    if (object.next_certificate_id !== undefined && object.next_certificate_id !== null) {
      message.nextCertificateId = BigInt(object.next_certificate_id);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.certifiers) {
      obj.certifiers = message.certifiers.map(e => e ? Certifier.toAmino(e) : undefined);
    } else {
      obj.certifiers = message.certifiers;
    }
    if (message.platforms) {
      obj.platforms = message.platforms.map(e => e ? Platform.toAmino(e) : undefined);
    } else {
      obj.platforms = message.platforms;
    }
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? Certificate.toAmino(e) : undefined);
    } else {
      obj.certificates = message.certificates;
    }
    if (message.libraries) {
      obj.libraries = message.libraries.map(e => e ? Library.toAmino(e) : undefined);
    } else {
      obj.libraries = message.libraries;
    }
    obj.next_certificate_id = message.nextCertificateId !== BigInt(0) ? message.nextCertificateId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/shentu.cert.v1alpha1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};