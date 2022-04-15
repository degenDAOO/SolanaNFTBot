import {ParsedConfirmedTransaction} from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  "blockTime": 1649966190,
  "meta": {
    "err": null,
    "fee": 5000,
    "innerInstructions": [{
      "index": 0,
      "instructions": [{
        "parsed": {
          "info": {
            "destination": "9C2qe4i15p1Wmb86Aa8AQuP9pH24t6PKpSmkFJoVvD5f",
            "lamports": 78990000000,
            "source": "51oET2dy4vCmZ1JMGYR9hbsvsLng1vcLD6z2AZp1uq1j"
          },
          "type": "transfer"
        },
        "program": "system",
        "programId": {
          "_bn": "00"
        }
      }, {
        "parsed": {
          "info": {
            "destination": "3F6hvmoeJGCbjdp6kjAJVtNhhzWMEPFKfsn9wFVZNAQu",
            "lamports": 897840,
            "source": "51oET2dy4vCmZ1JMGYR9hbsvsLng1vcLD6z2AZp1uq1j"
          },
          "type": "transfer"
        },
        "program": "system",
        "programId": {
          "_bn": "00"
        }
      }, {
        "parsed": {
          "info": {
            "account": "3F6hvmoeJGCbjdp6kjAJVtNhhzWMEPFKfsn9wFVZNAQu",
            "space": 1
          },
          "type": "allocate"
        },
        "program": "system",
        "programId": {
          "_bn": "00"
        }
      }, {
        "parsed": {
          "info": {
            "account": "3F6hvmoeJGCbjdp6kjAJVtNhhzWMEPFKfsn9wFVZNAQu",
            "owner": "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk"
          },
          "type": "assign"
        },
        "program": "system",
        "programId": {
          "_bn": "00"
        }
      }]
    }, {
      "index": 1,
      "instructions": [{
        "parsed": {
          "info": {
            "destination": "AMomyD8PjPLDgxfjh12SGyFXVS6UrNKjdXrwC444dnbe",
            "lamports": 3317580000,
            "source": "9C2qe4i15p1Wmb86Aa8AQuP9pH24t6PKpSmkFJoVvD5f"
          },
          "type": "transfer"
        },
        "program": "system",
        "programId": {
          "_bn": "00"
        }
      }, {
        "parsed": {
          "info": {
            "destination": "J6UJaLC1vxvZZxJgmNhuaARkU7gneJdMtY2m7zCrGBpn",
            "lamports": 1579800000,
            "source": "9C2qe4i15p1Wmb86Aa8AQuP9pH24t6PKpSmkFJoVvD5f"
          },
          "type": "transfer"
        },
        "program": "system",
        "programId": {
          "_bn": "00"
        }
      }, {
        "parsed": {
          "info": {
            "destination": "FiiX42briLcFKyvFGda7CUszxeW5qxucjMnik9MASFHK",
            "lamports": 74092620000,
            "source": "9C2qe4i15p1Wmb86Aa8AQuP9pH24t6PKpSmkFJoVvD5f"
          },
          "type": "transfer"
        },
        "program": "system",
        "programId": {
          "_bn": "00"
        }
      }, {
        "parsed": {
          "info": {
            "account": "GnBeeDsqBus8EJ82s9KHjwc5agZy4bLYHqDtX5KcN9dA",
            "mint": "Eoy36YPJzLxXaDg6CFcBtegApbsXgp65QgKAzknJVeVU",
            "rentSysvar": "SysvarRent111111111111111111111111111111111",
            "source": "51oET2dy4vCmZ1JMGYR9hbsvsLng1vcLD6z2AZp1uq1j",
            "systemProgram": "11111111111111111111111111111111",
            "tokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "wallet": "51oET2dy4vCmZ1JMGYR9hbsvsLng1vcLD6z2AZp1uq1j"
          },
          "type": "create"
        },
        "program": "spl-associated-token-account",
        "programId": {
          "_bn": "8c97258f4e2489f1bb3d1029148e0d830b5a1399daff1084048e7bd8dbe9f859"
        }
      }, {
        "parsed": {
          "info": {
            "destination": "GnBeeDsqBus8EJ82s9KHjwc5agZy4bLYHqDtX5KcN9dA",
            "lamports": 2039280,
            "source": "51oET2dy4vCmZ1JMGYR9hbsvsLng1vcLD6z2AZp1uq1j"
          },
          "type": "transfer"
        },
        "program": "system",
        "programId": {
          "_bn": "00"
        }
      }, {
        "parsed": {
          "info": {
            "account": "GnBeeDsqBus8EJ82s9KHjwc5agZy4bLYHqDtX5KcN9dA",
            "space": 165
          },
          "type": "allocate"
        },
        "program": "system",
        "programId": {
          "_bn": "00"
        }
      }, {
        "parsed": {
          "info": {
            "account": "GnBeeDsqBus8EJ82s9KHjwc5agZy4bLYHqDtX5KcN9dA",
            "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          },
          "type": "assign"
        },
        "program": "system",
        "programId": {
          "_bn": "00"
        }
      }, {
        "parsed": {
          "info": {
            "account": "GnBeeDsqBus8EJ82s9KHjwc5agZy4bLYHqDtX5KcN9dA",
            "mint": "Eoy36YPJzLxXaDg6CFcBtegApbsXgp65QgKAzknJVeVU",
            "owner": "51oET2dy4vCmZ1JMGYR9hbsvsLng1vcLD6z2AZp1uq1j",
            "rentSysvar": "SysvarRent111111111111111111111111111111111"
          },
          "type": "initializeAccount"
        },
        "program": "spl-token",
        "programId": {
          "_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"
        }
      }, {
        "parsed": {
          "info": {
            "amount": "1",
            "authority": "HS2eL9WJbh7pA4i4veK3YDwhGLRjY3uKryvG1NbHRprj",
            "destination": "GnBeeDsqBus8EJ82s9KHjwc5agZy4bLYHqDtX5KcN9dA",
            "source": "DrrXVm7QTrz8WsCk5SJedaxnStMEgNAgRHmf9ARSNT5g"
          },
          "type": "transfer"
        },
        "program": "spl-token",
        "programId": {
          "_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"
        }
      }]
    }],
    "logMessages": ["Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]", "Program log: Instruction: Buy", "Program log: Err(Custom(6013)), Ok(255), 255", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program log: Transfer 897840 lamports to the new account", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program log: Allocate space for the account 3F6hvmoeJGCbjdp6kjAJVtNhhzWMEPFKfsn9wFVZNAQu", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program log: Assign the account to the owning program", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program log: Completed assignation!", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 64672 of 200000 compute units", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]", "Program log: Instruction: ExecuteSale", "Program log: Err(Custom(6013)), Ok(255), 255", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL invoke [2]", "Program log: Transfer 2039280 lamports to the associated token account", "Program 11111111111111111111111111111111 invoke [3]", "Program 11111111111111111111111111111111 success", "Program log: Allocate space for the associated token account", "Program 11111111111111111111111111111111 invoke [3]", "Program 11111111111111111111111111111111 success", "Program log: Assign the associated token account to the SPL Token program", "Program 11111111111111111111111111111111 invoke [3]", "Program 11111111111111111111111111111111 success", "Program log: Initialize the associated token account", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]", "Program log: Instruction: InitializeAccount", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3297 of 104155 compute units", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success", "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 29430 of 129639 compute units", "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]", "Program log: Instruction: Transfer", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2712 of 90820 compute units", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 115032 of 200000 compute units", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success"],
    "postBalances": [1196654281, 0, 57129452840, 0, 11416024769, 0, 3418132200, 2039280, 95836434360, 2039280, 0, 0, 1579800000, 0, 1, 5616720, 95909480, 898174080, 4085520, 1461600, 1141440, 0, 152395037831, 1009200, 953185920],
    "postTokenBalances": [{
      "accountIndex": 7,
      "mint": "Eoy36YPJzLxXaDg6CFcBtegApbsXgp65QgKAzknJVeVU",
      "owner": "FiiX42briLcFKyvFGda7CUszxeW5qxucjMnik9MASFHK",
      "uiTokenAmount": {
        "amount": "0",
        "decimals": 0,
        "uiAmount": null,
        "uiAmountString": "0"
      }
    }, {
      "accountIndex": 9,
      "mint": "Eoy36YPJzLxXaDg6CFcBtegApbsXgp65QgKAzknJVeVU",
      "owner": "51oET2dy4vCmZ1JMGYR9hbsvsLng1vcLD6z2AZp1uq1j",
      "uiTokenAmount": {
        "amount": "1",
        "decimals": 0,
        "uiAmount": 1,
        "uiAmountString": "1"
      }
    }],
    "preBalances": [80187800721, 0, 57129452840, 0, 8098444769, 0, 3418132200, 2039280, 21743814360, 0, 0, 0, 0, 897840, 1, 5616720, 95909480, 898174080, 4085520, 1461600, 1141440, 0, 152395037831, 1009200, 953185920],
    "preTokenBalances": [{
      "accountIndex": 7,
      "mint": "Eoy36YPJzLxXaDg6CFcBtegApbsXgp65QgKAzknJVeVU",
      "owner": "FiiX42briLcFKyvFGda7CUszxeW5qxucjMnik9MASFHK",
      "uiTokenAmount": {
        "amount": "1",
        "decimals": 0,
        "uiAmount": 1,
        "uiAmountString": "1"
      }
    }],
    "rewards": [],
    "status": {
      "Ok": null
    }
  },
  "slot": 129744112,
  "transaction": {
    "message": {
      "accountKeys": [{
        "pubkey": {
          "_bn": "3ba305b2659e9cc24c45b5723c99b1d205133950689134c0296225e67c4814ea"
        },
        "signer": true,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "2153f4e19866ce6beb02427ff87b8d570cf61de3099417d158aedd5bae62e0f6"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "79823cdb6ce50873db3f895e243f94d8220b9838702ef97bbaeb6970dd2394ff"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "79b0f69608a650f3d7c71df4160f63b36257e1e6d901835302e66c88683ad5c6"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "8b0db003720013fe5069dec3842c2247c045ca72a63c357b52e9a055a9a3bb1d"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "095edf523b4a9468ab9cacfa7a2116c387b7112b0b2ba7f84713b8431fe3807d"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "b51fa29b1ddbc2641f10f9d3c921395a89b34404b498a5e989d0c7a4e7b1f8c2"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "bf11b3a5f72b6daf1f8ffa8b926d3f5c395607b8b8af4be5f48e294f1ed123cf"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "dab35ff65ff18d0dca9f12af874a9d407c28c5c7bdd2dcb3fdbeebd26bdf5022"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "ea727b2d68dda7ade4a83b6a82d4088b282f35eb90d0556e8d2b942bc013d409"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "e73f3226ad45b3168df602fb67d1239bb92dde95b3bc26f28e8bc3a61686288a"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "efaed32c8fc88c01bc69aa1e4639510a21e4b6a9863e43f2b45eb594df0fbb7c"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "fdfd74127a4c57fd64db950b565b454a39e22dfe7597a418b98b74ad7667a1c3"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "0cebf9315ddfc16527865f1d5cdc45d2bc9169f085d8ff6d74a01e8edc3bbffa"
        },
        "signer": false,
        "writable": true
      }, {
        "pubkey": {
          "_bn": "00"
        },
        "signer": false,
        "writable": false
      }, {
        "pubkey": {
          "_bn": "637115b8a3ae0fcf07761383c1b97f91988b8288028c03738c3142959b78f603"
        },
        "signer": false,
        "writable": false
      }, {
        "pubkey": {
          "_bn": "6112b908d105e60d40a07e24a901f07c5dca9a91436bb1db14b9b4a48189ed14"
        },
        "signer": false,
        "writable": false
      }, {
        "pubkey": {
          "_bn": "8c97258f4e2489f1bb3d1029148e0d830b5a1399daff1084048e7bd8dbe9f859"
        },
        "signer": false,
        "writable": false
      }, {
        "pubkey": {
          "_bn": "b5b203c328e4d74d5ad26684a7da597237562bc6720c0f493980ca2060c09d1f"
        },
        "signer": false,
        "writable": false
      }, {
        "pubkey": {
          "_bn": "cd3001ec72870d26dad89d3f4623f9672036679d39da0b852df44c169a380877"
        },
        "signer": false,
        "writable": false
      }, {
        "pubkey": {
          "_bn": "0a6593863cba461564eae41373721546eb0151c9308276bbd4ad2a1c3a42107b"
        },
        "signer": false,
        "writable": false
      }, {
        "pubkey": {
          "_bn": "f4245e977593125fb15941b6c0a9260af4438bcd10355292a40b05df87f5d520"
        },
        "signer": false,
        "writable": false
      }, {
        "pubkey": {
          "_bn": "069b8857feab8184fb687f634618c035dac439dc1aeb3b5598a0f00000000001"
        },
        "signer": false,
        "writable": false
      }, {
        "pubkey": {
          "_bn": "06a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000"
        },
        "signer": false,
        "writable": false
      }, {
        "pubkey": {
          "_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"
        },
        "signer": false,
        "writable": false
      }],
      "instructions": [{
        "accounts": [{
          "_bn": "3ba305b2659e9cc24c45b5723c99b1d205133950689134c0296225e67c4814ea"
        }, {
          "_bn": "3ba305b2659e9cc24c45b5723c99b1d205133950689134c0296225e67c4814ea"
        }, {
          "_bn": "3ba305b2659e9cc24c45b5723c99b1d205133950689134c0296225e67c4814ea"
        }, {
          "_bn": "069b8857feab8184fb687f634618c035dac439dc1aeb3b5598a0f00000000001"
        }, {
          "_bn": "bf11b3a5f72b6daf1f8ffa8b926d3f5c395607b8b8af4be5f48e294f1ed123cf"
        }, {
          "_bn": "637115b8a3ae0fcf07761383c1b97f91988b8288028c03738c3142959b78f603"
        }, {
          "_bn": "79b0f69608a650f3d7c71df4160f63b36257e1e6d901835302e66c88683ad5c6"
        }, {
          "_bn": "6112b908d105e60d40a07e24a901f07c5dca9a91436bb1db14b9b4a48189ed14"
        }, {
          "_bn": "b5b203c328e4d74d5ad26684a7da597237562bc6720c0f493980ca2060c09d1f"
        }, {
          "_bn": "e73f3226ad45b3168df602fb67d1239bb92dde95b3bc26f28e8bc3a61686288a"
        }, {
          "_bn": "2153f4e19866ce6beb02427ff87b8d570cf61de3099417d158aedd5bae62e0f6"
        }, {
          "_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"
        }, {
          "_bn": "00"
        }, {
          "_bn": "06a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000"
        }],
        "data": "48CS5rNxJb9HCDQEn1RYgSp337neL9M41cJB",
        "programId": {
          "_bn": "0a6593863cba461564eae41373721546eb0151c9308276bbd4ad2a1c3a42107b"
        }
      }, {
        "accounts": [{
          "_bn": "3ba305b2659e9cc24c45b5723c99b1d205133950689134c0296225e67c4814ea"
        }, {
          "_bn": "dab35ff65ff18d0dca9f12af874a9d407c28c5c7bdd2dcb3fdbeebd26bdf5022"
        }, {
          "_bn": "bf11b3a5f72b6daf1f8ffa8b926d3f5c395607b8b8af4be5f48e294f1ed123cf"
        }, {
          "_bn": "cd3001ec72870d26dad89d3f4623f9672036679d39da0b852df44c169a380877"
        }, {
          "_bn": "637115b8a3ae0fcf07761383c1b97f91988b8288028c03738c3142959b78f603"
        }, {
          "_bn": "069b8857feab8184fb687f634618c035dac439dc1aeb3b5598a0f00000000001"
        }, {
          "_bn": "79b0f69608a650f3d7c71df4160f63b36257e1e6d901835302e66c88683ad5c6"
        }, {
          "_bn": "dab35ff65ff18d0dca9f12af874a9d407c28c5c7bdd2dcb3fdbeebd26bdf5022"
        }, {
          "_bn": "ea727b2d68dda7ade4a83b6a82d4088b282f35eb90d0556e8d2b942bc013d409"
        }, {
          "_bn": "6112b908d105e60d40a07e24a901f07c5dca9a91436bb1db14b9b4a48189ed14"
        }, {
          "_bn": "b5b203c328e4d74d5ad26684a7da597237562bc6720c0f493980ca2060c09d1f"
        }, {
          "_bn": "e73f3226ad45b3168df602fb67d1239bb92dde95b3bc26f28e8bc3a61686288a"
        }, {
          "_bn": "fdfd74127a4c57fd64db950b565b454a39e22dfe7597a418b98b74ad7667a1c3"
        }, {
          "_bn": "2153f4e19866ce6beb02427ff87b8d570cf61de3099417d158aedd5bae62e0f6"
        }, {
          "_bn": "0cebf9315ddfc16527865f1d5cdc45d2bc9169f085d8ff6d74a01e8edc3bbffa"
        }, {
          "_bn": "efaed32c8fc88c01bc69aa1e4639510a21e4b6a9863e43f2b45eb594df0fbb7c"
        }, {
          "_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"
        }, {
          "_bn": "00"
        }, {
          "_bn": "8c97258f4e2489f1bb3d1029148e0d830b5a1399daff1084048e7bd8dbe9f859"
        }, {
          "_bn": "f4245e977593125fb15941b6c0a9260af4438bcd10355292a40b05df87f5d520"
        }, {
          "_bn": "06a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000"
        }, {
          "_bn": "8b0db003720013fe5069dec3842c2247c045ca72a63c357b52e9a055a9a3bb1d"
        }, {
          "_bn": "79823cdb6ce50873db3f895e243f94d8220b9838702ef97bbaeb6970dd2394ff"
        }, {
          "_bn": "b51fa29b1ddbc2641f10f9d3c921395a89b34404b498a5e989d0c7a4e7b1f8c2"
        }, {
          "_bn": "095edf523b4a9468ab9cacfa7a2116c387b7112b0b2ba7f84713b8431fe3807d"
        }],
        "data": "63LNsZWnP5nGenkXJBoSJHzJXMZTpYmZ5kM4B",
        "programId": {
          "_bn": "0a6593863cba461564eae41373721546eb0151c9308276bbd4ad2a1c3a42107b"
        }
      }],
      "recentBlockhash": "HxHkrw3GbdpBPSB1duVeCmHFnbazw2TxZyqDTiSKp49Z"
    },
    "signatures": ["5MZndAB9WRAmexhGhM29cspRbBHiR72UvmdDycfp8TpUQXxPwv4PkZanB81H5yJQjvXcBJT8M9dNDYTBd7UukL9u"]
  }
}
export default saleTx;