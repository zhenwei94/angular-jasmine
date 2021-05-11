import {ArtifactArchiver, configure} from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import 'zone.js/dist/zone-testing';

const jasmineReport = require('@serenity-js/jasmine');

jasmine.getEnv().addReporter(new jasmineReport());

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000

configure({
    crew: [ 
        ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
        new SerenityBDDReporter(),
    ]
})