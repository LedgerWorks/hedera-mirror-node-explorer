/*-
 *
 * Hedera Mirror Node Explorer
 *
 * Copyright (C) 2021 - 2022 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {EntityCache} from "@/utils/EntityCache";
import {ContractsResponse} from "@/schemas/HederaSchemas";
import axios, {AxiosResponse} from "axios";

export class ContractCache extends EntityCache<ContractsResponse> {

    private readonly limit: number

    //
    // Public
    //

    public constructor(limit = 100, updatePeriod: number|null = null) {
        super(updatePeriod)
        this.limit = limit
    }


    //
    // EntityCache
    //

    protected load(): Promise<AxiosResponse<ContractsResponse>> {
        const params = {
            limit: this.limit
        }
        return axios.get<ContractsResponse>("api/v1/contracts", { params: params} )
    }

}
