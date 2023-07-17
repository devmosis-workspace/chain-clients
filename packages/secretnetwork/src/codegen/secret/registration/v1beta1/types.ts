import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface SeedConfig {
  masterKey: string;
  encryptedKey: string;
  version: number;
}
export interface SeedConfigSDKType {
  master_key: string;
  encrypted_key: string;
  version: number;
}
export interface LegacySeedConfig {
  masterCert: string;
  encryptedKey: string;
}
export interface LegacySeedConfigSDKType {
  master_cert: string;
  encrypted_key: string;
}
export interface RegistrationNodeInfo {
  certificate: Uint8Array;
  encryptedSeed: Uint8Array;
}
export interface RegistrationNodeInfoSDKType {
  certificate: Uint8Array;
  encrypted_seed: Uint8Array;
}
function createBaseSeedConfig(): SeedConfig {
  return {
    masterKey: "",
    encryptedKey: "",
    version: 0
  };
}
export const SeedConfig = {
  encode(message: SeedConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.masterKey !== "") {
      writer.uint32(10).string(message.masterKey);
    }
    if (message.encryptedKey !== "") {
      writer.uint32(18).string(message.encryptedKey);
    }
    if (message.version !== 0) {
      writer.uint32(24).uint32(message.version);
    }
    return writer;
  },
  fromJSON(object: any): SeedConfig {
    return {
      masterKey: isSet(object.masterKey) ? String(object.masterKey) : "",
      encryptedKey: isSet(object.encryptedKey) ? String(object.encryptedKey) : "",
      version: isSet(object.version) ? Number(object.version) : 0
    };
  },
  fromPartial(object: Partial<SeedConfig>): SeedConfig {
    const message = createBaseSeedConfig();
    message.masterKey = object.masterKey ?? "";
    message.encryptedKey = object.encryptedKey ?? "";
    message.version = object.version ?? 0;
    return message;
  }
};
function createBaseLegacySeedConfig(): LegacySeedConfig {
  return {
    masterCert: "",
    encryptedKey: ""
  };
}
export const LegacySeedConfig = {
  encode(message: LegacySeedConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.masterCert !== "") {
      writer.uint32(10).string(message.masterCert);
    }
    if (message.encryptedKey !== "") {
      writer.uint32(18).string(message.encryptedKey);
    }
    return writer;
  },
  fromJSON(object: any): LegacySeedConfig {
    return {
      masterCert: isSet(object.masterCert) ? String(object.masterCert) : "",
      encryptedKey: isSet(object.encryptedKey) ? String(object.encryptedKey) : ""
    };
  },
  fromPartial(object: Partial<LegacySeedConfig>): LegacySeedConfig {
    const message = createBaseLegacySeedConfig();
    message.masterCert = object.masterCert ?? "";
    message.encryptedKey = object.encryptedKey ?? "";
    return message;
  }
};
function createBaseRegistrationNodeInfo(): RegistrationNodeInfo {
  return {
    certificate: new Uint8Array(),
    encryptedSeed: new Uint8Array()
  };
}
export const RegistrationNodeInfo = {
  encode(message: RegistrationNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificate.length !== 0) {
      writer.uint32(10).bytes(message.certificate);
    }
    if (message.encryptedSeed.length !== 0) {
      writer.uint32(18).bytes(message.encryptedSeed);
    }
    return writer;
  },
  fromJSON(object: any): RegistrationNodeInfo {
    return {
      certificate: isSet(object.certificate) ? bytesFromBase64(object.certificate) : new Uint8Array(),
      encryptedSeed: isSet(object.encryptedSeed) ? bytesFromBase64(object.encryptedSeed) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RegistrationNodeInfo>): RegistrationNodeInfo {
    const message = createBaseRegistrationNodeInfo();
    message.certificate = object.certificate ?? new Uint8Array();
    message.encryptedSeed = object.encryptedSeed ?? new Uint8Array();
    return message;
  }
};