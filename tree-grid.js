Polymer({
  /**
   * The `modify` attribute can be set to `false` to prevent the tree and associated tree items from being modified.
   *
   * @attribute modify
   * @type boolean
   * @default true
   */
  modify: true,

  /*
   * A private property the contains the drag source of a tree item (used as a pointer).
   */
  dragsource: null,

  ready: function () {
    console.log('tree');
  }
});
