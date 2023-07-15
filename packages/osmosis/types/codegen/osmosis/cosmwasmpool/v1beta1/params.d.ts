import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
    /**
     * code_ide_whitelist contains the list of code ids that are allowed to be
     * instantiated.
     */
    codeIdWhitelist: Long[];
    /**
     * pool_migration_limit is the maximum number of pools that can be migrated
     * at once via governance proposal. This is to have a constant bound on the
     * number of pools that can be migrated at once and remove the possibility
     * of an unlikely scenario of causing a chain halt due to a large migration.
     */
    poolMigrationLimit: Long;
}
export interface ParamsSDKType {
    code_id_whitelist: Long[];
    pool_migration_limit: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
