// (C) 2007-2018 GoodData Corporation
// from indigo-visualizations/stories/test_data/bar_chart_with_view_by_attribute

import { Execution } from '@gooddata/typings';

export const executionRequest = {
    execution: {
        afm: {
            measures: [
                {
                    definition: {
                        measure: {
                            item: {
                                uri: '/gdc/md/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/obj/1279'
                            }
                        }
                    },
                    localIdentifier: 'amountMetric',
                    format: '#,##0.00',
                    alias: 'Amount'
                }
            ],
            attributes: [
                {
                    displayForm: {
                        uri: '/gdc/md/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/obj/1027'
                    },
                    localIdentifier: 'departmentAttribute'
                }
            ]
        },
        resultSpec: {
            dimensions: [
                {
                    itemIdentifiers: [
                        'departmentAttribute'
                    ]
                },
                {
                    itemIdentifiers: [
                        'measureGroup'
                    ]
                }
            ]
        }
    }
};

const executionResponse = {
    executionResponse: {
        dimensions: [
            {
                headers: [
                    {
                        measureGroupHeader: {
                            items: [
                                {
                                    measureHeaderItem: {
                                        name: 'Amount',
                                        format: '#,##0.00',
                                        localIdentifier: 'amountMetric',
                                        uri: '/gdc/md/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/obj/1279',
                                        identifier: 'ah1EuQxwaCqs'
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            {
                headers: [
                    {
                        attributeHeader: {
                            name: 'Department',
                            localIdentifier: 'departmentAttribute',
                            uri: '/gdc/md/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/obj/1027',
                            identifier: 'label.owner.department',
                            formOf: {
                                uri: '/gdc/md/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/obj/1026',
                                identifier: 'department',
                                name: 'Department'
                            }
                        }
                    }
                ]
            }
        ],
        links: {
            executionResult: '/gdc/app/projects/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/executionResults/434288883375800256?q=eAGdkE9vwjAMxb9KFa4VDd0GGtI0Ie2PuOwwDe2Aekgbt2RKmpK4YhXqd59DEWw79mYnzz8%2FvyNz%0A0FiHb8IAW7JNjQo1SBazwurW1J9K4s6z5TaLWak0gjs3zh5CxQygU8Wrs23DSOOJxZbH8%2FRfbdYT%0AwzojSMEqp65bgu7IBBIqbxE%2BggfSPEEjHBqokfz41hjhOnqmRirfaNG9EG0t6SmpZJEYmciUQ5ff%0AHErPv%2BFOc136Qtau7nb7Gd6m%2B8TmX8mMpwti5MLDs4aA37yvR0DmCQzj%2FlHJByKesvvv%2B3LVKKPz%0AgLUodIhom2U9ZTxEPmR2yXMSTyZ8yjnpr0mtIqojW0ZC60gCUeLIQSWc1OB9%2BPAoKoisCwW2fvrr%0AipWx7Sn5Yd8I%2B%2BninvVZ%2FwOra82e%0A&c=ffe69ccaffc9cfd7c4e322941ba4cab8&dimension=Department&dimension=Amount' //tslint:disable-line
        }
    }
};

const executionResult = {
    executionResult: {
        data: [
            [
                '80406324.96',
                '36219131.58'
            ]
        ],
        headerItems: [
            [
            ],
            [
                [
                    {
                        attributeHeaderItem: {
                            name: 'Direct Sales',
                            uri: '/gdc/md/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/obj/1027/elements?id=1226'
                        }
                    },
                    {
                        attributeHeaderItem: {
                            name: 'Inside Sales',
                            uri: '/gdc/md/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/obj/1027/elements?id=1234'
                        }
                    }
                ]
            ]
        ],
        paging: {
            count: [
                1,
                2
            ],
            offset: [
                0,
                0
            ],
            total: [
                1,
                2
            ]
        }
    }
};

export const executionResponses: Execution.IExecutionResponses = {
    executionResponse,
    executionResult
};
