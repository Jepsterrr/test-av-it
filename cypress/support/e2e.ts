import './commands'
import 'cypress-axe'
import '@cypress-audit/lighthouse/commands'
import addMatchImageSnapshotPlugin from 'cypress-image-diff-js'
addMatchImageSnapshotPlugin()