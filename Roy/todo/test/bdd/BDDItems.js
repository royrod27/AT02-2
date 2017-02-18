var tokenGenerator = require('../../lib/helpers/TokenGenerator');
var itemsLib = require('../../lib/items.lib');

describe('Given an item in the Inbox filter', function () {
    var expectedStatus = 200;
    this.timeout(30000);

    var itemId;

    before(function (done) {
        /*Create the item in the InboxFilter*/
        tokenGenerator.generateToken(function (err, tokenValue) {
            tokenBody.TokenString = tokenValue;

            var itemJson = {
                Content: 'ItemTest'
            };
            itemsLib.createItem(itemJson, function (err, res) {
                itemId = res.body.Id;
                done();
            });

        });
    });


    after(function () {
        /*delete the item*/
    });

    it('And it is marked as done', function (done) {
        /*code to create the item already done*/
        var modifyItemJson = {
            Checked: 'true'
        };
        itemsLib.modifyItem(itemId, modifyItemJson, function (err, res) {
            console.log(res.body);
            done();
        })
    });

    it('And it is deleted', function (done) {
        /*code to delete the item*/
        itemsLib.deleteItem(itemId, function (err, res) {
            console.log(res.body);
            done()
        });
    });

    describe('When the item is restored from Recycle Bin to Inbox', function () {
        before(function (done) {
            /*code to restore from RecycleBin*/
            var restoreItemJson = {
                Deleted: 'false'
            };
            itemsLib.modifyItem(itemId, restoreItemJson, function (err, res) {
               console.log(res.body);
                done();
            });
        });

        it('Then the item is present in the Inbox list as done', function () {
            /*Get the Inbox list, verify the item is presented*/



        })
    });

    describe('When the item is unmarked as done', function () {
        before(function () {/*Code to unmark as done*/

        });
        it('Then the item is no longer part of done list', function () {
            /*Get the Inbox list, verify the item is not presented in the list*/
        });
        it('And the item on active state', function () {
            /*Verify the done is active*/
        })
    })

});