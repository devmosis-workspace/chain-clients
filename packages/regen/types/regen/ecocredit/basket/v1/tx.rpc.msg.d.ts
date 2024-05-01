import { Rpc } from "../../../../helpers";
import { MsgCreate, MsgCreateResponse, MsgPut, MsgPutResponse, MsgTake, MsgTakeResponse, MsgUpdateBasketFee, MsgUpdateBasketFeeResponse, MsgUpdateCurator, MsgUpdateCuratorResponse, MsgUpdateDateCriteria, MsgUpdateDateCriteriaResponse } from "./tx";
/** Msg is the regen.ecocredit.basket.v1 Msg service. */
export interface Msg {
    /**
     * Create creates a basket that can hold different types of ecocredits that
     * meet the basket's criteria. Upon depositing ecocredits into the basket,
     * basket tokens are minted and sent to depositor using the Cosmos SDK Bank
     * module. This allows basket tokens to be utilized within IBC. Basket tokens
     * are fully fungible with other basket tokens from the same basket. The
     * basket token denom is derived from the basket name, credit type
     * abbreviation, and credit type precision (i.e. basket name "foo", credit
     * type exponent 6, and credit type abbreviation "C" generates the denom
     * eco.uC.foo). Baskets can limit credit acceptance criteria based on a
     * combination of credit type, credit classes, and credit batch start date.
     * Credits can be taken from the basket in exchange for basket tokens. Taken
     * credits will be immediately retired, unless disable_auto_retire is set to
     * true. When set to true, credits may be received in either a tradable or
     * retired state, depending on the taker's request. If the basket fee
     * governance parameter is set, a fee of equal or greater value must be
     * provided in the request. Only the amount specified in the fee parameter
     * will be charged, even if a greater value fee is provided. Fees from
     * creating a basket are burned.
     */
    create(request: MsgCreate): Promise<MsgCreateResponse>;
    /**
     * Put deposits credits into the basket from the holder's tradable balance in
     * exchange for basket tokens. The amount of tokens received is calculated by
     * the following formula: sum(credits_deposited) * 10^credit_type_exponent.
     * The credits being deposited MUST adhere to the criteria of the basket.
     */
    put(request: MsgPut): Promise<MsgPutResponse>;
    /**
     * Take exchanges basket tokens for credits from the specified basket. Credits
     * are taken deterministically, ordered by oldest batch start date to the most
     * recent batch start date. If the basket has disable_auto_retire set to
     * false, both retirement_jurisdiction and retire_on_take must be set, and the
     * taken credits will be retired immediately upon receipt. Otherwise, credits
     * may be received as tradable or retired, based on the request.
     */
    take(request: MsgTake): Promise<MsgTakeResponse>;
    /**
     * UpdateBasketFee is a governance method that allows for updating the basket
     * creation fee. If not set, the basket creation fee will be removed and no
     * fee will be required to create a basket.
     *
     * Since Revision 2
     */
    updateBasketFee(request: MsgUpdateBasketFee): Promise<MsgUpdateBasketFeeResponse>;
    /**
     * UpdateCurator updates basket curator.
     *
     * Since Revision 2
     */
    updateCurator(request: MsgUpdateCurator): Promise<MsgUpdateCuratorResponse>;
    /**
     * UpdateDateCriteria is a governance method that allows for updating the date
     * criteria of a basket. Updating basket date criteria could affect the value
     * of basket tokens and therefore requires a network-wide governance process.
     *
     * Since Revision 3
     */
    updateDateCriteria(request: MsgUpdateDateCriteria): Promise<MsgUpdateDateCriteriaResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    create(request: MsgCreate): Promise<MsgCreateResponse>;
    put(request: MsgPut): Promise<MsgPutResponse>;
    take(request: MsgTake): Promise<MsgTakeResponse>;
    updateBasketFee(request: MsgUpdateBasketFee): Promise<MsgUpdateBasketFeeResponse>;
    updateCurator(request: MsgUpdateCurator): Promise<MsgUpdateCuratorResponse>;
    updateDateCriteria(request: MsgUpdateDateCriteria): Promise<MsgUpdateDateCriteriaResponse>;
}
