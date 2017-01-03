import barLine from './modules/barLine'
import funnel from './modules/funnel'
import radar from './modules/radar'
import stackedbarLine from './modules/stackedbarLine'
import heatmap from './modules/heatmap'
import parallel from './modules/parallel'
import cartesian from './modules/cartesian'

import bLData from './data/bLData'
import fnData from './data/fnData'
import rdData from './data/rdData'
import skbLData from './data/skbLData'
import hmData from './data/hmData'
import plData from './data/plData'
import crtData from './data/crtData'

import $ from 'npm-zepto'

barLine.sketch(bLData);
funnel.sketch(fnData);
radar.sketch(rdData);
stackedbarLine.sketch(skbLData);
heatmap.sketch(hmData);
parallel.sketch(plData);
cartesian.sketch(crtData);

$('.js_crt_menu').on('click', 'li', function (e) {
    var $target = $(e.target);
    var city = $target.text();
    $target.addClass('active').siblings().removeClass('active');

    crtData.city = city;
    cartesian.sketch(crtData);
});
$('.js_hm_menu').on('click', 'li', function (e) {
    var $target = $(e.target);
    var hour = $target.text();
    $target.addClass('active').siblings().removeClass('active');

    hmData.hour = hour;
    heatmap.sketch(hmData);
});
