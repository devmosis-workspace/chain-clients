import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/akash.cert.v1beta3.MsgCreateCertificate", MsgCreateCertificate], ["/akash.cert.v1beta3.MsgRevokeCertificate", MsgRevokeCertificate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta3.MsgCreateCertificate",
        value: MsgCreateCertificate.encode(value).finish()
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificate",
        value: MsgRevokeCertificate.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta3.MsgCreateCertificate",
        value
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificate",
        value
      };
    }
  },
  fromJSON: {
    createCertificate(value: any) {
      return {
        typeUrl: "/akash.cert.v1beta3.MsgCreateCertificate",
        value: MsgCreateCertificate.fromJSON(value)
      };
    },
    revokeCertificate(value: any) {
      return {
        typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificate",
        value: MsgRevokeCertificate.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta3.MsgCreateCertificate",
        value: MsgCreateCertificate.fromPartial(value)
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificate",
        value: MsgRevokeCertificate.fromPartial(value)
      };
    }
  }
};