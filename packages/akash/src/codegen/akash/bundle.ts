import * as _0 from "./audit/v1beta1/audit";
import * as _1 from "./audit/v1beta2/audit";
import * as _2 from "./audit/v1beta2/genesis";
import * as _3 from "./audit/v1beta2/query";
import * as _4 from "./base/v1beta1/attribute";
import * as _5 from "./base/v1beta1/endpoint";
import * as _6 from "./base/v1beta1/resource";
import * as _7 from "./base/v1beta1/resourcevalue";
import * as _8 from "./base/v1beta2/attribute";
import * as _9 from "./base/v1beta2/endpoint";
import * as _10 from "./base/v1beta2/resource";
import * as _11 from "./base/v1beta2/resourceunits";
import * as _12 from "./base/v1beta2/resourcevalue";
import * as _13 from "./cert/v1beta2/cert";
import * as _14 from "./cert/v1beta2/genesis";
import * as _15 from "./cert/v1beta2/query";
import * as _16 from "./deployment/v1beta1/authz";
import * as _17 from "./deployment/v1beta1/deployment";
import * as _18 from "./deployment/v1beta1/genesis";
import * as _19 from "./deployment/v1beta1/group";
import * as _20 from "./deployment/v1beta1/params";
import * as _21 from "./deployment/v1beta1/query";
import * as _22 from "./deployment/v1beta2/authz";
import * as _23 from "./deployment/v1beta2/deployment";
import * as _24 from "./deployment/v1beta2/deploymentmsg";
import * as _25 from "./deployment/v1beta2/genesis";
import * as _26 from "./deployment/v1beta2/group";
import * as _27 from "./deployment/v1beta2/groupid";
import * as _28 from "./deployment/v1beta2/groupmsg";
import * as _29 from "./deployment/v1beta2/groupspec";
import * as _30 from "./deployment/v1beta2/params";
import * as _31 from "./deployment/v1beta2/query";
import * as _32 from "./deployment/v1beta2/resource";
import * as _33 from "./deployment/v1beta2/service";
import * as _34 from "./escrow/v1beta1/genesis";
import * as _35 from "./escrow/v1beta1/query";
import * as _36 from "./escrow/v1beta1/types";
import * as _37 from "./escrow/v1beta2/genesis";
import * as _38 from "./escrow/v1beta2/query";
import * as _39 from "./escrow/v1beta2/types";
import * as _40 from "./inflation/v1beta2/genesis";
import * as _41 from "./inflation/v1beta2/params";
import * as _42 from "./market/v1beta2/bid";
import * as _43 from "./market/v1beta2/genesis";
import * as _44 from "./market/v1beta2/lease";
import * as _45 from "./market/v1beta2/order";
import * as _46 from "./market/v1beta2/params";
import * as _47 from "./market/v1beta2/query";
import * as _48 from "./market/v1beta2/service";
import * as _49 from "./provider/v1beta1/provider";
import * as _50 from "./provider/v1beta2/genesis";
import * as _51 from "./provider/v1beta2/provider";
import * as _52 from "./provider/v1beta2/query";
import * as _153 from "./audit/v1beta1/audit.amino";
import * as _154 from "./audit/v1beta2/audit.amino";
import * as _155 from "./cert/v1beta2/cert.amino";
import * as _156 from "./deployment/v1beta1/deployment.amino";
import * as _157 from "./deployment/v1beta2/service.amino";
import * as _158 from "./market/v1beta2/service.amino";
import * as _159 from "./provider/v1beta1/provider.amino";
import * as _160 from "./provider/v1beta2/provider.amino";
import * as _161 from "./audit/v1beta1/audit.registry";
import * as _162 from "./audit/v1beta2/audit.registry";
import * as _163 from "./cert/v1beta2/cert.registry";
import * as _164 from "./deployment/v1beta1/deployment.registry";
import * as _165 from "./deployment/v1beta2/service.registry";
import * as _166 from "./market/v1beta2/service.registry";
import * as _167 from "./provider/v1beta1/provider.registry";
import * as _168 from "./provider/v1beta2/provider.registry";
import * as _169 from "./audit/v1beta2/query.lcd";
import * as _170 from "./cert/v1beta2/query.lcd";
import * as _171 from "./deployment/v1beta1/query.lcd";
import * as _172 from "./deployment/v1beta2/query.lcd";
import * as _173 from "./escrow/v1beta1/query.lcd";
import * as _174 from "./escrow/v1beta2/query.lcd";
import * as _175 from "./market/v1beta2/query.lcd";
import * as _176 from "./provider/v1beta2/query.lcd";
import * as _177 from "./audit/v1beta2/query.rpc.Query";
import * as _178 from "./cert/v1beta2/query.rpc.Query";
import * as _179 from "./deployment/v1beta1/query.rpc.Query";
import * as _180 from "./deployment/v1beta2/query.rpc.Query";
import * as _181 from "./escrow/v1beta1/query.rpc.Query";
import * as _182 from "./escrow/v1beta2/query.rpc.Query";
import * as _183 from "./market/v1beta2/query.rpc.Query";
import * as _184 from "./provider/v1beta2/query.rpc.Query";
import * as _185 from "./audit/v1beta1/audit.rpc.msg";
import * as _186 from "./audit/v1beta2/audit.rpc.msg";
import * as _187 from "./cert/v1beta2/cert.rpc.msg";
import * as _188 from "./deployment/v1beta1/deployment.rpc.msg";
import * as _189 from "./deployment/v1beta2/service.rpc.msg";
import * as _190 from "./market/v1beta2/service.rpc.msg";
import * as _191 from "./provider/v1beta1/provider.rpc.msg";
import * as _192 from "./provider/v1beta2/provider.rpc.msg";
import * as _251 from "./lcd";
import * as _252 from "./rpc.query";
import * as _253 from "./rpc.tx";
export namespace akash {
  export namespace audit {
    export const v1beta1 = {
      ..._0,
      ..._153,
      ..._161,
      ..._185
    };
    export const v1beta2 = {
      ..._1,
      ..._2,
      ..._3,
      ..._154,
      ..._162,
      ..._169,
      ..._177,
      ..._186
    };
  }
  export namespace base {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7
    };
    export const v1beta2 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12
    };
  }
  export namespace cert {
    export const v1beta2 = {
      ..._13,
      ..._14,
      ..._15,
      ..._155,
      ..._163,
      ..._170,
      ..._178,
      ..._187
    };
  }
  export namespace deployment {
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._156,
      ..._164,
      ..._171,
      ..._179,
      ..._188
    };
    export const v1beta2 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._157,
      ..._165,
      ..._172,
      ..._180,
      ..._189
    };
  }
  export namespace escrow {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._173,
      ..._181
    };
    export const v1beta2 = {
      ..._37,
      ..._38,
      ..._39,
      ..._174,
      ..._182
    };
  }
  export namespace inflation {
    export const v1beta2 = {
      ..._40,
      ..._41
    };
  }
  export namespace market {
    export const v1beta2 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._158,
      ..._166,
      ..._175,
      ..._183,
      ..._190
    };
  }
  export namespace provider {
    export const v1beta1 = {
      ..._49,
      ..._159,
      ..._167,
      ..._191
    };
    export const v1beta2 = {
      ..._50,
      ..._51,
      ..._52,
      ..._160,
      ..._168,
      ..._176,
      ..._184,
      ..._192
    };
  }
  export const ClientFactory = {
    ..._251,
    ..._252,
    ..._253
  };
}