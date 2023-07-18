import * as _0 from "./axelarnet/v1beta1/events";
import * as _1 from "./axelarnet/v1beta1/genesis";
import * as _2 from "./axelarnet/v1beta1/params";
import * as _3 from "./axelarnet/v1beta1/query";
import * as _4 from "./axelarnet/v1beta1/service";
import * as _5 from "./axelarnet/v1beta1/tx";
import * as _6 from "./axelarnet/v1beta1/types";
import * as _7 from "./evm/v1beta1/events";
import * as _8 from "./evm/v1beta1/genesis";
import * as _9 from "./evm/v1beta1/params";
import * as _10 from "./evm/v1beta1/query";
import * as _11 from "./evm/v1beta1/service";
import * as _12 from "./evm/v1beta1/tx";
import * as _13 from "./evm/v1beta1/types";
import * as _14 from "./multisig/exported/v1beta1/types";
import * as _15 from "./multisig/v1beta1/events";
import * as _16 from "./multisig/v1beta1/genesis";
import * as _17 from "./multisig/v1beta1/params";
import * as _18 from "./multisig/v1beta1/query";
import * as _19 from "./multisig/v1beta1/service";
import * as _20 from "./multisig/v1beta1/tx";
import * as _21 from "./multisig/v1beta1/types";
import * as _22 from "./nexus/exported/v1beta1/types";
import * as _23 from "./nexus/v1beta1/events";
import * as _24 from "./nexus/v1beta1/genesis";
import * as _25 from "./nexus/v1beta1/params";
import * as _26 from "./nexus/v1beta1/query";
import * as _27 from "./nexus/v1beta1/service";
import * as _28 from "./nexus/v1beta1/tx";
import * as _29 from "./nexus/v1beta1/types";
import * as _30 from "./permission/exported/v1beta1/types";
import * as _31 from "./permission/v1beta1/genesis";
import * as _32 from "./permission/v1beta1/params";
import * as _33 from "./permission/v1beta1/query";
import * as _34 from "./permission/v1beta1/service";
import * as _35 from "./permission/v1beta1/tx";
import * as _36 from "./permission/v1beta1/types";
import * as _37 from "./reward/v1beta1/genesis";
import * as _38 from "./reward/v1beta1/params";
import * as _39 from "./reward/v1beta1/query";
import * as _40 from "./reward/v1beta1/service";
import * as _41 from "./reward/v1beta1/tx";
import * as _42 from "./reward/v1beta1/types";
import * as _43 from "./snapshot/exported/v1beta1/types";
import * as _44 from "./snapshot/v1beta1/genesis";
import * as _45 from "./snapshot/v1beta1/params";
import * as _46 from "./snapshot/v1beta1/query";
import * as _47 from "./snapshot/v1beta1/service";
import * as _48 from "./snapshot/v1beta1/tx";
import * as _49 from "./snapshot/v1beta1/types";
import * as _50 from "./tss/exported/v1beta1/types";
import * as _51 from "./tss/tofnd/v1beta1/common";
import * as _52 from "./tss/tofnd/v1beta1/multisig";
import * as _53 from "./tss/tofnd/v1beta1/tofnd";
import * as _54 from "./tss/v1beta1/genesis";
import * as _55 from "./tss/v1beta1/params";
import * as _56 from "./tss/v1beta1/service";
import * as _57 from "./tss/v1beta1/tx";
import * as _58 from "./tss/v1beta1/types";
import * as _59 from "./utils/v1beta1/bitmap";
import * as _60 from "./utils/v1beta1/queuer";
import * as _61 from "./utils/v1beta1/threshold";
import * as _62 from "./vote/exported/v1beta1/types";
import * as _63 from "./vote/v1beta1/events";
import * as _64 from "./vote/v1beta1/genesis";
import * as _65 from "./vote/v1beta1/params";
import * as _66 from "./vote/v1beta1/service";
import * as _67 from "./vote/v1beta1/tx";
import * as _68 from "./vote/v1beta1/types";
import * as _182 from "./permission/v1beta1/service.amino";
import * as _183 from "./permission/v1beta1/service.registry";
import * as _184 from "./permission/v1beta1/service.lcd";
import * as _185 from "./permission/v1beta1/service.rpc.Query";
import * as _186 from "./permission/v1beta1/service.rpc.msg";
import * as _267 from "./lcd";
import * as _268 from "./rpc.query";
import * as _269 from "./rpc.tx";
export namespace axelar {
  export namespace axelarnet {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6
    };
  }
  export namespace evm {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13
    };
  }
  export namespace multisig {
    export namespace exported {
      export const v1beta1 = {
        ..._14
      };
    }
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21
    };
  }
  export namespace nexus {
    export namespace exported {
      export const v1beta1 = {
        ..._22
      };
    }
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29
    };
  }
  export namespace permission {
    export namespace exported {
      export const v1beta1 = {
        ..._30
      };
    }
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._186
    };
  }
  export namespace reward {
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._42
    };
  }
  export namespace snapshot {
    export namespace exported {
      export const v1beta1 = {
        ..._43
      };
    }
    export const v1beta1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49
    };
  }
  export namespace tss {
    export namespace exported {
      export const v1beta1 = {
        ..._50
      };
    }
    export namespace tofnd {
      export const v1beta1 = {
        ..._51,
        ..._52,
        ..._53
      };
    }
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58
    };
  }
  export namespace utils {
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61
    };
  }
  export namespace vote {
    export namespace exported {
      export const v1beta1 = {
        ..._62
      };
    }
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68
    };
  }
  export const ClientFactory = {
    ..._267,
    ..._268,
    ..._269
  };
}