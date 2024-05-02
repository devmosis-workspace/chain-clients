import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgProposeCertifier, MsgIssueCertificate, MsgRevokeCertificate, MsgCertifyPlatform } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/shentu.cert.v1alpha1.MsgProposeCertifier", MsgProposeCertifier], ["/shentu.cert.v1alpha1.MsgIssueCertificate", MsgIssueCertificate], ["/shentu.cert.v1alpha1.MsgRevokeCertificate", MsgRevokeCertificate], ["/shentu.cert.v1alpha1.MsgCertifyPlatform", MsgCertifyPlatform]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    proposeCertifier(value: MsgProposeCertifier) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgProposeCertifier",
        value: MsgProposeCertifier.encode(value).finish()
      };
    },
    issueCertificate(value: MsgIssueCertificate) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgIssueCertificate",
        value: MsgIssueCertificate.encode(value).finish()
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgRevokeCertificate",
        value: MsgRevokeCertificate.encode(value).finish()
      };
    },
    certifyPlatform(value: MsgCertifyPlatform) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgCertifyPlatform",
        value: MsgCertifyPlatform.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    proposeCertifier(value: MsgProposeCertifier) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgProposeCertifier",
        value
      };
    },
    issueCertificate(value: MsgIssueCertificate) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgIssueCertificate",
        value
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgRevokeCertificate",
        value
      };
    },
    certifyPlatform(value: MsgCertifyPlatform) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgCertifyPlatform",
        value
      };
    }
  },
  fromJSON: {
    proposeCertifier(value: any) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgProposeCertifier",
        value: MsgProposeCertifier.fromJSON(value)
      };
    },
    issueCertificate(value: any) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgIssueCertificate",
        value: MsgIssueCertificate.fromJSON(value)
      };
    },
    revokeCertificate(value: any) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgRevokeCertificate",
        value: MsgRevokeCertificate.fromJSON(value)
      };
    },
    certifyPlatform(value: any) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgCertifyPlatform",
        value: MsgCertifyPlatform.fromJSON(value)
      };
    }
  },
  fromPartial: {
    proposeCertifier(value: MsgProposeCertifier) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgProposeCertifier",
        value: MsgProposeCertifier.fromPartial(value)
      };
    },
    issueCertificate(value: MsgIssueCertificate) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgIssueCertificate",
        value: MsgIssueCertificate.fromPartial(value)
      };
    },
    revokeCertificate(value: MsgRevokeCertificate) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgRevokeCertificate",
        value: MsgRevokeCertificate.fromPartial(value)
      };
    },
    certifyPlatform(value: MsgCertifyPlatform) {
      return {
        typeUrl: "/shentu.cert.v1alpha1.MsgCertifyPlatform",
        value: MsgCertifyPlatform.fromPartial(value)
      };
    }
  }
};